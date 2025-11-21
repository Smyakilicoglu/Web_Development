// HINTS:
// 1. Import express and axios
import express, { json } from "express";
import axios from "axios";
// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public"));
// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req,res) => {
    try {
    const result = await axios.get(`https://secrets-api.appbrewery.com/random`);
    res.render("index.ejs",{
    secret: result.data.secret,
    user: result.data.username
    });
    } catch (error) {
        console.log(error.result.data);
        res.status(500);
    }
}) 


// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});

// İPUÇLARI:
// 1. Ekspres ve eksenleri içe aktarın

// 2. Hızlı bir uygulama oluşturun ve bağlantı noktası numarasını ayarlayın.

// 3. Statik dosyalar için ortak klasörü kullanın.

// 4. Kullanıcı ana sayfaya gittiğinde index.ejs dosyasını oluşturması gerekir.

// 5. Rastgele bir sır almak için axios'u kullanın ve onu görüntülemek için index.ejs'ye iletin.
// sır ve sırrın kullanıcı adı.

// 6. Önceden tanımlı portunuzu dinleyin ve sunucuyu başlatın.