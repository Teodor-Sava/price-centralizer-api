import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { config } from "./config";

passport.use(new Strategy({
    callbackURL: config.google_credentials.CALLBACK_URL,
    clientID: config.google_credentials.CLIENT_ID,
    clientSecret: config.google_credentials.CLIENT_SECRET,
}, (token, tokenSecret, profile, done) => {
    console.log(profile);
    return done();
}));
