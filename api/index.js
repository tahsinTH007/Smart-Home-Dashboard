const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRouter = require('./routes/user')
const userAuth = require('./routes/auth')
const cors = require('cors')

dotenv.config();

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',  // Replace with your client's origin
    credentials: true
  };

// Database connection
mongoose.connect('mongodb://localhost:27017/smart-home-dashboard')
                           .then(() => {
                            console.log("Mongodb connected");
                           })
                           .catch(err => console.log(err));

// Middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cors(corsOptions));

app.use('/api/users', userRouter)
app.use('/api/auth', userAuth)

app.get('/', (req, res) => {
    console.log("homepage");
    res.send('homepage')
})


app.listen(5000,() => {
    console.log("Server is listing at port 5000");
})