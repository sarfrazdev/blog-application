import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
  sendOTPEmail,
  sendWelcomeEmail,
} from "../utils/sendEmail.js";






export const registerUser = async (req, res) => {
  try {
    const { name, email, phone_no, password } = req.body;

    if (!name || !email || !phone_no || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

 
    const existingUser = await User.findOne({ email });

    if (existingUser && existingUser.isVerified) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }


    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();


    const otpExpiry = new Date(
      Date.now() + 5 * 60 * 1000
    );

  
    const hashPassword = await bcrypt.hash(password, 10);

    let user;

    if (existingUser) {
    

      existingUser.name = name;
      existingUser.phone_no = phone_no;
      existingUser.password = hashPassword;
      existingUser.otp = otp;
      existingUser.otpExpiry = otpExpiry;

      user = await existingUser.save();
    } else {
     

      user = await User.create({
        name,
        email,
        phone_no,
        password: hashPassword,
        otp,
        otpExpiry,
        isVerified: false,
      });
    }

    await sendOTPEmail(email, otp);

    res.status(200).json({
      message: "OTP sent successfully to your email",
      email: user.email,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

   
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }


    const matchPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!matchPassword) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    
    const token = jwt.sign(
      {
        userid: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone_no: user.phone_no,
      },
      token,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};


export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userid)
      .select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Profile fetched successfully",
      user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};



export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const { name, email, phone_no, password } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    if (phone_no) {
      user.phone_no = phone_no;
    }

    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();

    res.status(200).json({
      message: "User updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone_no: user.phone_no,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};



export const deleteUser = async (req, res) => {
  try { 
    const id = req.params.id;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: "Email and OTP are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        message: "Email already verified",
      });
    }


    if (user.otp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }


    if (!user.otpExpiry || user.otpExpiry < new Date()) {
      return res.status(400).json({
        message: "OTP has expired",
      });
    }

    
    user.isVerified = true;


    user.otp = null;
    user.otpExpiry = null;

    await user.save();

    await sendWelcomeEmail(user.email, user.name);


    const token = jwt.sign(
      {
        userid: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.status(200).json({
      message: "Email verified successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone_no: user.phone_no,
      },
      token,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};