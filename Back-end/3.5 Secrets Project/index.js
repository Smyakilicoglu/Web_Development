//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
/* Sırlar
Çikolatalı tatlılar yaparken her zaman biraz tuz ekleyin. Çikolata aromasının daha yoğun olmasını sağlar.
Yurtdışına her seyahatinizde, ziyaret ettiğiniz her yer için, tercihen daha önce hiç duymadığınız yeni bir film müziği getirin. Gelecekte, her bir film müziğini tekrar dinlediğinizde, size ziyaret ettiğiniz yerlerin canlı anılarını getirecekler.
Ailenizin olmanızı isteyeceği kişi olmaya çalışmayın. Çocuğunuzun olmasını istediğiniz kişi olun. Kendi inançlarınızı, arzularınızı, hedeflerinizi daha net tanımlar ve elinizden gelenin en iyisini yapmanız için sizi motive eder.
Bir arkadaşa veya aile üyesine bunama veya alzheimer teşhisi konulursa, ilk aşamalarda tüm zamanların en sevdiği şarkıların neler olduğunu bulmaya çalışın. Bu şekilde, onlar için hastalığın sonraki aşamalarında büyük fayda sağlayabilecek bir çalma listesi oluşturabileceksiniz.
Bir arkadaşınız üzgün olduğunda başka bir şey söylemeden önce ona basit bir soru sorun: "Bu konuda konuşmak mı yoksa dikkatinizin dağılmasını mı istiyorsunuz?"
WiFi şifrenizi unutursanız veya okul WiFi şifrenizi vb. almak isterseniz. Bu komutu, halihazırda o WiFi'ye bağlı olan bir bilgisayarın komut satırına yazmanız yeterlidir: netsh wlan show profile WiFi-name key=clear

SIRLAR ÇOK İYİ AKLINDA BULUNSUN*/

// bodyparser express içinde çalıştığı için yazılmasına gerek yok
// ama kullanmanın daha mantıklı olduğu yer bodyParser dır.
import  express  from "express";
// import bodyParser from "body-parser";
import { dirname } from "path"; 
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised= false;
var password = "ILoveProgramming";
app.use(express.urlencoded({extended: true}));  // burada da bodyPerser yerine express yazabiliriz.

function passwordCheck(req, res, next){
    console.log(req.body);
    if (password === req.body["password"]) {
        userIsAuthorised = true;
    }
    next();
}
app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/"); // sayfa yenileme
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});











