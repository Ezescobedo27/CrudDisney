import { Router } from "express";
import { createCharacter, deleteCharacter, getCharacter, getCharacters, updateCharacter } from "../controllers/controllers.random.js";

const router = Router();

router.get('/disney', getCharacters);
router.get('/disney/:id', getCharacter);
router.post('/disney', createCharacter);
router.put('/disney/:id', updateCharacter);
router.delete('/disney/:id', deleteCharacter);

export default router;