import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Perguntas from "./components/Perguntas";
import Inicio from "./components/Inicio";
import Resultado from "./components/Resultado";


export enum listaPerguntas {
    "O relacionamento com os colegas de trabalho não é importante, contanto que o meu trabalho seja feito com habilidade e competência." = 1,
    "Os preconceitos (de religião, raça, idade, sexo, classe social etc.) contribuem consideravelmente para condicionar grande parte de nossas atitudes e juízos." = 2,
    "Nem sempre os conflitos organizacionais podem ser resolvidos satisfatoriamente." = 3,
    "Ao lidar com conflitos, acredito que apontar culpados e lavar a “roupa suja” é mais importante do que analisar fatos e buscar soluções." = 4,
    "Reconhecer diante dos outros que você estava errado pode comprometer a sua imagem profissional." = 5,
    "Todo e qualquer conflito é negativo." = 6,
    "O local e o momento em que o assunto é tratado influem muito no resultado positivo ou negativo de um conflito." = 7,
    "Não intervir num conflito é uma medida acertada, pois muitas vezes os conflitos se resolvem sozinhos." = 8,
    "Alguns conflitos podem até ajudar a formar relacionamentos positivos no futuro." = 9,
    "Num departamento em que as metas e interesses de uma pessoa ou grupo interferem nas metas e interesse de outra pessoa ou grupo, provavelmente ocorrerá um conflito." = 10,
    "Por mais que se queira evitá-los, algum tipo de conflito sempre acabará acontecendo numa empresa." = 11,
    "Na maior parte das vezes, uma atitude tranquila e calma desarma comportamentos hostis." = 12,
    "A maneira como uma pessoa se comporta quase sempre demonstra o seu estado psicológico." = 13,
    "No final de um conflito sempre haverá um vencedor e um perdedor." = 14,
    "Todo e qualquer conflito é passível de um acordo final." = 15,
    "Demonstrar aborrecimento ou irritação durante uma conversação, às vezes, é útil, pois mantém o diálogo sob controle." = 16,
    "Na maioria das vezes é difícil conciliar as metas e objetivos da organização com as metas e objetivos pessoais dos seus colaboradores." = 17,
    "Um departamento produtivo e atuante não deve se preocupar se está atropelando os outros departamentos da empresa, contanto que suas metas sejam atingidas." = 18,
    "Quando medidas muito impopulares precisam ser implantadas na companhia, nem sempre é conveniente negociá-las com as pessoas envolvidas." = 19,
    "Durante um conflito, ouvir a outra parte, mesmo que seja um desabafo, é sempre mais importante do que trazer soluções pré-definidas." = 20,
    pergunta
}

export enum listaRespostas {
	"Discordo" = 1,
	"Concordo" = 2,
}

export enum paginas {
  "inicio" = 1,
  "perguntas" = 2,
  "resultados" = 3,
}


export interface Questionario {
  [key: number]: number;

}


const reducer = (state: Questionario, action: any) => {

  switch (action.type) {
    case 'resposta':
      return {
        ...state,
        [listaPerguntas[action.pergunta]]: action.resposta
      
      }
    case 'reset-all':
      return {
        ...state,
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
        6: 0, 7: 0, 8: 0, 9: 0, 10: 0,
        11: 0, 12: 0, 13: 0, 14: 0, 15: 0,
        16: 0, 17: 0, 18: 0, 19: 0, 20: 0,
      }
    default:
      return state
  }
}

function App() {
	const questionarioInicial = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0,
    12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0,
  } as Questionario;
  
  const [pagina, setPagina] = useState(paginas.inicio);
  const [questionario, dispatch] = useReducer(reducer, questionarioInicial);
	const [pergunta, setPergunta] = useState(listaPerguntas[1]);
  
  useEffect(() => {
    console.log(questionario);
  }, [questionario]);
	return (
    <div className="main">
      <div className="page">
        {pagina === paginas.inicio && (
          <Inicio setPagina={setPagina} />
        )}
        {pagina === paginas.perguntas && (
          <Perguntas
            questionario={questionario}
            dispatch={dispatch}
            pergunta={pergunta}
            setPergunta={setPergunta}
            setPagina={setPagina}
          />
        )}
        {pagina === paginas.resultados && (
          <Resultado questionario={questionario} dispatch={dispatch} setPagina={setPagina} />
        )}
      </div>
    </div>
  );
  
  
  

}

export default App;
