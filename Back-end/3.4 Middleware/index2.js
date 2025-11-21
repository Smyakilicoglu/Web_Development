import express from "express";
// morgan = en yaygın olarak kullanılan loglama aracı yazılımlarından biri.
import morgan from "morgan";
const app = express();
const port = 3000;
//sunucudn gelen istekleri günlüğe kaydetmek için morgan kullanılır.
// aşağıda morgan'ı ara yazılım olarak kullandım.
//içeriden yazılan günlük kaydının ne derece ayrıntılı tutulmasıyla ilgili verilmiş bir sınırılama.
// ::1 - - [05/Aug/2023:09:24:36 +0000] "GET / HTTP/1.1" 200 5 "-" "PostmanRuntime/7.32.3" bunu yazdı combined'de 
// tiny = GET / 200 5 - 2.147 ms bu şekilde gösteriyo belirlemeyi içeri yazdığım şeyle ölçüyor.
// dev = GET / 200 2.116 ms - 5  200 kod başarılı oldu.

// POST /submit 404 1.960 ms - 146 postmande ne yaparsam burada gösteriyor kayıt ediyor ne yaptığımı 
// kodda submit yok ama yazdığım için hareketimi kaydetti morgan --- Submit olmadığı için 404 error verdi. ---
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
