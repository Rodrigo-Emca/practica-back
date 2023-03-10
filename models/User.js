import mongoose from "mongoose";

let schema = new mongoose.Schema({
    mail: {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String, required: true},
    is_online: {type: Boolean},
    is_admin: {type: Boolean},
    is_author: {type: Boolean},
    is_company: {type: Boolean},
    is_verified: {type: Boolean},
    verify_code: {type: String, required: true}
}, {
    timestamps: true
})

let User = mongoose.model('users', schema)
export default User