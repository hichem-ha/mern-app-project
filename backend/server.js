const express = require('express');
const connectDB = require('./config/connectDB');
const userRoutes = require('./routes/auth');
const app = express();
const port = 5000;
app.use(express.json());
connectDB();
app.use('/api/users',userRoutes);

app.listen(port,(()=> console.log(`server is running on port ${port}`)));