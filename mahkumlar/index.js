import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.get("/sumeyra", (req,res) => {
    res.render("sumeyra.ejs")
});

app.get("/buse", (req,res) => {
    res.render("buse.ejs")
});

app.get("/busenur", (req,res) => {
    res.render("busenur.ejs")
});

app.get("/beyza", (req,res) => {
    res.render("beyza.ejs")
});

app.get("/fatma", (req,res) => {
    res.render("fatma.ejs")
});




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});