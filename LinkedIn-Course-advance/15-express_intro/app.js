const express = require("express");
const app = express();
const puerto = 3000;

app.get('/' , (request, respuesta)=> {
    respuesta.send('Hola Mundo')
})


app.listen( puerto , ()=>{ 
    console.log(`escuchando el puerto ${puerto}!`)
})

/*
*** Creando un proyecto con express-generator
#Primero instalar
npm install -g express-generator

#Para crear el proyecto usamos 
express --view=pug myapp

Este crea un proyecto ya en ambiente de producción
*/