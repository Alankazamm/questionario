import { Dispatch, SetStateAction } from "react";
import { paginas } from "../../App";

type Props = {
    setPagina: Dispatch<SetStateAction<paginas>>
}
const Inicio = ({setPagina}:Props) => {
    return (
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Questionário</h1>
          <button
            className="manage-btn"
            onClick={() => {
              setPagina(2);
            }}
          >
            Iniciar
          </button>
        </div>
      );
      
}

export default Inicio;