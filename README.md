# Guadaltech Backend
Este proyecto fue generado con la versión v14.6.1 de Node.JS

# Development server
Ejecuta `nodemon index.js` para el servicio de desarrollo. Navega a http://localhost:3000/api/personas para obtener el listado de todas las personas disponibles. La aplicación se recargará automáticamente si cambias alguno de los archivos de origen. Para ejecutar el proyecto en producción navegue a https://guadaltech-app-prueba.herokuapp.com/api/personas.

# Documentación del API REST
Podrás ver con todo detalle cómo se debe lanzar las peticiones para este servicio a partir de [Postman](https://documenter.getpostman.com/view/4029976/TzRX85G7).

## Propuesta
Sería crear una aplicación sencilla con el framework de express en Node.js, en el cual se utilizará el patrón de Modelo, Vista y Controllador, en el cual utilizaremos la entidad Persona para lanzar peticiones a traves de dicha entidad. Dichas peticiones serán: GET, Get por ID, PUT, POST y DELETE. Además de tener controlado en caso de que la peticiones no se están enviando correctamente.

## Modelos de datos
El modelo de **Persona**, cuyos datos será almacenado en una base de datos no relacional de MongoDB en Atlas, consta con los siguientes atributos:
* **nombre**: string
* **apellidos**: string
* **email**: string
* **puesto**: string
* **horario**: string
* **salario**: number
