const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message: `Server is listening on port: ${PORT}`});
});

app.listen(PORT, () => {
    console.log("Server is listening on port:", PORT);
});