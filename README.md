## Pregunta 1
¿por qué esta tabla se puede llamar «genérica»? ¿Qué tendría que cambiar para mostrar alumnos en lugar de productos?

Es una tabla generica por que le puedes cambiar la cantidad de datos y los datos que pueda contener, el lugar de donde obtiene la informacion

## Pregunta 2
describan el contrato de su componente en tres partes: qué recibe, qué avisa y qué guarda adentro

recibe un atributo, que define como se vera como un aviso, exito o error y un slot que es el que recibe el contenido de texto que se mostrara 
como el mensaje principal dentro de la alerta.

avisa: eventos("cerrar") cuando el usuario presione el boton de cierre permita a la aplicacion principal detectar que la alerta se cerro

que guarda: Contiene el css que se hizo junto con el shadow del dom, esto permite que ningun estilo o selector externo afecten su diseño