import { useEffect, useState } from "react";

interface CronometroProps {
  timer: number;
}

export default function Cronometro({ timer }: CronometroProps) {
  const [time, setTime] = useState(timer);
  const [isActive, setIsActive] = useState(false);
  const [endTimePomo, setEndTimePomo] = useState(false);

  // Quando o valor de 'timer' mudar, reseta o tempo
  useEffect(() => {
    setTime(timer);
  }, [timer]);

  // Função para iniciar ou pausar o cronômetro
  const toggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000); // A cada 1 segundo, o tempo é reduzido
    } else if (time === 0) {
      setEndTimePomo(true)
      setIsActive(false); // Para o cronômetro quando chegar a 0
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className="h-52 flex flex-col items-center justify-around">
      <div className="text-8xl text-white">
        {time > 0 ? time :
          <div>
            <div className="text-3xl">Pomo Concluido!</div>
          </div>
        }
      </div>

      <div className="flex gap-2">
        {endTimePomo===true ?
          <button
            className="text-base bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 border-b-4 border-red-800 hover:border-red-600 rounded"
            onClick={() => {setTime(timer) ;  setEndTimePomo(false)}}
          >   reniciar
          </button>
          :
          <button
            onClick={toggle}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 border-b-4 border-red-800 hover:border-red-600 rounded"
          >
            {isActive ? "PAUSAR" : "INICIAR"}
          </button>
        }
      </div>
    </div>
  );
}
