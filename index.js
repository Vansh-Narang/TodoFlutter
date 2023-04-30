const app = require('./app');
const connection = require('./config/db')
const userModel = require('./model/usermodel')
const port = 3000


app.get('/', (req, res) => {
    res.send("Hey!")
})
app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})


//Routes are url's
//controller used for requesting the data from the user models(communication)
//services for database communication
//config for database (mongodb)