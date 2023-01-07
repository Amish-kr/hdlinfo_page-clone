import mongoose from "mongoose";
import fetch from "node-fetch";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last: {
    type: Number,
    required: true,
  },
  buy: {
    type: Number,
    required: true,
  },
  sell: {
    type: Number,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  base_unit: {
    type: String,
    required: true,
  },
});

async function getPosts() {
  const data = await fetch("https://api.wazirx.com/api/v2/tickers");

  const res = await data.json();

  const keys = Object.keys(res);

  for (let i = 0; i < 10; i++) {
    const stock = res[keys[i]];

    const post = new Post({
      name: stock["name"],
      last: stock["last"],
      buy: stock["buy"],
      sell: stock["sell"],
      volume: stock["volume"],
      base_unit: stock["base_unit"],
    });
    post.save();
  }
}
//getPosts(); /*This function stores top ten data in mongodb */

const Post = mongoose.model("Data", userSchema);
export default Post;
