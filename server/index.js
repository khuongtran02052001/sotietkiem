require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongdb = require('mongodb')
const mongoose = require('mongoose');
const userSchema = require('./model/Users');
// const router = require('./controllers/User')
const app = express();
const PORT = process.env.PORT || 5000;
const authRouter = require('./router/auth')
const passbookRouter = require('./router/openpassbook')
const depositslip = require('./router/phieugui')
const withdrawalslip = require('./router/phieurut')
const search = require('./router/search')
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hwblh.mongodb.net/QUANLYSOTIETKIEM?retryWrites=true&w=majority`), {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }
        console.log('mongoose connect')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
connectDB()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/passbook', passbookRouter)
app.use('/api/depositslip', depositslip)
app.use('/api/withdrawalslip', withdrawalslip)
app.use('/api/search', search)

app.listen(PORT, (req, res) => {
    console.log('listening on port on port 5000')
})