/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

/* eslint-disable no-unused-vars  */

// Importación  winston
// eslint-disable-next-line prettier/prettier

import winston, { format } from 'winston';
import appRoot from 'app-root-path';

// Componentes para crear el formato personalizado

const { combine, timestamp, printf, uncolorize, json,colorize } = winston.format;

// eslint-disable-next-line import/first


// Perfil de color para log

const colors = {
    error: 'red',
    warn:  'yellow',
    info: 'green',
    http:  'magenta',
    debug: 'green',
};

//  Agregando el perfil a winston.
winston.addColors(colors);

// Formato de consola.

const myFormat = combine(
    colorize({ all : true}),
    timestamp((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

// Formatos para la salida  de los archivos log

const myFileFormat = format.combine(
    uncolorize(),
    timestamp(),
    json(),
);

// Creando objetos de configuración

const options ={
    infoFile: {
        level: 'info',
        filename: `${appRoot}/server/logs/infos.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        format: myFileFormat,
    },
    
warnFile: {
  
        level: 'warn',
        filename: `${appRoot}/server/warns/infos.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        format: myFileFormat,
    
},

errorFile: {
   
        level: 'warn',
        filename: `${appRoot}/server/erros/infos.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        format: myFileFormat,
    },
 
 console: {
     level:'debug',
     handleExceptions: true,
     format: myFormat.options,
 },


};

// creando la instancia del logger.
 
const logger = winston.createLogger({
    transports:[
        new winston.transports.File(options.infoFile),
        new winston.transports.File(options.warnFile),
        new winston.transports.File(options.errorFile),
        new winston.transports.Console(options.console),

    ],
    exitOnError: false, // No finaliza en excepciones manejadas
});


// Manejo del stream de entrada 

logger.stream ={
    write(message){
        logger.info(massage);
    },

};

export default logger;
