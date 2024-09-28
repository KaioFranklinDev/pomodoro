import { MouseEventHandler } from "react"
interface ButtonsGlobalProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  isPomo: boolean
}
export default function ButtonsGlobal({ onClick, isPomo }: ButtonsGlobalProps) {
  let color: string = "red"
  if (isPomo === true) {
    color = "red"
  }
  if (isPomo === false) {
    color = "blue"
  }
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-600 hover:bg-${color}-700 text-white font-bold py-2 px-4 border-b-4 border-${color}-800 hover:border-${color}-600   rounded`}
    >
      REINICIAR
    </button>
  )
}