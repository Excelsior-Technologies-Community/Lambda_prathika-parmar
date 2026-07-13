import db from '../config/db.js'; 

export const findUserByEmail = async (email) => {
    // Yahan role select karna zaroori hai!
    const [rows] = await db.execute('SELECT id, username, email, password, role FROM users WHERE email = ?', [email]);
    return rows[0];
};

export const createUser = async (username, email, password) => {
    // Default role 'user' set kar rahe hain
    const [result] = await db.execute(
        'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
        [username, email, password, 'user']
    );
    return result;
};

export const getAllUsers = async () => {

    try{
    const [rows] = await db.execute("SELECT * FROM users");
    return rows;
    }catch(err){
        throw error;
    }
    

};