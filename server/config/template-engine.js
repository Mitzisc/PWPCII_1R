/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
import exphbs from 'express-handlebars';

// eslint-disable-next-line no-unused-vars
import path from 'path';

// exportando una función de configuraciones

export default (app) => {
    // 1.Registrar el motor de plantillas.
    // eslint-disable-next-line no-undef
    app.engine('hbs', exphbs({
        extname: '.hbs',
        default: 'main', 

    } )
);
// 2.Seleccionar el motor de plantillas recien registrado.
 
    app.set('view engine',  'hbs');
// 3. Estableciendo las rutas de las vistas
    
    app.set('views', path.join(__dirname, '..' , 'views'));
// 4. Retorna el valor de  entrada.
   return app;

}; 