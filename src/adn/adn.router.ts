import { Router as router } from "express";
import { AdnCtrl } from "./adn.ctrl";

export const adnRouter = router();

adnRouter
    .get('/stats', AdnCtrl.stats)
    .get('/list', AdnCtrl.list)
    .post('/', AdnCtrl.hasMutation);
    