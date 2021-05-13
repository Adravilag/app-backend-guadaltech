const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log("Base datos funcionando")

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de ejecutar la base de datos');
    }

}

module.exports = { dbConnection }