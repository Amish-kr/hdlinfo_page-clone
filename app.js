import express from "express";
var app = express();
var port = 3000;
import Post from "./fetch-model.js";
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/data", { useNewUrlParser: true });
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.listen(port, async () => {
  console.log("Server listening on port " + port);
});
