import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path"; // nodenin kütüphanelerinden birini içeri aktatma yapmak.
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// nodemon ile bu kodu çalışır ve postmene git get = http://localhost:3000 yazp sent e tıkla buraya bağlantı
// noktası geliyor onun üstüne bastığın zaman index.html'e gidiyorsun.
// google'a bağlantıyı yazarsan html kodu çıkar.
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true})); //kullanıcının doğruluğu ara katman önemli yoksa yanıt alamayız.
//kullanıcının bilgilerini alamayız. Underfinet yanıtını alırız.
//html kodunu çalıştırdığımızda ve yazıp kayıt ettiğimizde sonuçlar backend'e kaydolmuş olur.

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html"); // dosyayı gönder hangi dosyanın geri gönderileceğini bilmek için onun tam yolunu gösterir.
  // geri göndermek istenilen yer de bizim dosyamızdır.
});

// bu kod buraya kullanıcının değerlerini göstermek için Postman
// Postmen'e gidip post'a ayarlayıp http://localhost:3000/submit yaz ve body'den w-w-w olana tıkla sonra send'e bas
// { name: 'selen', email: 'helenis' } oraya neyi girdiysen o burada yazıldı console.log sayesinde.
app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
