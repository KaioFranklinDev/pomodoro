'use client';
import Cronometro from "./common/cronometro";
import { useState } from "react";
import SettingsPomo from "./common/settingsPomo";


export default function Home() {
  const [pomoHandler, setPomoHandler] = useState<number>(25);


  return (
    <div className="flex justify-center items-center h-screen w-screen text-white bg-red-500">
      <div className="flex flex-col items-center text-center justify-center gap-4">
        <header className="flex justify-between w-full">
          <div>Pomofocus</div>
          <SettingsPomo valorPomo={pomoHandler} alterarValorPomo={setPomoHandler} />
        </header>
        <div className="flex flex-col h-72 w-96 bg-red-400 justify-between items-center p-4 rounded">
          <div className="flex flex-row  gap-4">
            <button>Pomodoro</button>
            <button>Break</button>

          </div>
          <Cronometro timer={pomoHandler ? pomoHandler : 25} />
        </div>
      </div>
    </div>
  );
}
