const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', userRoutes);

const PORT = 3306;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
