import db from '../config/db.js'; 

// READ ALL COURSES
export const getAllCourses = async () => {
    // When calling a stored procedure, mysql2 wraps the result in an extra array
    const [rows] = await db.execute('CALL sp_GetAllCourses()');
    return rows[0]; 
};

// CREATE COURSE
export const createCourse = async (title, category, description, image_url) => {
    const [result] = await db.execute(
        'CALL sp_AddCourse(?, ?, ?, ?)',
        [title, category, description, image_url]
    );
    return result;
};

// UPDATE COURSE
export const updateCourse = async (id, title, category, description, image_url) => {
    const [result] = await db.execute(
        'CALL sp_UpdateCourse(?, ?, ?, ?, ?)',
        [id, title, category, description, image_url]
    );
    return result;
};

// DELETE COURSE
export const deleteCourse = async (id) => {
    const [result] = await db.execute('CALL sp_DeleteCourse(?)', [id]);
    return result;
};