/* eslint-disable no-dupe-keys */
/* eslint-disable import/extensions */
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
/* eslint-disable prettier/prettier */
// Importando el router de Home
// Importando el router home
import homeRouter from './home';
// Importando router de user
// Importando router user
import userRouter from './user';
// Importante route projects
import projectRouter from './project';

// Agregando las rutas a la aplicación
// Agregando Rutas a app
const addRoutes = (app) => {
    app.use('/', homeRouter);
    app.use('/user', userRouter);
    return app;
  // home routes
  app.use('/', homeRouter);
  // project routes
  app.use('/projects', projectRouter);
  // user routes
  app.use('/user', userRouter);
  return app;
};

export default {
    addRoutes,
  addRoutes,
};