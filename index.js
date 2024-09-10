import e from "express";

const app = e();

const PORT = 3000;

app.get("/", (_, res) => {
  res.send("Hello World!")
})

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT)
})
