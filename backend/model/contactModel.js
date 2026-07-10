import db from '../config/db.js';

export const create = async(name, email, subject, message) => {
    const [result] = await db.execute(
        'CALL sp_AddContactMessage(?, ?, ?, ?)',
        [name, email, subject, message]
    );
    return result;
};

export const getAllMessages = async () => {
    const [rows] = await db.execute('SELECT * FROM contact_messages');
    return rows; 
};

