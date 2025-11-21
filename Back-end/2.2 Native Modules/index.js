const fs = require("fs");

/* fs.writeFile("message.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
}); */ // mesaj yazmak için  bu kullanılır yazdıktan sonra da onay verir.

fs.readFile("./message.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
}); // burada kodun içinde yazan şeyleri node de göstermesi istenir. Ama sayı şeklinde gösterir.
