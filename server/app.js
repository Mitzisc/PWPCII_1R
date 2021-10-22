/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable comma-spacing */
/* eslint-disable no-var */
/* eslint-disable spaced-comment */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import createError from 'http-errors';

import express from 'express';

import path from 'path';

import cookieParser from 'cookie-parser';

import logger from 'morgan';

import indexRouter from '@s-routes/index';

import usersRouter from '@s-routes/users';

//Importing configuration
import configTemplateEngine from '@s-config/template-engine';

// eslint-disable-next-line spaced-comment
//importar modulos de webpack
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import { config } from 'process';
import WebpackConfig from '../webpack.dev.config';
import webpackDevConfig from '../webpack.dev.config';

// eslint-disable-next-line spaced-comment
//consultar modo en que se ejecuta la aplicacion
const env = process.env.NODE_ENV || 'developement';

//creacion aplicacion express
const app = express();

//verficiar modo ejecucion de la aplicacion
// eslint-disable-next-line space-before-blocks
if (env === 'development') {
  console.log('> Excecuting in Development Mode: Webpack hot Reloading');
  //ruta del Hot module replasmen
  //reload=true: habilita recarga fronted al tener cambios en codigo fuente del fronted
  //timeout=1000: Tiempo espera recarga
  WebpackConfig.entry = [
    'Webpack-hot-middleware/client?reload=true&timeout=1000',
    WebpackConfig.entry,
  ];
  //Agregar plugin
  WebpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  //compilador
  const compiler = webpack(WebpackConfig);
  //Agregando middleware a cadena
  // eslint-disable-next-line object-curly-spacing
  app.use(
    WebpackDevMiddleware(compiler, {
      publicPath: webpackDevConfig.output.publicPath,
    })
  );
  app.use(WebpackHotMiddleware(compiler));
  // eslint-disable-next-line keyword-spacing
} else {
  console.log('> Excecuting in Production Mode... ');
}

// view engine setup

configTemplateEngine(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// eslint-disable-next-line prefer-arrow-callback
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line prefer-arrow-callback
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line func-names
// eslint-disable-next-line prefer-arrow-callback
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// eslint-disable-next-line eol-last
module.exports = app;
