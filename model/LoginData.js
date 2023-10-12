import mongoose from 'mongoose';

const LoginSchema = new mongoose.Schema({
    Master_Password: {
        type: String
    },
    Password: {
        type: String
    }
})

const LoginData = mongoose.model('loginInfo', LoginSchema);

export default LoginData;