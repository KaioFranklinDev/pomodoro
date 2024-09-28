'use client';
import Cronometro from "./common/cronometro";
import { useState } from "react";
import SettingsPomo from "./common/settingsPomo";


export default function Home() {
  const [pomoHandler, setPomoHandler] = useState<number>(25);
  const [braekHandler, setBraekHandler] = useState<number>(5);
  const [isPomo, setIsPomo] = useState(true)

  function changeForBreak(){
    if(isPomo===true){
      setIsPomo(false)
    }  
  }
  function changeForPomo(){
    if(isPomo === false){
      setIsPomo(true)
    }
  }

  return (
    <div className={`flex justify-center items-center h-screen w-screen text-white ${isPomo===true?"bg-red-500":"bg-blue-500"}`}>
      <div className="flex flex-col items-center text-center justify-center gap-4">
        <header className="flex justify-between w-full">
          <div>Pomofocus</div>
          <SettingsPomo valorPomo={pomoHandler} isPomo={isPomo} alterarValorPomo={setPomoHandler} />
        </header>
        <div className={`flex flex-col h-72 w-96 justify-between items-center p-4 rounded ${isPomo===true?"bg-red-400":"bg-blue-400"}`}>
          <div className="flex flex-row  gap-4">
            <button onClick={changeForPomo}>Pomodoro</button>
            <button onClick={changeForBreak}>Break</button>

          </div>
          {isPomo===true?<Cronometro timer={pomoHandler} isPomo={isPomo} /> : <Cronometro timer={braekHandler} isPomo={isPomo} /> }
        </div>
      </div>
    </div>
  );
}
