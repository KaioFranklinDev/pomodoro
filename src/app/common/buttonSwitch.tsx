import { MouseEventHandler } from "react"
interface ButtonSwitchProps{
    onClick:MouseEventHandler<HTMLButtonElement>
    isActive:boolean
    isPomo:boolean
}
export default function ButtonSwitch({onClick, isActive, isPomo}:ButtonSwitchProps){
    let color:string = "red" 
    if(isPomo===true){
      color = "red"
    }
    if(isPomo===false){
      color = "blue"
    }
    return(
        <button
            onClick={onClick}
            className={`bg-${color}-600 hover:bg-${color}-700 text-white font-bold py-2 px-4 border-b-4 border-${color}-800 hover:border-${color}-600   rounded`}
          >
            {isActive ? "PAUSAR" : "INICIAR"}
          </button>
    )
}