import express from "express";

const app = express();
const port = 3000;
// bu bizim oluşturduğumu bir günlük.
function logger(req,res, next) {
  console.log("Request Method: " , req.method); 
  console.log("Request Url:" , req.url);
  /* Requeast method:  GET 
  Request method:  POST
  Request method:  PUT
  hangisini seçersen onu gösterir.
  Request Url: /   --- */
  next();
  // sıradakine geçmesi için kullanılır. yazılmazsa request alınır ancak sayfa açılmaz. http://localhost:3000 
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/*
normal yazılımında 
app.use("/", (req, res, next) => {
  console.log("Request Method:" req.method);
  console.log("Request Url: " req.url);
  next();
});
şeklinde yazıldığında da olur ama biz kendi günlüğümüzü oluşturduk. */