const mongoose = require("mongoose")


async function main(){

    try {
        process.env.REACT_APP_FLY_API
        mongoose.set("strictQuery", true)
        await mongoose.connect('mongodb+srv://MatheusLoubach:CQrv8ZchRqgyqVx1@cluster0.mnqn7sq.mongodb.net/?retryWrites=true&w=majority');

        console.log("Banco Conectado", mongoose.connection.host);
    } catch (error) {
            console.log(`error: ${error}`);        
    }
}

module.exports = main