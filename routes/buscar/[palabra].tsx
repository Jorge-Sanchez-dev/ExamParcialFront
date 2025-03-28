import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ListPalabras from "../../components/list.tsx";
import { Def } from "../../types.ts";
//import Axios from "axios";


interface Data {
  palabra?: Def;
  error?: boolean;
}


export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const { palabra } = ctx.params;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${palabra}`;

    try {
      const response = await Axios.get<Def[]>(url); 

      if (response.status !== 200) {
        return <div>ERROR</div>
      }

      return ctx.render({ palabra: response.data[0]});
    } catch (error) {
      console.error(error);
      return <div>ERROR</div>
    }
  },
};


export default function WordPage(props: PageProps<Data>) {
  const { palabra, error } = props.data;

  if (error) {
    return <div> ERROR </div>;
  }

  return (
    <div>
          <h1>Resultados para: {props.data.palabra}</h1>
          {palabra && palabra.meanings.map((c) => (
            <ListPalabras
              palabra={palabra.word}
              tipo={c.partOfSpeech}
              definicion={c.definitions[0].definition}
              ejemplo={c.definitions[0].example}
              sinonimos={c.definitions[0].synonyms}
            />
          ))}
       <a href="/">Volver a la página inicial</a>
    </div>
  );
}
