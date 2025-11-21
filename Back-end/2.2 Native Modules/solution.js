const fs = require("fs");

/* fs.writeFile("message.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
}); */

fs.readFile("message.txt", "utf8" , (err, data) => {
  if (err) throw err;
  console.log(data);
}); // burada kodun içinde yazan şeyleri node de göstermesi istenir.

//// fs file system kısaltmasıdır. https://nodejs.org/docs/latest-v18.x/api/index.html 
// https://nodejs.org/docs/latest-v18.x/api/fs.html#fswritefilefile-data-options-callback fs system girişi. 
//fs.writeFile(file, data[, options], callback)
// data ayarı yapılır ikinci olarak.