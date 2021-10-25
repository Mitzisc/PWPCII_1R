/* eslint-disable import/extensions */
// Importando el router home
import homeRouter from './home';
// Importando router user
// eslint-disable-next-line import/no-unresolved
import userRouter from './user';

// Agregando Rutas a app
const addRoutes = (app) => {
  app.use('/', homeRouter);
  app.use('/user', userRouter);
  return app;
};

export default {
  addRoutes,
};
