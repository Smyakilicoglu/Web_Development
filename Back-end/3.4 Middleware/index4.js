import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path"; // nodenin kütüphanelerinden birini içeri aktatma yapmak.
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({extended: true})); // urlye verilerei iletebilmek için kullanılır. ara katman sonlarda yazılmamalıdır.

function Name(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
};

app.use(Name)

app.get("/", (req, res) => {
  //console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html"); // dosyayı gönder hangi dosyanın geri gönderileceğini bilmek için onun tam yolunu gösterir.
  // geri göndermek istenilen yer de bizim dosyamızdır.
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}<h2>`);
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
