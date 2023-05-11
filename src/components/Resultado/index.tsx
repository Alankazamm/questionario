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
		if (
			index === 0 ||
			index === 3 ||
			index === 4 ||
			index === 5 ||
			index === 7 ||
			index === 13 ||
			index === 14 ||
			index === 15 ||
			index === 16 ||
			index === 17
		) {
			if (questionario[index] === 1) pontos += 1;
		} else {
			if (questionario[index] === 2) pontos += 1;
		}
	});

	return (
		<div className="question-section">
			<div>
				<h1>Resultado</h1>
			</div>

			{pontos <= 11 && (
				<div className="result-section">
                    <h2 className="underline"
                    >Seu resultado foi:
                        <span className="text-green-950 font-bold"> {pontos}</span>
                    </h2>
					<p>
						Você realmente tem que melhorar sua habilidade de gerenciar
						conflitos. É possível que algumas vezes você não saiba que atitudes
						adotar ou que direção seguir para chegar a um resultado final
						satisfatório. Não desanime. Procure estudar e conhecer mais a
						respeito de como administrar conflitos.
					</p>
				</div>
			)}
			{pontos >= 12 && pontos <= 14 && (
				<div className="result-section">
					<h2>Seu resultado foi: {pontos}</h2>
					<p>
						Sua pontuação é média. Consegue obter alguns bons resultados mas,
						provavelmente, algumas vezes comete equívocos que podem se tornar
						problemáticos. Precisa melhorar.
					</p>
				</div>
			)}
			{pontos >= 15 && pontos <= 17 && (
				<div className="result-section">
					<h2>Seu resultado foi: {pontos}</h2>
					<p>
						Você é um bom administrador de conflitos e tem percepção, na maioria
						das vezes, dos problemas e das medidas a serem tomadas. Pode
						melhorar.
					</p>
				</div>
			)}
			{pontos >= 18 && pontos <= 20 && (
				<div className="result-section">
					<h2>Seu resultado foi: {pontos}</h2>
					<p>
						Você sabe administrar conflitos organizacionais. Sabe quando e como
						enfrentar situações realmente problemáticas e como resolvê-las.
						Parabéns.
					</p>
				</div>
			)}
            <button
                className="manage-btn"
                onClick={() => {
                    dispatch({type: "reset-all"})
					setPagina(1);
				}}
			>
				Reiniciar
			</button>
		</div>
	);
};

export default Resultado;
