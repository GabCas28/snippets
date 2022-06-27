# Snippets 
**SSBW - UGR - Gabriel Castro**

## 1. Despliegue
La estructura del proyecto se divide en dos partes, un backend escrito en django junto con la librería django_rest y un frontend realizado con angular y bootstrap.

Para lanzar el programa, se deben extraer los contenidos del archivo snippets.zip y ejecutar:

```
cd snippets
docker-compose up --build

```

Gracias a esta herramienta de orquestación, automáticamente se descargarán los contenedores adecuados, se configurarán los puertos y se instalarán todas las dependencias necesarias para la ejecución del proyecto. 

Nota: El proceso tarda varios minutos ya que no esta optimizado para producción. Primero se instala el backend pero el frontend tarda bastante más en desplegarse.

Si todo ha salido bien, se deberá poder acceder a la aplicación desde 

http://localhost:4200/

La base de datos generada no requiere de autenticación, por lo que crear un usuario no es necesario.

## 2. instrucciones de la interfaz

Se pueden crear snippets con el botón + que aparece al lado del título de la web.

Los snippets se construyen eligiendo un título, lenguaje de programación, estilo de formato y cuerpo del snippet.

Una vez creado el snippet, aparece la pantalla principal con la lista de los snippets en la base de datos. Estos se pueden consultar, editar y borrar, al pulsar en uno de ellos.

