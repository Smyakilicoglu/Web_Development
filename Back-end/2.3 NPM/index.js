// https://www.npmjs.com/ buradan npm paketleri indirilebilir.
// https://nodejs.org/docs/latest-v18.x/api/fs.html#file-system sistem şeyisi.
// koplyaladığım kod adını yapıştırdım ve kodu yazmadan bilgisayara indirmiş oldum.
// .json her kod yüklendiğinde gelir. kimlikgibi bir şeydir.
import superheroes from "superheroes";
const name = superheroes.random();
console.log(`I am ${name}!`);

// var generateName = require("sillyname");
//import generateName from "sillyname"; // kütüphaneyi içe aktarma yaptım.
//var sillyname = generateName(); // bunlar npmjs.com dan kopyalama
//console.log(`My name is ${sillyname}`); // bu tıklanan tırnak işareti değil virgülün yanındaki şey.
// sillyname den ad buldum ve rastgele yazdırdım.

// "type":"module", BUNU PACKAGE.JSON'A BEN EKLEDİM.

/* ÇOK ÖNEMLİ 
    ŞU ANA KADAR CJS KOD İLE YAZIYORDUK - REQUİRE ŞEKİNDE BAŞLAYIP YAZIYODUK.- ARTIK
    ESM'YE GEÇİYORUZ YANİ ARTIK -İMPORT ŞEKLİNDE YAZACAĞIZ-.
    const fs = require("fs"); 2.2
*/
