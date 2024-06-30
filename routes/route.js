import { Router } from "express";
import { deleteMorning, getMorning, postMorning } from "../controller/morning_controller.js";


//create route
const todoRouter = Router();


todoRouter.get('/task', getMorning);

todoRouter.post('/task', postMorning);

todoRouter.delete('/task/:id', deleteMorning);




//export router
export default todoRouter;