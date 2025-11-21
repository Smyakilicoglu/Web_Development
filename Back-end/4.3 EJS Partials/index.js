import express from "express";

const app = express();
const port = 3000;

/* Kodunuzu buraya yazın:

  İpucu: Düğme hreflerini görmek için header.ejs dosyasındaki gezinme çubuğunu kontrol edin
Adım 4: Bu sayfalarda üstbilgi ve altbilgiyi göstermek için ilgili ve iletişim sayfalarına kısmi bölümler ekleyin.
<%- include("header.ejs") %> eklemek... */

//Adım 1: "/" index.ejs ana sayfasını oluşturun
app.get("/", (req,res) => {
  res.render("index.ejs");
});

//Adım 2: Statik dosyaların bağlı olduğundan ve CSS'nin göründüğünden emin olun.
app.use(express.static("public")); // burada statik dosyalarının olduğu bölümü yazarak css 
//kodlarına sahip olması gereken ejs kodlarına konum olarak göstermiş olduk. header.ejs

//Adım 3: Hakkında ve iletişim sayfalarının oluşturulmasını işlemek için rotaları ekleyin.
app.get("/about", (req,res) => {
  res.render("about.ejs");
});

app.get("/contact", (req,res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



























/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */