import { FunctionComponent } from "preact";

type Props = {
  palabra: string;
  tipo: string;
  definicion: string;
  ejemplo?: string;
  sinonimos?: string[];
};

const ListPalabras: FunctionComponent<Props> = (props) => {
  const { palabra, tipo, definicion, ejemplo, sinonimos = [] } = props;
  return (
    <div>
      <h2>Palabra: {palabra}</h2>
      <h3>Tipo: {tipo}</h3>
      <p>Definición: {definicion}</p>
      {ejemplo && <p>Ejemplo: {ejemplo}</p>}
      <p>
        Sinónimos:{" "}
        {sinonimos.length > 0 ? sinonimos.map((sinonimo) => (
              <a href={`/buscar/${sinonimo}`}>
                {sinonimo}
              </a>
            )): "ninguno"}
      </p>
    </div>
  );
};

export default ListPalabras;
