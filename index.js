const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const routes = require('./routes/index');





const express_ejs_layout = require('express-ejs-layouts');
app.use(express_ejs_layout);
app.use(express.static('./assets'));
require('./config/mongoose');


app.set('view engine','ejs');
app.set('views','./views');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(express.urlencoded());
app.use(express.json());








app.use('/',routes);

app.listen(port,(err)=> {
    if (err) {
        console.log("Error occuring while initiating the server",err);
        return;
    }

    console.log(`server running on ${port} port`);
    
})