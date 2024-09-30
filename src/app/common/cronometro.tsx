import { useEffect, useState } from "react";
import ButtonsGlobal from "./buttonsGlobal";
import ButtonSwitch from "./buttonSwitch";


interface CronometroProps {
  timer: number;
  isPomo: boolean;
}

export default function Cronometro({ timer, isPomo }: CronometroProps) {
  const [time, setTime] = useState(timer * 60); // Converte minutos para segundos
  const [isActive, setIsActive] = useState(false);
  const [endTimePomo, setEndTimePomo] = useState(false);

  // Atualiza o tempo quando o valor de 'timer' mudar
  useEffect(() => {
    setTime(timer * 60); // Reset para o valor original convertido em segundos
  }, [timer]);

  useEffect(() => {
    if (time > 0) {
      document.title = `${isPomo?"Pomo":"Break"} ${formatTime(time)}`;
    } else {
      document.title = `${isPomo?"Pomo concluído!":"Break concluída!"}`;
    }
  }, [time]);

  // Função para iniciar ou pausar o cronômetro
  const toggle = () => {
    setIsActive(!isActive);
  };

  // Função para formatar o tempo em MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000); // Reduz o tempo a cada 1 segundo
    } else if (time === 0) {
      setEndTimePomo(true);
      setIsActive(false); // Para o cronômetro quando atingir 0
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className="h-52 flex flex-col items-center justify-around">
      <div className="text-8xl text-white">
        {time > 0 ? formatTime(time) : (
          <div className="text-3xl">{`${isPomo?"Pomodoro Concluído!":"Pausa Concluída!"} `}</div>
        )}
      </div>

      <div className="flex gap-2">
        {endTimePomo ? (
          <ButtonsGlobal
            isPomo={isPomo}
            onClick={() => {
              setTime(timer * 60); // Reseta o cronômetro
              setEndTimePomo(false);
            }}
          />
        ) : (
          <ButtonSwitch
            isActive={isActive}
            isPomo={isPomo}
            onClick={toggle}
          />
        )}
      </div>
    </div>
  );
}
