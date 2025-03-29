const db = require('../config/connection');

const User = {
    create: (data, callback) => {
        console.log(data);
        const query = 'INSERT INTO Registrations (first_name,last_name, email, phone_number, training_type_id,interested_in) VALUES (?, ?, ?, ?,?,?)';
        db.query(query, [data.first_name, data.last_name, data.email, data.mobile, data.training_type,data.interested], callback);
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM TrainingTypes';
        db.query(query, callback);
    }
};

module.exports = User;
