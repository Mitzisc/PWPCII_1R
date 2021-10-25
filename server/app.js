/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import winston from '@server/config/winston';

// Importando el Router principal
import router from '@server/routes/index';


// Importing configurations 
import configTemplateEngine from '@s-config/template-engine';

// Webpack Modules
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevConfig from '../webpack.dev.config';

// Consultar modo en que se ejecuta la aplicacion
const env = process.env.NODE_ENV || 'development';

// Se crea la aplicacion express
const app = express();

// Verficiar modo ejecucion de la aplicacion
if (env === 'development') {
  console.log('> Excecuting in Development Mode: Webpack hot Reloading');
  // Paso 1. Agregando la ruta del HMR
  // reload=true: habilita recarga fronted al tener cambios en codigo
  // fuente del fronted
  // timeout=1000: Tiempo espera recarga
  webpackDevConfig.entry = [
    'Webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackDevConfig.entry,
  ];

  // Agregar plugin
  webpackDevConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  // compilador
  const compiler = webpack(webpackDevConfig);
  // Agregando middleware a cadena
  app.use(
    WebpackDevMiddleware(compiler, {
      publicPath: webpackDevConfig.output.publicPath,
    }),
  );
  // webpack hot middleware
  app.use(WebpackHotMiddleware(compiler));
} else {
  console.log('> Excecuting in Production Mode... ');
}

// view engine setup
configTemplateEngine(app);
app.use(morgan('dev', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Instalando el enrutador principal a la aplicacion express
router.addRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  // Log
  winston.error(`Code: 404, Message: Page Not Found, URL: ${req.originalUrl}, Method ${req.method}`);
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Loggeando con winston
  winston.error(`status: ${err.status || 500}, message: ${err.message}, method: ${req.method}, ip: ${req.ip}`);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;