
import { Story } from "../models/story.js";



export const createStory = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Blog image is required",
      });
    }

    const story = await Story.create({
      title,
      description,
      image: req.file.filename,
    });

    res.status(201).json({
      message: "Story created successfully",
      story,
    });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      message: "Server error",
    });
  }
};




export const fetchStory = async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });

    res.status(200).json({
      stories,
      message: "Stories fetched successfully",
    });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      message: "Server error",
    });
  }
};




export const updateStory = async (req, res) => {
  try {
    const id = req.params.id;

    const { title, description } = req.body;

    const updateData = {
      title,
      description,
    };

    // If a new image is uploaded
    if (req.file) {
      updateData.image = req.file.filename;
    }

    const story = await Story.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!story) {
      return res.status(404).json({
        message: "Story not found",
      });
    }

    res.status(200).json({
      message: "Story updated successfully",
      story,
    });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      message: "Server error",
    });
  }
};




export const deleteStory = async (req, res) => {
  try {
    const id = req.params.id;

    const story = await Story.findByIdAndDelete(id);

    if (!story) {
      return res.status(404).json({
        message: "Story not found",
      });
    }

    res.status(200).json({
      message: "Story deleted successfully",
    });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      message: "Server error",
    });
  }
};