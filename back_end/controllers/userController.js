const User = require('../models/userModel');

const createUser = (req, res) => {
    const userData = req.body;
    console.log('user data',userData);
    User.create(userData, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Error inserting data');
        }
        console.log('Data inserted successfully:', result);
        return res.send('User saved successfully!');
    });
};

const getTrainingTypes = (req, res) => {
    User.findAll((err, data) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).send('Error fetching data');
        }
        return res.json(data);
    });
};

module.exports = {
    createUser,
    getTrainingTypes
};
