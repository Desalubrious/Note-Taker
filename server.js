// Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');
// Express Setup
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

// Routes
app.use('/api',apiRoutes);
app.use('/',htmlRoutes)

//Listen
app.listen(PORT,function(){
    console.log(`Server is running on port : ${PORT}`);
});