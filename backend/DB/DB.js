const mongoose = require('mongoose');

const DBConnection = async () => {
    await mongoose.connect('mongodb+srv://username:<password>@cluster0.suvdu4n.mongodb.net/mern_auth?retryWrites=true&w=majority').then(() => {
        console.log('database connected');
    }).catch((err) => {
        console.log(err);
    });

}

module.exports = { DBConnection }