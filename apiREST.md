# **API REST**

## **Que es REST?**

REST (Representational State Transfer) es un conjunto de normas y convenciones que se usan para tener un estandar de como hacer las cosas y asi diferentes programas poder entenderse entre si.

### Estandares y Convenciones

* 

---

## **Rutas**

### Que son?

Las rutas son las direciones web que se ultizan para acceder a los recursos de las **API REST**. Cada ruta suele tener un metodo **HTTP** asociado como por ejemplo:

- **GET**: Se utiliza para obtener los datos

  Este seria un ejemplo de ruta para obtener toda una lista de usuarios

        GET https://api.misitio.com/usuarios

  Y este un ejemplo para obtener uno en especifico

        GET https://api.misitio.com/usuarios/{id}

- **POST**: Se utiliza para añadir/subir datos
  Este seria un ejemplo de ruta para crear un usuario

        POST https://api.misitio.com/usuarios

  junto con los datos del usuario que se desean crear, que los pasarias por el body del fetch o la peticion.

- **PUT**: Se utiliza para actualizar los datos
  Este seria un ejemplo de ruta para actualizar un usuario

        PUT https://api.misitio.com/usuarios/{id}

  el id seria el identificador del usuario que quieres actulizar junto con sus nuevos datos.

- **DELETE**: Sirve para eliminar informacion

    Este seria un ejemplo de ruta para eliminar un usuario

        DELETE https://api.misitio.com/usuarios/{id}

    el id seria el identificador del usuario que quieres eliminar.

---

## **CRUD**

La **API REST** se base basicamente en 4 operaciones que son las basicas que haria un **CRUD** (Create,Read,Update,Delete)

* **CREATE**: Para crear un nuevo usuario, utilice la ruta POST https://api.misitio.com/usuarios, junto con los datos del usuario que se desean crear.

* **READ**: Para obtener información de un usuario existente, utilice la ruta GET https://api.misitio.com/usuarios/{id}, donde {id} es el identificador único del usuario que se desea obtener.

* **UPDATE**: Para actualizar la información de un usuario existente, utilice la ruta PUT https://api.misitio.com/usuarios/{id}, donde {id} es el identificador único del usuario que se desea actualizar, junto con los nuevos datos que se desean guardar.

* **DELETE**: Para eliminar un usuario existente, utilice la ruta DELETE https://api.misitio.com/usuarios/{id}, donde {id} es el identificador único del usuario que se desea eliminar.
