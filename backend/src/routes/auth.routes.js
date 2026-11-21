import { Router } from "express";
import { Register , Login , getMe} from "../controllers/auth.controller.js";
import authUser from "../middleware/auth.middleware.js";

const router = Router()

/**
 * @routes post api/auth/register
 * @access public
 * @description register new user
 */
router.post("/register",Register)
/**
 * @routes POSt  api/auth/login
 * @access public
 * @description  login a user
 * 
 */
router.post("/login",Login);

router.get("/get-user", authUser,getMe)


export default router;