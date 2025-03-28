
export type Definicion = {
    definition: string;
    example?: string;
    synonyms?: string[];
    antonyms?: string[];
  }
  
  export type Def = {
    word: string;
    phonetic?: string;
    phonetics?: { text: string; audio?: string }[];
    meanings: Significado[];
    license?: { name: string; url: string };
    sourceUrls?: string[];
  }

  export type Significado = {
    partOfSpeech: string;
    definitions: Definicion[];
  }
  