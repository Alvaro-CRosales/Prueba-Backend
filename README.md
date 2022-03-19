# Prueba-Backend

# Bienvenidos a mi prueba backend, donde se realizó una busqueda de mutaciones con un array de strings

# El primer paso para utilizarla api es con una petición tipo POST donde se enviará un array de strings de esta forma:

Ejemplo Postman local:

Ruta:localhost:3000/mutation

lo que se envía en body: 

{
    "adn": ["CCAATA","CCGTCC","CCGCTC","CTACCC","TATCTG","CCCCGG"]
}

# En este caso el resultado será que existe una mutación

# Ten en cuenta que se puede envíar un array con más de 4 strings para su correcto funcionamiento

# También solo son admitidas bases nitrogenadas "T" "C" "G" "A" Caso contrario la respuesta será un 400 bad request

# para la siguiente ruta se enviará el conteo de la base de datos de mutaciones y no mutaciones con petición GET de esta forma:

Ejemplo Postman local:

Ruta:localhost:3000/mutation/stats

# para finalizar la ultima ruta nos envía el listado de ADN con su respectiva información de mutación en peticion GET

Ejemplo Postman local:

Ruta:localhost:3000/mutation/list



