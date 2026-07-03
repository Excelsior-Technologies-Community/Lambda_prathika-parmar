import express from 'express';
import * as courseController from '../controller/courseController.js';
import { verifyToken, isAdmin } from '../middleware/authMiddleware.js'; // MIDDLEWARE IMPORT KIYA

const router = express.Router();

// GET all courses (Publicly readable - Isme middleware nahi lagega)
router.get('/', courseController.getCourses);

// POST a new course (Admin only - verifyToken aur isAdmin lagaya gaya hai)
router.post('/', verifyToken, isAdmin, courseController.addCourse);

// PUT/UPDATE an existing course by ID (Admin only)
router.put('/:id', verifyToken, isAdmin, courseController.editCourse);

// DELETE a course by ID (Admin only)
router.delete('/:id', verifyToken, isAdmin, courseController.removeCourse);

export default router;