import {
	Dispatch,
	JSXElementConstructor,
	Key,
	ReactElement,
	ReactFragment,
	ReactPortal,
	SetStateAction,
} from "react";
import { Questionario, listaPerguntas, paginas } from "../../App";

type Props = {
	questionario: Questionario;
	setPagina: Dispatch<SetStateAction<paginas>>;
	dispatch: React.Dispatch<any>;
};
type concordoPontos = 2 | 3 | 7 | 9 | 10 | 11 | 12 | 13 | 19 | 20;

const Resultado = ({ questionario, setPagina, dispatch }: Props) => {
	let pontos: number = 0;

	Object.keys(questionario).map((pergunta: string, index) => {
		console.log(questionario[parseInt(pergunta)]);
		if (
			pergunta === "2" ||
			pergunta === "3" ||
			pergunta === "7" ||
			pergunta === "9" ||
			pergunta === "10" ||
			pergunta === "11" ||
			pergunta === "12" ||
			pergunta === "13" ||
			pergunta === "19" ||
			pergunta === "20"
		) {
			if (questionario[parseInt(pergunta)] === 2) {
				pontos += 1;
			}
		} else if (
			pergunta === "1" ||
			pergunta === "4" ||
			pergunta === "5" ||
			pergunta === "6" ||
			pergunta === "8" ||
			pergunta === "14" ||
			pergunta === "15" ||
			pergunta === "16" ||
			pergunta === "17" ||
			pergunta === "18"
		) {
			if (questionario[parseInt(pergunta)] === 1) {
				pontos += 1;
			}
		}
	});
console.log(pontos);
	if (pontos <= 10) {
		return (
			<div className="result-section font-fix">
				<h2 className="underline">
					Seu resultado foi:
					<span className="text-green-950 font-bold"> {pontos}</span>
				</h2>
				<p className="font-fix">
					Você realmente tem que melhorar sua habilidade de gerenciar conflitos.
					É possível que algumas vezes você não saiba que atitudes adotar ou que
					direção seguir para chegar a um resultado final satisfatório. Não
					desanime. Procure estudar e conhecer mais a respeito de como
					administrar conflitos.
				</p>
				<button
                className="manage-btn" onClick={() => {
					dispatch({ type: "reset-all" });
					setPagina(paginas.inicio);
				}}>Reiniciar</button>
			</div>
		);
	} else if (pontos > 10 && pontos <= 14) {
		return (
			<div className="result-section">
				 <h2 className="underline "
                    >Seu resultado foi:
                        <span className="text-green-950 font-bold"> {pontos}</span>
                    </h2>
				<p>
					Sua pontuação é média. Consegue obter alguns bons resultados mas,
					provavelmente, algumas vezes comete equívocos que podem se tornar
					problemáticos. Precisa melhorar.
				</p>
				<button
					className="bg-slate-800 text-white px-4 py-2 rounded-md"
					onClick={() => {
						dispatch({ type: "reset-all" });
						setPagina(paginas.inicio);
					}}
				>
					Reiniciar
				</button>
			</div>
		);
	}
	else if (pontos > 14 && pontos <= 17) {
		return (
			<div className="result-section">
				 <h2 className="underline"
                    >Seu resultado foi:
                        <span className="text-green-950 font-bold"> {pontos}</span>
                    </h2>
				<p>
					Você é um bom administrador de conflitos e tem percepção, na maioria
					das vezes, dos problemas e das medidas a serem tomadas. Pode
					melhorar.
				</p>
				<button
                className="manage-btn" onClick={() => {
					dispatch({ type: "reset-all" });
					setPagina(paginas.inicio);
				}}>Reiniciar</button>
			</div>
			
		)
	}
	else if (pontos > 17 && pontos <= 20) {
		return (
			<div className="result-section">
					 <h2 className="underline"
                    >Seu resultado foi:
                        <span className="text-green-950 font-bold"> {pontos}</span>
                    </h2>
					<p>
						Você sabe administrar conflitos organizacionais. Sabe quando e como
						enfrentar situações realmente problemáticas e como resolvê-las.
						Parabéns.
				</p>
				<button
                className="manage-btn" onClick={() => {
					dispatch({ type: "reset-all" });
					setPagina(paginas.inicio);
				}}>Reiniciar</button>
				</div>
		)
	}
	else return <></>

};

export default Resultado;
