import db  from '../config/db';

const UserModel = {
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], (err, results) => {
            callback(err, results);
        });
    },
    
    createUser: (name, email, hashedpassword, callback) => {
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(query, [name, email, hashedpassword], (err, results) => {
            callback(err, results);
        });
    },
};

export default UserModel;