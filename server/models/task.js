const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PostSchema = new Schema({
    name: String,
    description: String
})

const Post = mongoose.model("Post", PostSchema)
module.exports = Post