import { MouseEventHandler } from "react"
interface ButtonSwitchProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  isActive: boolean
  isPomo: boolean
}
export default function ButtonSwitch({ onClick, isActive, isPomo }: ButtonSwitchProps) {
  const colorSwitch: string = isPomo ?
    " bg-red-600 hover:bg-red-700 border-red-800 hover:border-red-600 "
    :
    " bg-blue-600 hover:bg-blue-700 border-blue-800 hover:border-blue-600 "
  return (
    <button
      onClick={onClick}
      className={`
              ${colorSwitch}
              text-white 
              font-bold 
              py-2 px-4 
              border-b-4 
              rounded`}
    >
      {isActive ? "PAUSAR" : "INICIAR"}
    </button>
  )
}