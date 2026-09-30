import express from 'express'
import { deleteUser, getProfile, loginUser, registerUser, updateUser,verifyOTP } from '../controllers/userController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const router = express.Router()
router.post('/register',registerUser)
router.get('/login',loginUser)
router.patch('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)
router.get('/getprofile', authMiddleware, getProfile)
router.post("/verify-otp", verifyOTP);

export default router 