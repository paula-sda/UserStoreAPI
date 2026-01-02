## Pruebas (Testing)

Para este proyecto, he montado un sistema de pruebas automáticas. El objetivo es asegurarme de que el código que escribo es de buena calidad y, sobre todo, para no romper algo que ya funcionaba cuando añado cosas nuevas.

### Herramientas que he usado

*   **Jest**: Es el programa principal que se encarga de organizar y ejecutar todas las pruebas.

### ¿Cómo ejecutar las pruebas?

Es muy fácil. Para lanzar todas las pruebas, solo tienes que abrir la terminal y escribir:

```bash
npm test
npm run test
```

Este comando buscará y ejecutará automáticamente todos los archivos de prueba que están en la carpeta `__tests__`.

### ¿Qué prueba cada archivo?

He organizado las pruebas en varios archivos para que todo esté más ordenado.

#### 1. `__tests__/app.test.ts` (Pruebas básicas de la App)

*   **¿Para qué sirve?** Para lo más fundamental: ver si el servidor está "vivo" y responde.
*   **¿Qué hace?** Comprueba que si le hacemos una petición a la ruta principal (`/`), el servidor responde con un `200 OK`. Si esta prueba pasa, ¡significa que la aplicación ha arrancado bien!

#### 2. `__tests__/products.test.ts` (Pruebas de los Productos)

*   **¿Para qué sirve?** Para asegurar que todo lo relacionado con los productos (lo que se conoce como operaciones CRUD: Crear, Leer, Actualizar y Borrar) funciona como debe ser.
*   **¿Qué hace?**
    *   **`GET /`**: Prueba que podemos pedir y recibir la lista completa de productos.
    *   **`POST /`**: Asegura que podemos crear un producto nuevo si enviamos los datos correctos.
    *   **`PUT /:id`**: Verifica que podemos actualizar la información de un producto que ya existe.
    *   **`DELETE /:id`**: Comprueba que podemos borrar un producto.
    *   También se prueba que la API devuelve los errores correctos, por ejemplo, si intentamos actualizar un producto que no existe.

#### 3. `__tests__/users.test.ts` (Pruebas de los Usuarios)

*   **¿Para qué sirve?** Igual que con los productos, pero para los usuarios. Esta parte es muy importante por la seguridad.
*   **¿Qué hace?**
    *   Prueba las operaciones básicas para crear, ver, actualizar y borrar usuarios.
    *   **Lo más importante:** Verifica que cuando un usuario se registra o cambia su contraseña, **la contraseña se cifra (se le hace un "hash")** antes de guardarse. ¡Esto es crucial para nunca guardar contraseñas en texto plano!

### Nota sobre los "Mocks" (Simulaciones)

Para que las pruebas sean rápidas y no necesiten una base de datos real para funcionar, he usado una técnica llamada "mocking". Básicamente, "simulo" la respuesta de la base de datos (`Supabase`) y de otras librerías (`bcrypt`). De esta forma, puedo probar la lógica de mi aplicación de forma aislada, rápida y predecible.
