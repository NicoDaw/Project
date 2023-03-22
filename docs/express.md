# NODE Y EXPRESS

- [NODE Y EXPRESS](#node-y-express)
  - [**NODE**](#node)
    - [**Que Es Node**](#que-es-node)
    - [**Como Funciona**](#como-funciona)
    - [**NPM**](#npm)
    - [**Instalación**](#instalación)
      - [Windows](#windows)
      - [MacOS](#macos)
      - [Linux](#linux)
  - [**EXPRESS**](#express)
    - [**Que Es Express**](#que-es-express)
    - [**Que Nos Proporciona**](#que-nos-proporciona)
    - [**Instalación de Express**](#instalación-de-express)
      - [*Ejemplo*](#ejemplo)
  - [**Rutas**](#rutas)
    - [**Definición de rutas**](#definición-de-rutas)
      - [*Ejemplo*](#ejemplo-1)
      - [*Explicación*](#explicación)
    - [**Parámetros de ruta**](#parámetros-de-ruta)
      - [*Ejemplo*](#ejemplo-2)
      - [*Explicación*](#explicación-1)
    - [**Rutas Anidadas**](#rutas-anidadas)
      - [*Ejemplo*](#ejemplo-3)
      - [*Explicación*](#explicación-2)
    - [**Leer Un Json**](#leer-un-json)
      - [*Ejemplo*](#ejemplo-4)
  - [**Conexión a base de datos**](#conexión-a-base-de-datos)
    - [**Conexión a MySQL**](#conexión-a-mysql)
    - [**Conexión a PostgreSQL**](#conexión-a-postgresql)
    - [**Conexión a MongoDB**](#conexión-a-mongodb)
  - [**Generador de estructura Express**](#generador-de-estructura-express)
    - [**Acceso a documentos estáticos**](#acceso-a-documentos-estáticos)
  - [**Middlewares**](#middlewares)
  - [**Funciones**](#funciones)
    - [**Acceder a parámetros de una ruta**](#acceder-a-parámetros-de-una-ruta)
  - [**Nodemon**](#nodemon)



## **NODE**

### **Que Es Node**

Node.js es un entorno multiplataforma que trabaja en tiempo de ejecución de un solo hilo basado en el motor V8 de JavaScript de Google Chrome.

Es un software de código abierto, escrito en javascript simple, que podemos usar para construir aplicaciones de red escalables y en tiempo real.

### **Como Funciona**

Node.js como un único proceso, lo que significa que no crea un nuevo hilo para cada petición. Un hilo es un conjunto de instrucciones que debe realizar el servidor.

Emplea operaciones de E/S no bloqueantes: cuando un cliente envía una solicitud al servidor web, el bucle de eventos de un solo hilo la recoge y la envía a un worker thread (hilo trabajador) para su procesamiento.

En lugar de bloquear el hilo y desperdiciar recursos de la CPU esperando una respuesta, Node.js continuará trabajando en la siguiente tarea de forma asincrona. De esta manera, puede manejar una cantidad masiva de peticiones simultáneas.

### **NPM**

Node Package Manager o npm es un gestor de paquetes que permite a las comunidades de JavaScript y Node.js publicar y compartir sus módulos de Node con otras personas. Esto hace que el proceso de desarrollo de aplicaciones sea más rápido y eficiente.

NPM alberga millones de paquetes descargables que están organizados en múltiples categorías. Está considerado como el mayor registro de software del mundo. Toda la biblioteca de módulos empaquetados se puede encontrar en el sitio web oficial.

Por defecto, npm viene con cada instalación de Node.js. Para utilizarlo, es necesario descargar los paquetes en el sitio web oficial.

### **Instalación**

#### Windows

Sigue estas instrucciones para instalar Node.js en un equipo con Windows:

1. Descarga el [instalador de Node.js](https://nodejs.dev/en/download/) directamente desde la web oficial.
2. Haz doble clic en el archivo descargado, se abrirá la ventana de instalación de Node.js. Pulsa Next.
3. Revisa el Acuerdo de Licencia de Usuario Final y marca I accept the terms in the License Agreement. Pulsa Next.
4. Elige la carpeta de destino y pulsa Next.
5. Selecciona las características que se van a instalar. Si no estás seguro, deja los valores por defecto y pulsa Next.
6. En la página siguiente, marca Automatically install the necessary tools. Haz clic en Next y luego en Install. Es posible que te pregunte si deseas permitir que el programa de instalación realice cambios, elige Yes.
7. Para verificar la versión de Node.js, abre el símbolo del sistema y ejecuta el siguiente comando:  
`node -v`  
`npm -v`

#### MacOS

A continuación, se explica cómo instalar Node.js en un equipo macOS:

1. Descarga la última versión del [instalador de Node.js](https://nodejs.dev/en/download/) desde la web oficial.
2. Haz doble clic en el archivo descargado y se abrirá la ventana de instalación de Node.js. Haz clic en Continue.
3. Revisa el Acuerdo de Licencia de Software y selecciona Continue.
4. Selecciona la carpeta de destino y pulsa Continue.
5. Revisa el tipo de instalación y pulsa Install.
6. Comenzará el proceso de instalación.
7. Tanto Node.js como NPM estarán disponibles después de la instalación. Pulsa Close para finalizar la instalación.
8. A continuación, pulsa el icono de Launchpad en el dock y abre Terminal.
9. Verifica la instalación de Node.js y NPM escribiendo los siguientes comandos:  
`node -v`  
`npm -v`

#### Linux

Sigue los siguientes pasos para instalar Node.js en Linux. En este tutorial usaremos Ubuntu.

1. Haz clic en el botón Mostrar aplicaciones y abre Terminal.
2. Ejecuta el siguiente comando para instalar Node.js:  
`sudo apt install nodejs`  
3. Una vez que tu dispositivo Linux haya completado la instalación, tendrás que instalar NPM.  
`sudo apt install npm`
4. A continuación, verifica la versión de Node.js ejecutando estos comandos:  
`nodejs -v`  
`npm -v`

## **EXPRESS**

### **Que Es Express**

Express es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares.

Express es un marco de aplicación web de Node.js minimalista y flexible, muy popular debido a su flexibilidad y facilidad de uso, que se utiliza para crear aplicaciones web y API.

### **Que Nos Proporciona**

- Escritura de manejadores de peticiones con diferentes verbos HTTP como GET, POST, PUT y DELETE en diferentes caminos URL (rutas).  
- Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.  
- Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.  
- Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.  
***middleware:*** *El middleware es una función que se ejecuta en el proceso de solicitud y respuesta de una aplicación y puede ser utilizado para realizar tareas como la autenticación, la validación de datos, la compresión de respuestas y más*

### **Instalación de Express**

1. Dentro de nuesto directorio de trabajo Utilice el mandato npm init para crear un archivo package.json para la aplicación.  
`npm init`
2. Se nos solicitará varios elementos como, por ejemplo, el nombre y la versión de la aplicación. Podemos pulsar INTRO para aceptar los valores predeterminados o poner los valores que prefiramos.
3. A continuación, instale Express en el directorio myapp y guárdelo en la lista de dependencias. Por ejemplo:  
`$ npm install express --save`

*Nota: Para instalar express temporalmente omitir la opcion `--save`*

#### *Ejemplo*

Ahora que ya tenemos instalado en nuestro proyecto Express procederemos a hacer una prueba para validar que funciona correctamente:

Crearemos un archivo index.js el cual será el archivo principal de nuestra aplicación y donde escribiremos el código para la aplicación Express.

En el escribiremos el siguiente código de ejemplo:

   ```javascript 
    // importamos la librería Express y creamos una instancia de la aplicación Express.

    const express = require('express');
    const app = express();
    
    // definimos una ruta para la página principal ('/') y respondemos con un mensaje de texto.
    
    app.get('/', (req, res) => {
    res.send('¡Hola mundo desde Express!');
    
    });
    
    // iniciamos el servidor Express en el puerto 3000.
    
    app.listen(3000, () => {
    console.log('Servidor Express en ejecución en el puerto 3000');
    
    });
```

Una vez tenemos listo el archivo, ejecutamos el siguiente comando en nuestra terminal para iniciar nuestra aplicación:

    node index.js


Por ultimo abriremos nuestro navegador y entramos en la siguiente url: http://localhost:3000

Deberíamos ver el mensaje "¡Hola mundo desde Express!" en la página web.

## **Rutas**

> Las rutas en Express se utilizan para definir las URLs que la
> aplicación debe manejar y para definir las funciones que se deben
> ejecutar cuando se solicita una URL en particular. Las rutas se
> definen mediante la instancia de la aplicación Express y pueden ser de
> varios tipos, como rutas de solicitud GET, POST, PUT, DELETE y más.


### **Definición de rutas**

La definición de una ruta en Express es bastante sencilla. Para definir una ruta, utilizamos el objeto “app” (que es una instancia de la clase “express()”) y llamamos a uno de sus métodos correspondientes a la solicitud HTTP que se desea manejar. Por ejemplo, para manejar una solicitud HTTP “GET” a la URL “/users”, podemos utilizar el método “get()” de la siguiente manera:

#### *Ejemplo*
```javascript
    app.get('/users', function(req, res) {
    
    // función de manejo de la solicitud
    
    });
```
#### *Explicación*

> Este método recoge dos argumentos el primer argumento es la ruta 
> ‘/users’  y el segundo argumento es la función que manejará la
> solicitud.


### **Parámetros de ruta**
En muchas ocasiones, es posible que necesitemos manejar rutas dinámicas en lugar de rutas estáticas. Para manejar este tipo de rutas, utilizamos parámetros de ruta. Los parámetros de ruta son partes de la URL que se pueden cambiar dinámicamente.

#### *Ejemplo*
```javascript
    app.get('/users/:id', function(req, res) {
    
    var userId = req.params.id;
    
    // función de manejo de la solicitud
    
    });
```
#### *Explicación*
> Utilizamos “:id” para indicar que la ruta “/users/” puede tener un
> parámetro “id” dinámico. Este parámetro dinámico se puede acceder en
> la función de manejo de la solicitud a través de “req.params. id”.

### **Rutas Anidadas**
En Express, es posible anidar rutas dentro de otras rutas. Esto es útil cuando se desea tener una serie de rutas relacionadas bajo una misma URL base. Por ejemplo, si queremos tener todas las rutas relacionadas con usuarios bajo la URL /users.

#### *Ejemplo*

```javascript
    var usersRouter = express.Router();
    
    usersRouter.get('/', function(req, res) {
    
    // función de manejo de la solicitud para /users
    
    });
    
    usersRouter.get('/:id', function(req, res) {
    
    // función de manejo de la solicitud para /users/:id
    
    });
    
    app.use('/users', usersRouter);
```

#### *Explicación*

> Creamos un enrutador (“usersRouter”) que maneja todas las solicitudes
> relacionadas con usuarios. Definimos las rutas “/” y “/:id” dentro de
> este enrutador y luego lo usamos con “app.use()” para anidar todas las
> rutas bajo la URL “/users”. De esta manera, podemos definir las rutas
> relacionadas con usuarios de manera modular y organizada.


### **Leer Un Json**

En Express, se puede leer un archivo JSON utilizando el módulo fs (file system) de Node.js y el método readFile() para leer el archivo JSON y convertirlo en un objeto JavaScript.

#### *Ejemplo*

```javascript
const express = require('express')
const fs = require('fs')
const app = express()

// Definir una ruta que lee un archivo JSON
app.get('/datos', (req, res) => {
  fs.readFile('datos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('Error interno del servidor')
      return
    }
    const datos = JSON.parse(data)
    res.send(datos)
  })
})
```

En el ejemplo anterior, se define una ruta en la aplicación de Express utilizando el método `get()` . Cuando se accede a la ruta '/datos', se utiliza el método `readFile()` de fs para leer el archivo datos.json y se convierte el contenido en un objeto JavaScript utilizando `JSON.parse()`. Si ocurre algún error al leer el archivo JSON, se envía una respuesta de error 500 al cliente.

Finalmente, se envía una respuesta al cliente con el objeto datos que contiene los datos leídos del archivo JSON. La respuesta se envía utilizando el método `send()` de res.

Una forma más fácil de formatear todos los responses en formato **JSON** es utilizar un middleware del propio express, que con tan solo implementarlo, ya nos hará la misma funcionalidad.


`app.use(express.json())` 

Con tan sólo declararlo al inicio del documento, tendremos suficiente.

## **Conexión a base de datos**

### **Conexión a MySQL**

Para conectarnos a una base de datos MySQL en Express.js, necesitamos instalar el paquete `mysql2` y luego crear una instancia de conexión utilizando los detalles de nuestra base de datos.

```javascript
const mysql = require('mysql2');
// Creamos una conexión a la base de datos
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'contraseña',
  database: 'mi-base-de-datos'
});
// Conectamos a la base de datos
conexion.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err);
  } else {
    console.log('Conexión a la base de datos establecida');
  }
});
```

Una vez conectados, podemos realizar operaciones CRUD en nuestra base de datos utilizando consultas SQL.

```javascript
// Ejecutamos una consulta SELECT
conexion.query('SELECT * FROM usuarios', (err, resultados) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Resultados:', resultados);
  }
});
// Ejecutamos una consulta INSERT
const nuevoUsuario = {
  nombre: 'Juan',
  edad: 25,
  correo: 'juan@example.com'
};
conexion.query('INSERT INTO usuarios SET ?', nuevoUsuario, (err, resultado) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Usuario insertado con ID:', resultado.insertId);
  }
});
```

Para más información sobre cómo trabajar con bases de datos en Express.js y MySQL, puedes consultar la documentación oficial de [mysql2](https://github.com/mysqljs/mysql#readme).

### **Conexión a PostgreSQL**

Para conectarnos a una base de datos PostgreSQL en Express.js, necesitamos instalar el paquete `pg` y luego crear una instancia de conexión utilizando los detalles de nuestra base de datos.

```javascript
const { Pool } = require('pg');
// Creamos una instancia de conexión a la base de datos
const pool = new Pool({
  user: 'usuario',
  host: 'localhost',
  database: 'mi-base-de-datos',
  password: 'contraseña',
  port: 5432,
});
// Conectamos a la base de datos
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error de conexión:', err);
  } else {
    console.log('Conexión a la base de datos establecida');
  }
});
```

Una vez conectados, podemos realizar operaciones CRUD en nuestra base de datos utilizando consultas SQL.

```javascript
// Ejecutamos una consulta SELECT
pool.query('SELECT * FROM usuarios', (err, resultados) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Resultados:', resultados.rows);
  }
});
// Ejecutamos una consulta INSERT
const nuevoUsuario = {
  nombre: 'Juan',
  edad: 25,
  correo: 'juan@example.com'
};
pool.query('INSERT INTO usuarios(nombre, edad, correo) VALUES ($1, $2, $3)', [nuevoUsuario.nombre, nuevoUsuario.edad, nuevoUsuario.correo], (err, resultado) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Usuario insertado con éxito');
  }
});
```

Para más información sobre cómo trabajar con bases de datos en Express.js y PostgreSQL, puedes consultar la documentación oficial de [pg](https://node-postgres.com/).

### **Conexión a MongoDB**

Para conectarnos a una base de datos MongoDB, necesitamos instalar el paquete `mongoose` y luego crear una instancia de conexión utilizando la URL de la base de datos.

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mi-base-de-datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

Una vez conectados, podemos definir un modelo de datos y realizar operaciones CRUD en nuestra base de datos.

```javascript
const mongoose = require('mongoose');
// Definimos un esquema para nuestro modelo
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  correo: String
});
// Creamos un modelo a partir del esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);
// Creamos un nuevo usuario
const nuevoUsuario = new Usuario({
  nombre: 'Juan',
  edad: 25,
  correo: 'juan@example.com'
});
// Guardamos el usuario en la base de datos
nuevoUsuario.save((err, usuario) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Usuario guardado:', usuario);
  }
});
```

Para más información sobre cómo trabajar con bases de datos en Express.js y MongoDB, puedes consultar la documentación oficial de [Mongoose](https://mongoosejs.com/docs/guide.html).

## **Generador de estructura Express**
-------------------------------

Express.js ofrece una herramienta que genera el esqueleto de nuestra aplicación, para así empezar a trabajar desde esa plantilla.
Para utilizar esta herramienta nos dirigimos al directorio de nuestra aplicación y ejecutamos el siguiente comando:


`npx express-generator`



|── node_modules/ Contiente dependencias de Node.js que el proyecto utiliza ( Se genera automáticamente : ”npm install”)

|── **public**/ Contiene todos los archivos estáticos del proyecto ( CSS , JS, imagenes ) Directorio accessibles al público .

│  |── css/

│  |── js/

│  └── images/

 |── **views**/  Contiene todas las plantilles de vistes que utiliza la aplicacion (HTML y código para mostrar datos dinámicos)

│  |── partials/

│  |── pages/

│  └── layouts/

|── routes/ Contiene todos los archivos de enrutamiento que definen las rutas URL y las acciones que se deben tomar en respuesta a las solicitudes de esas rutas.

|── controllers/ Contiene los archivos controladores que se utilizan para ejecutar la lógica de la aplicación y para responder a las solicitudes HTTP enviadas por los clientes.

|── models/ Contiene los archivos de modelo que se utilizan para definir y manipular la información de la base de datos.

|── config/ Contiene archivos de configuración que se utilizan para configurar la aplicación.

|── app.js Este archivo es el punto de entrada de la aplicación. En este archivo, se configura y se inicializa la aplicación Express.

|── package.json Este archivo contiene información sobre el proyecto, como las dependencias del proyecto y los scripts que se pueden ejecutar.

└── README. md Este archivo es una descripción general del proyecto y se utiliza para proporcionar información sobre el proyecto.

### **Acceso a documentos estáticos**

Los documentos **html**, **css** y **javascript**, normalmente no van a cambiar y en caso de hacerlo, lo interesante es poder hacerlo desde el mismo proyecto. Para poder interactuar con el código que recibimos, a veces querremos utilizar algún gestor de templating como [EJS](https://ejs.co/) o [Pug](https://pugjs.org/api/getting-started.html), aunque hay un listado interminable de ellos, que podemos encontrar en la propia documentación de express [aquí](https://expressjs.com/en/resources/template-engines.html).

Una vez entendemos esto, explicaremos cómo apuntar a uan carpeta concreta a la que podremos requerir y usar nuestros propios recursos estáticos.

Para ello deberemos utilizar el **app.use('public')**, donde public es en nombre de la carpeta donde querremos acceder. La crearemos al mismo nivel que el **node_modules**. Dentro crearemos nuestro **html**, **css** y **javascript** y al acceder a la ruta **'/'**, automáticamente nos cargará el **html** que llamaremos **index.js**.

```javascript
app.use(express.static('public'));
```


## **Middlewares**

El middleware de aplicación se utiliza para realizar operaciones generales en todas las solicitudes que maneja la aplicación. Esto se hace colocando funciones de middleware antes de todas las rutas definidas en la aplicación.


Los **middlewares** son funciones que se ejecutan antes de pasar al enrutamiento para comprobar múltiples cosas, antes de entrar en los enrutamientos. Con esto podemos prevenir, por ejemplo, que nos renderice determinadas páginas si no obtenemos los datos necesarios, o redirigir a una página si la ruta no es correcta... Uno de los más interesantes es el **Json**, que nos permitirá formatear objetos en json si estos pasan por el enrutador. Para utilizarlos, debemos utilizar la función **app.use()** y especificar en el parámetro el middleware a utilizar:

```javascript
function logger(req, res, next) {
    console.log(`Route received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//Middlewares
app.use(express.json());
app.use(logger);
```
Por último explicaremos los diferentes parámetros y funciones. Next sirve para que si un middleware ha entrado en la función, ejecute la función y si encuentra **next()**, esta continuará a la dirección del enrutamiento que tenía asignada. Si no lo hacemos, nunca accederá a la dirección de la ruta.

El parámetro **req** nos sirve para obtener información de la ruta. Como podemos observar en el ejemplo, de **req** accedemos a **protocol**, hacemos un **get('host')** y **originalUrl**. **Protocol**, será el método utilizado (GET, POST...), el **get('host')**, nos dará la raíz del enrutamiento, en nuestro caso, localhost y **originalurl** nos devolverá el path tal que así:

<img src="https://i.imgur.com/O9pBbHZ.png" alt="Alt text" width="200px">

Dejamos un esquema para entender las partes de una ruta:

<img src="https://i.imgur.com/9dV2Mwl.png" alt="Alt text" width="600px">

## **Funciones**

Express tiene múltiples funciones y siempre las llamaremos a partir de la variable que hayamos declarado, en nuestro caso **app**. Para ver el listado de todas las funciones y entenderlas, podremos acceder [aquí](https://expressjs.com/es/4x/api.html#app).

Las más importantes son:

    1. Send: para enviar como respuesta a la petición. Puede ser cualquier tipo de dato, pero normalmente será un **JSON**. Lo deberemos hacer con el parámetro res. Si lo devolvemos a secas, nos pintará en la dirección del localhost, lo devuelto. Si lo pasamos por un postman, nos devolverá ese contenido: 
    
```javascript
app.get('/usuario/1', function (req, res) {
    res.send({usuario: "Pepito", Apellido: "Urruaga"});
})
```
    2. GET, POST, PUT, DELETE. Cómo ya hemos comentado antes, son los métodos básicos para ejecutar las acciones necesarias de un flujo de aplicación.

    3. All: con este método, podremos ejecutar una funcionalidad para todas las rutas que conincidan con el primer parámetro del método en su path. Como en el middleware, debremos especificar si una vez ejecutado el código de la función, continuamos con la ruta escrita. De este modo podemos controlar todas las rutas que provengan del mismo path:

```javascript
app.all('/users', function (req, res, next) {
  console.log('Accessing to users');
  next();
})

//Esta ruta se verá afectada
app.get('/usuario/:id', function (req, res) {
    res.send({usuario: "Pepito", Apellido: "Urruaga"});S
})

//Esta ruta se verá afectada
app.put('/usuario/:id', function (req, res) {
    res.send("<h1>Usuario actualizado</h1>");
})

//Esta ruta NO se verá afectada
app.put('/productos', function (req, res) {
    res.send("<h1>Productos</h1>");
})
```

En este ejemplo, tanto si accedemos al usuario a través de su id, como si actualizamos lo que sea de un usuario, obtendremos un log que diga **'Accessing to users'**.

### **Acceder a parámetros de una ruta**

Para acceder a parámetros de una ruta, deberemos utilizar el parámetro **req** y acceder a paramos y el nombre del path. Por ejemplo, si tenemos la url "localhost:3000/users/1" porque queremos acceder al id número 1 que corresponda a un usuario, debremos hacer un **req.params.id**:

```javascript
app.get('/usuario/1', function (req, res) {
    res.send(`This is the user id ${req.params.id}`);
})
```

## **Nodemon**

Este es un módulo realmente interesante, ya que con él no necesitaremos reiniciar el servidor para visualizar los cambios, por él mismo vamos a poder verlos.

**Instalación local:**

`npm install --save-dev nodemon`

Si lo utilizamos deberemos levantar el servidor con el comando

`npx nodemon index.js`

donde index.js es el nodo de la aplicación.
