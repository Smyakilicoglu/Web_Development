import express from "express";
const app = express();
const port = 3000;
// bu hocanın zip dosyası bunu yüklediğimde jsonda express dosyası vardı yapmam gereken nodeden npm install demek.
// POSTMAN'E GİDİP BUNLARI ÇALIŞTIR!!!!!!!!!!!!!
// POSTMEN İÇİERİSİNE YAZILAN KULLANICILARI DEĞİŞTİRME SİLME EKLEME GİBİ İŞLEMLER YAPILABİLİR.
// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************
// Postman'ı kullanarak pratik yapalım. Sunucunuzun nodemon ile çalıştığından emin olun.
// Daha sonra aşağıdaki 5 farklı rotayı Postman ile test edin. Her istek için ayrı bir sekme açın.
// Her rota için sunucunuzdan size döndürülen doğru durum kodunu alıp almadığınızı kontrol edin.
// Herhangi bir 404s veya 500 durum kodu almamalısınız.

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>"); //GET 200
});

app.post("/register", (req, res) => {
  //Do something with the data //POST 201
  res.sendStatus(201); 
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200); // PUT 200
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200); //PATCH 200
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200); //DELETE 200
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
