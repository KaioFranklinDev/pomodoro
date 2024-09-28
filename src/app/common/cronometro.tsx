import { useEffect, useState } from "react";
import ButtonSwitch from "./buttonSwitch";
import ButtonsGlobal from "./buttonsGlobal";

interface CronometroProps {
  timer: number;
  isPomo: boolean
}

export default function Cronometro({ timer, isPomo }: CronometroProps) {
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
            <div className="text-3xl">Concluido!</div>
          </div>
        }
      </div>

      <div className="flex gap-2">
        {endTimePomo===true ?
          <ButtonsGlobal isPomo={isPomo} onClick={() => {setTime(timer) ;  setEndTimePomo(false)}} />
          :
          <ButtonSwitch isActive={isActive} isPomo={isPomo} onClick={toggle} />
        }
      </div>
      
    </div>
  );
}
