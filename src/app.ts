import express from "express";
import passport from "passport";

import * as passportConfig from "./config/passport";

import routes from "./routes/index";
const app = express();
const port = 3000;
app.use(passport.initialize());
app.use(passport.session());

app.use('/v1', routes);

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
