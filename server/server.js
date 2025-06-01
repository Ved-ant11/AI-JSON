const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB Connected'))
.catch(err => console.log(err));

app.get("/api/test", (req, res) => {
    res.send("Hello API")
});
app.get("/api/teste",(req, res) => {
    res.send("Hello API2");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
