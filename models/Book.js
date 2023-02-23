import mongoose from "mongoose";

let schema = new mongoose.Schema({
    title: {type: String, requiered: true},
    date: {type: Date},
    category_id: {type: mongoose.Types.ObjectId, ref:'categories',requierd: true}
},{
    timestamps: true
})

let Book = mongoose.model('books', schema)
export default Book