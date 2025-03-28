//Jorge Sánchez López

import { PageProps } from "$fresh/server.ts";

export default function Home(props: PageProps) {
  return (
    <div class = "index">
        <h1>Buscador de Diccionario</h1>
      <div>
        <form action="/buscar" method="get">
          <input type="text" name="palabra" placeholder="Ingrese una palabra"/>
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
}














//https://dictionaryapi.dev/
/*ENUNCIADO

Se pide crear una página web que permita buscar palabras en el diccionario. Todo el renderizado se hará en el servidor, no habiendo ninguna interacción en el cliente.

Para ello habrá las siguientes rutas:
/ . Será la página inicial, en la que aparecerá un campo para introducir la palabra que se desea buscar y un botón para realizar la búsqueda.
/buscar/palabra . Será la ruta en la que se busque una palabra específica. Aparecerá un listado con las definiciones y los ejemplos. Esta página tendrá un enlace que permite volver a la página inicial /

Para buscar las definiciones se usará la API https://dictionaryapi.dev/

El modo en el que aparecen las palabras, será por ejemplo, para la palabra "man":

Palabra: Man

Tipo: Noun
Definición: An adult male human.
Ejemplo: The show is especially popular with middle-aged men.
Definición: (collective) All human males collectively: mankind.
Definición: A human, a person of either gender, usually an adult. (See usage notes.)
Ejemplo: every man for himself
(etc)
Sinónimos: male, omi, human, person

Tipo: interjection
Definición: Used to place emphasis upon something or someone; sometimes, but not always, when actually addressing a man.
etc
Sinónimos: ninguno

Tipo: Verb
Definición: To supply (something) with staff or crew (of either sex).
etc
Sinónimos: ninguno.

etc.

Además haciendo click sobre cualquier de los sinónimos, cuando los hubiera, se va a la definición del sinónimo. */