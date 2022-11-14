const express = require('express');
const app = express();
const router = require('./routes/user-routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { DBConnection } = require('./DB/DB')


app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use('/api', router)

DBConnection()


app.listen(5000, () => {
    console.log("server running on port 5000");
})
