/* let ile tanımlanan bir değişkeni tekrar tanımlayamayız ancak değerini güncelleyebiliriz. 
Şu şekilde tekrar tanımlama durumunda hata alırız. */
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "work hard!";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "have some fun";
    };
    console.log(day);
    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

