import {  Dispatch, SetStateAction, useState } from "react";
import { Questionario, listaPerguntas, listaRespostas, paginas } from "../../App";

type PerguntasProps = {
    pergunta: string;
    setPergunta: (pergunta: string) => void;
    dispatch: React.Dispatch<any>;
    questionario: Questionario;
    setPagina: Dispatch<SetStateAction<paginas>>

}
const Perguntas = ({ pergunta, setPergunta, dispatch, questionario, setPagina }: PerguntasProps) => {
   
    const [perguntaAtual, setPerguntaAtual] = useState<number>(1);
 
    const proximaPergunta = () => {
        if (perguntaAtual === 20) return;
        setPerguntaAtual(perguntaAtual + 1);
        setPergunta(listaPerguntas[perguntaAtual + 1]);
    }

    const perguntaAnterior = () => {
        if (perguntaAtual === 1) return;
        setPerguntaAtual(perguntaAtual - 1);
        setPergunta(listaPerguntas[perguntaAtual - 1]);
    }

    const checaSeRespostaFoiDada = () => {
        questionario[perguntaAtual] === 0 ? alert('Selecione uma resposta') : proximaPergunta();
    }
                
    
        
    return (
        <div className="question-section">
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${perguntaAtual * 5}%` }}></div>
            </div>
            <button className="response-btn" onClick={() => {
                perguntaAnterior();
            }}
            style={{visibility: perguntaAtual === 1 ? 'hidden' : 'visible'}}
            >Anterior</button>

            <div className="question">
                <p className="font-fix">
                {perguntaAtual}.
                {pergunta} 
                </p>
            </div>
            <div className="response-buttons">
                <button className={
                    questionario[perguntaAtual] !== 1 ? 'response-btn' : 'response-btn-unselected'
                }onClick={() => {
                    dispatch({ type: 'resposta', pergunta: pergunta, resposta: 2 });
                   proximaPergunta();
                }}>{listaRespostas[2]}</button>
                
                <button className={
                    questionario[perguntaAtual] !== 2 ? 'response-btn' : 'response-btn-unselected'
                } onClick={() => {
                    dispatch({ type: 'resposta', pergunta: pergunta, resposta: 1 });
                    proximaPergunta();
                    
                }}>{listaRespostas[1]}</button>
            </div>
            {
                perguntaAtual !== 20 && <button
                    className={
                        questionario[perguntaAtual] !== 0 ? 'response-btn' : 'not-allowed'
                    }
                    disabled={questionario[perguntaAtual] === 0}
                    onClick={() => {
                    checaSeRespostaFoiDada();
                }}>Próxima</button>

            }
            {perguntaAtual === 20 &&
                 
                <button
                    className={questionario[perguntaAtual] !== 0 ? 'response-btn' : 'not-allowed'}
                    disabled={questionario[perguntaAtual] === 0}
                onClick={() => {
                    setPagina(3);
                    setPergunta(listaPerguntas[1]);
                    
            }}>Finalizar</button>
            }
        </div>
    )
}

export default Perguntas