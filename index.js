const express = require("express")
const cors = require("cors")
const app = express()


app.use((cors()))
app.use(express.json())

//DB
const db = require("./src/db/dbConnection")
db();

//Routers
const routes = require("./src/routes/router")
app.use('/api', routes);


app.listen(3000, function(){
    console.log('Servidor Online porta 3000');
})