import express from "express";
const app = express();
// req = istek res = yanıt kısaltması.
// bunu 3000'ci yerde çalıştırırken başka bşir dosyayı tekrar aynı yerde çalıştıramam. birinden birine CTRL+C yaparak diğerini çalıştırabilirsin.
// yazdım sildim console.log(req.rawHeaders);
// servisi tekrar kapatıp açmak yerine nodemon index.js yazrsak devam eder çıkmadan
app.get("/", (req, res) => {
    
});
//http:localhost:3000 seklinde yaz s ekleme. /endpoints Ctrl+S ile kayıt yap silip tekrar açmakla uğraşma save
// / /contact /about bunları kullanabilirsin ne yaptığına göre.
app.get("/about", (req,res) =>  {
    res.send("<h1>About Me</h1><p>My name is Sümeyra</p>");
});

app.get("/contact", (req,res) =>  {
    res.send("<h1>Contact Me</h1><p>Phone: +904352342312</p>");
});

app.listen(3000, () => {
    console.log("Server ranning on port 3000.");
});