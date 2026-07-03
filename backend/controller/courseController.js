import * as Course from '../model/courseModel.js';

// GET ALL COURSES (Read)
export const getCourses = async (req, res) => {
    try {
        const courses = await Course.getAllCourses();
        res.status(200).json(courses);
    } catch (err) {
        console.error("Error fetching courses:", err);
        res.status(500).json({ error: "Failed to fetch courses" });
    }
};

// ADD A COURSE (Create)
export const addCourse = async (req, res) => {
    const { title, category, description, image_url } = req.body;
    try {
        await Course.createCourse(title, category, description, image_url);
        res.status(201).json({ message: "Course added successfully!" });
    } catch (err) {
        console.error("Error adding course:", err);
        res.status(500).json({ error: "Failed to add course" });
    }
};

// EDIT A COURSE (Update)
export const editCourse = async (req, res) => {
    const courseId = req.params.id;
    const { title, category, description, image_url } = req.body;
    try {
        await Course.updateCourse(courseId, title, category, description, image_url);
        res.status(200).json({ message: "Course updated successfully!" });
    } catch (err) {
        console.error("Error updating course:", err);
        res.status(500).json({ error: "Failed to update course" });
    }
};

// REMOVE A COURSE (Delete)
export const removeCourse = async (req, res) => {
    const courseId = req.params.id;
    try {
        await Course.deleteCourse(courseId);
        res.status(200).json({ message: "Course deleted successfully!" });
    } catch (err) {
        console.error("Error deleting course:", err);
        res.status(500).json({ error: "Failed to delete course" });
    }
};