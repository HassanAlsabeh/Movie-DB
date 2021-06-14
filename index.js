let express = require("express");

let app = express();

app.get("/",(req,res)=>{
    res.send("OK");
})

app.listen(3000); 


app.get('/test',(req,res) => {
    const test = req.query.s;

    if (typeof test != 'undefined') {
        // test string applied
        const response = {
            status:200, message:"ok", data: test
        };

        res.send(response);
    }
    else {
        const response = {
            status:200, message: "OK"
        };


        res.status(200);
        res.send(response);
    }
    
}


);

app.get('/time',(req,res) =>{
    let date_ob = new Date();
    let time = date_ob.getHours() + ":" + date_ob.getMinutes();
    let response = { status:200, message: time };
    res.send(response);
}
)
app.get("/hello/:ID", (req, res) => {
    let hello = { status: 200, message: `hello: ${req.params.ID}` };
    res.send(hello);
  });


  app.get('/search', function(req, res) {
    if(req.query.s == "" || req.query.s == undefined)
    {
        let search = { status: 500, message: `You have to provide a search` };
        res.send(search);
        res.status(500).send()
    }
    else{
        let search = { status: 200, message:`OK! You searched for:` + req.query.s };
        res.send(search);
        
    }
});  