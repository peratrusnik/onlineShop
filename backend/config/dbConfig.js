const MONGO_PASS = 'shop2022';
const MONGODB_URL = `mongodb+srv://onlineshop:${MONGO_PASS}@cluster0.3l62v.mongodb.net/?retryWrites=true&w=majority`;
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

module.exports = {
    MONGO_PASS: MONGO_PASS,
    MONGODB_URL: MONGODB_URL,
    mongooseOptions: mongooseOptions
};