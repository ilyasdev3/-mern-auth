const User = require('../model/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = 'MyKey'

const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            const hashPassword = bcrypt.hashSync(password)
            const user = new User({
                name,
                email,
                password: hashPassword
            })
            await user.save();
            return res.status(201).json({ message: user })
        } else {
            return res.status(400).json({ message: "user already existed! login instead" })
        }

    } catch (err) {
        console.log(err);
    }
}

const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email })
        if (!existingUser) {
            return res.status(400).json({ message: "user not found! please signup" })
        } else {
            const isCorrectPassword = bcrypt.compareSync(password, existingUser.password)
            if (!isCorrectPassword) {
                return res.status(400).json({ message: 'invalid email / and password' })
            } else {
                const token = jwt.sign({ id: existingUser._id }, JWT_SECRET_KEY, {
                    expiresIn: "1hr"
                })
                res.cookie(String(existingUser._id), token, {
                    path: '/',
                    expires: new Date(Date.now() + 1000 * 30),
                    httpOnly: true,
                    sameSite: 'lax'
                })
                return res.status(200).json({ message: "loggedIn Successfully", user: existingUser, token })
            }
        }
    } catch (err) {
        console.log(err);
    }
}
const verifyToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    const token = cookies.split("=")[1]
    console.log(token);

    if (!token) {
        res.status(400).json({ message: "token not found" })
    } else {
        jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
            if (err) {
                return req.status(400).json({ message: "Invalid token" })
            }
            console.log(user.id);
            req.id = user.id
        })
    }
    next()
}
const getUser = async (req, res, next) => {
    const userId = req.id;
    let user;
    try {
        user = await User.findById(userId, "-password")
        if (!user) {

            return res.status(400).json({ message: "user not found" })
        } else {
            return res.status(200).json({ user })
        }
    } catch (err) {
        console.log(err);
    }
}
module.exports = { signup, login, verifyToken, getUser }