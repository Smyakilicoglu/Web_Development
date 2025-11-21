// isim index değil de başka bir şey olursa çalışmaz çünkü main = index.js diye kayıtlı. (npmde)
// package.json'a type = model eklemeyi unutma...
/* 1) Expressi içe aktar 
2) Express nesnesini kullanarak bir uygulama oluştur
3) listeleme yöntemiyle ilk olarak bağlantı noktasını 
ikinci olarak sunucunun kullanıma hazır olduğunda ne olması gerektiğiyle ilişkin geri arama belirtir. 
get delete falan var telefonda bunların çalışması için eklemeler yapılmalı.*/
import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Server ranning on port ${port}.`); //günlüğün ... numaralı portta çalışması.
})
// bu çalıştıgı zaman kodda takılı kalıyo (node index.js diye çlıştırılır.) çıkmak için Ctrl+C yap
