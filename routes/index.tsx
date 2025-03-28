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