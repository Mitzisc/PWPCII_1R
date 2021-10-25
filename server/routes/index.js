/* eslint-disable prettier/prettier */
// Importando el router de Home
import homeRouter from  './home';
// Importando Router de Users
import userRouter from './user';

// Agregando las rutas a la aplicacion

const addRoutes = (app) =>{
    app.use('/', homeRouter);
    app.use('/user', userRouter);
};

export default {
    addRoutes,
};
