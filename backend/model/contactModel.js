import db from '../config/db.js';

export const create = async(name, email, subject, message) => {
    const [result] = await db.execute(
        'CALL sp_AddContactMessage(?, ?, ?, ?)',
        [name, email, subject, message]
    );
    return result;
};

