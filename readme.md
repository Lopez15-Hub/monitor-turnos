# Trabajo práctico de Aplicaciones Web en tiempo real

1. ¿Qué son las aplicaciones en tiempo real?

   `Las aplicaciones en tiempo real son integraciones que permiten la manipulación y visualización de datos de forma reactiva.`

2. ¿Qué son los web sockets?

   `Un websocket es un canal de comunicación bidireccional sobre un único socket TCP diseñado para aplicaciones clientes/servidor`

## ¿Cómo correr esta aplicación?

1. Clone el repositorio

   - https://github.com/Lopez15-Hub/monitor-turnos

2. Configure las variables de entornos

   a. Cree el archivo .env y defina las siguientes variables

   ```Javascript
   MONGO_URL=mongodb://localhost:27017
   GEMINI_API_KEY=
   ```

Visite https://makersuite.google.com/app/apikey?hl=es-419 para conseguir la clave de api de Gemini

3. Instale las dependecnais

   ```
   npm install
   ```

4. Corra el proyecto

   ```
   npm start
   ```

Si todo está bien verá por consola:

    [nodemon] 3.1.3
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,cjs,json
        [nodemon] starting `node main.js`
        Server online
