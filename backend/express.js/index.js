const express = require("express");
const app = express();
// console.dir(app); //it is a object
let port = 3000; //8080 these port use for costume server
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
app.get("/", (req, res) => {
  console.log(req.params);
  res.send("hello! welcome to facebook");
});
app.get("/:username/:password", (req, res) => {
  let { username, password } = req.params;
  console.log(req.params);
  let htmlstr = `<h1>Welcome to the page of @${username}!</h1>`;
  res.send(htmlstr);
});
app.get("/search", (req, res) => {
  console.log(req.query);
  let { q } = req.query;
  if (!q) {
    res.send("No search Query");
  }
  res.send(`<h1>these are the results for:${q}</h1>`);
});

// app.get("/", (req, res) => {
//   res.send("Hello! i am root");
// });
// app.get("/apple", (req, res) => {
//   res.send("you contacted apple path");
// });
// app.get("/orange", (req, res) => {
//   res.send("you contacted orange path");
// });
// app.get("*", (req, res) => {
//   res.send("this path does not exist");
// });
// app.post("/", (req, res) => {
//   res.send("you sent a post request");
// });

// app.use((req, res) => {
//   console.dir(req);
//   console.log("request recived");
//   let code =
//     "<h1>hii! i am soumya ranjan das</h1><h2>Fruits</h2> <ul><li>apple</li> <li>Orange</li></ul>";
//   res.send(code);
// });
