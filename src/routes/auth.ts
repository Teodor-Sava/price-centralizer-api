import { Request, Response, Router } from "express";
import passport from 'passport';

import "../config/passport";

import AuthController from "./../controllers/auth.controller";

const router = Router();

router.get("/login", AuthController.login);

router.get("/google", passport.authenticate('google', {  scope: ['profile'] }));

router.get("/google/callback", AuthController.loginWithGoogle);

export default router;
