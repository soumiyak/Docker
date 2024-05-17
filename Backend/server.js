const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const {connectdb} = require('./connect');
const userRoutes=require('./routes/USR_routes')
const adminRoutes=require('./routes/ADM_routes');

dotenv.config();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/KECnptel/',(req,res)=>{
    res.send('KEC NPTEL Course Monitoring app')
})

app.use('/User',userRoutes)
app.use('/Admin',adminRoutes)

connectdb()
.then(() => {
    console.log('Db connected')})
.catch(err => {
    console.log(err.message, 'An error occured');
    });

const port = process.env.port || 3000
app.listen(port, () => {
console.log(`Server is running at port ${port}`)
});
