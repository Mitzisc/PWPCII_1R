/* eslint-disable import/no-unresolved */
/* eslint-disable spaced-comment */
//importando al controlador
// importando Router
// eslint-disable-next-line prettier/prettier
import { Router } from 'express';

// eslint-disable-next-line import/no-unresolved

// eslint-disable-next-line no-unused-vars
import homeController from '@server/controllers/homeController';

// Creando la instancia de un enrutador

const router = Router();

//get ruta raiz.

router.get('/', homeController.index);

//Exportando el router que maneja que maneja las sub
//de home
// Get gretting

router.get('/greeting', homeController.greeting);

export default router;
 