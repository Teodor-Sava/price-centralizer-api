import express from "express";

const app = express();
const port = 3000;
console.log(port);

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
