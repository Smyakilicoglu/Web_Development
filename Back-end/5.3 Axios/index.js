import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random"); // bunu postmene yaz oradaki bizim jsonumuz.
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {            //tek yaptıgı try kullanıcı hat ayaparsa hat amesajı göndermek.
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,      //hatayı yazdırmak için gönderilen geri çağırma.
    });
  }
});
 
app.post("/", async (req, res) => {    // eş zamanlı çalışma async
  try {
    console.log(req.body);
    const type = req.body.type;
    const participants = req.body.participants; //kullanıcılar.
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
    );
    const result = response.data;
    console.log(result);
    res.render("solution.ejs", {
      data: result[Math.floor(Math.random() * result.length)], //uzunluğu doğru yaz hata varsa bundan kaynaklı LENGTH
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("solution.ejs", {
      error: "No activities that match your criteria.",
    });
  }
  // Step 2: Play around with the drop downs and see what gets logged.
  // Use axios to make an API request to the /filter endpoint. Making
  // sure you're passing both the type and participants queries.
  // Render the index.ejs file with a single *random* activity that comes back
  // from the API request.
  // Step 3: If you get a 404 error (resource not found) from the API request.
  // Pass an error to the index.ejs to tell the user:
  // "No activities that match your criteria."
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

/*
import axios from "axios";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {            
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,      
    });
  }
});

BU KOD ÜSTTEKİ ERROR KODUNUN NODEJS İLE YAZILMIŞ HALİDİR. BİRAZ DAHA KARMAŞIK. AXİOS KOLAYLAŞTIRDI.
import https from "https":

app.get("/", (req, res) => {
  const options = {
  hostname: "bored-api.appbrewery.com", path: "/random",
  method: "GET",
  });

const request = https.request(options, (response) => { 
  let data = "";
  response.on("data", (chunk) => { data + chunk;
  response.on("end", () => { 
    try {
      const result = JSON.parse(data); res.render("index.ejs", {activity: data})
    } catch (error) { 
      console.error("Failed to parse response:", error.message);
      res.status(500).send("Failed to fetch activity. Please try again.");
    }
  });
});

request.on("error", (error) => {
  console.error("Failed to make request:", error.message); 
  res.status(500).send("Failed to fetch activity. Please try again."); 
});

request.end(); 
}); */