let express = require("express");

let app = express();

app.get("/",(req,res)=>{
    res.send("OK");
})

app.listen(3000); 