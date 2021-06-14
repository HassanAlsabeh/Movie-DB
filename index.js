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

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

app.get("/movies/create", (req, res) => {
    res.send(`movies create`);
  });


  app.get("/movies/read", (req, res) => {
    let moviesarr ={status:200, data: movies}
    res.send(moviesarr);
  });


  app.get("/movies/update", (req, res) => {
    res.send(`movies update`);
  });



  app.get("/movies/delete", (req, res) => {
    res.send(`movies delet`);
  });


  app.get("/movies/read/by-date", (req, res) => {
    const sortedmovies = movies.sort((a, b) => b.year - a.year)
    res.send(sortedmovies);
  });
  app.get("/movies/read/by-rating", (req, res) => {
    const sortedmovies = movies.sort((a, b) => b.rating - a.rating)
    res.send(sortedmovies);
  });
  app.get("/movies/read/by-title", (req, res) => {
    const sortedmovies= movies.sort((a, b) => a.title.localeCompare(b.title))
    res.send(sortedmovies);
  });