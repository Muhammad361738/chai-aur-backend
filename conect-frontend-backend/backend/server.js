import express from "express";
 
const app = express();


console.log("First frontend Backend connnection ")
app.get("/", (req,res) =>{
    res.send("server is ready ");
})
// get the list of 5 jokes 
app.get ("/api/jokes" , (req,res)=>{
    const jokes = [
        {
            id : 1,
            title: "Another joke" ,
            content : "This is Joke "
        },
        {
            id : 2,
            title: "Another joke" ,
            content : "This is another Joke "
        },
        {
            id : 3,
            title: "Third joke" ,
            content : "This is third  Joke "
        },
        {
            id : 4,
            title: "Forth  joke" ,
            content : "This is forth Joke "
        },
        {
            id : 5,
            title: "Fifth joke" ,
            content : "This is fifth Joke "
        },
    ]
    res.send(jokes)
})


const port = process.env.PORT || 3000;

app.listen(port , () =>{
    console.log(`Server is ready at http://localhost:${port}`);
})