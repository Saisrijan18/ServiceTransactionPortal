const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeURL = require('./Routes/route')
const cors = require('cors');
const cookieParser = require('cookie-parser')
const professionals = require('./Routes/professionals');
const PORT=process.env.PORT || 4000;
let corsOptions = {
  origin: 'http://localhost:4000/' 
};
let app = express();  // Compliant
app.disable("x-powered-by");
//config
dotenv.config()
mongoose.connect(process.env.ACCESS_NIKHIL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}, () => console.log('database connected') )
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions));
app.use('/professionals',professionals)
app.use('/app',routeURL)
app.listen(PORT,console.log(`Server open at  ${PORT}`));



