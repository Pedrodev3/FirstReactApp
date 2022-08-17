import { useState } from "react";
import { Tweet } from "./components/Tweet";
import { AppRoutes } from "./Routes";

function App() {
  // O valor passado inicialmente para o useState vai ser o valor inicial da variável tweets.
  // Utilização de generics - Nesse caso utilizado para salvar dentro do array uma lista de Strings
  // Conceito de imutabilidade, pegar o valor atual da variável (tweets) e uma função para repor o valor da variável (setTweets)
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
    "Tweet 4",
  ]);

  function createTweet() {
    setTweets([...tweets, "Tweet 5"]);
  }

  return (
    <div>
      // Você não pode colocar um componente abaixo do outro sem encapsular ele
      com alguma outra tag
      <div>
        {tweets.map((tweet) => (
          <Tweet text={tweet} />
        ))}

        <button
          // CSS in Js
          style={{
            backgroundColor: "#fff333",
            border: "3px solid red",
            padding: ".5rem 1rem",
            color: "#1056e1",
          }}
          onClick={createTweet}
        >
          Adicionar tweet
        </button>
      </div>

      // Declarando componente de rotas
      <div>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
