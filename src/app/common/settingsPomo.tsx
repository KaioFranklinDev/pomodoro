import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface SettingsPomoProps {
    valorPomo: number;
    valorBreak: number;
    isPomo: boolean;
    alterarValorPomo: Dispatch<SetStateAction<number>>;
    alterarValorBreak: Dispatch<SetStateAction<number>>;
}

export default function SettingsPomo({ valorPomo, valorBreak, isPomo, alterarValorPomo, alterarValorBreak }: SettingsPomoProps) {
    const [openModal, setOpenModal] = useState(false);
    
    function ModalSettings() {
        setOpenModal(!openModal);
    }

    const color = isPomo ? 'red' : 'blue'; // Definindo a cor condicionalmente
    

    return (
        <div className={`p-3 h-9 ${"bg-"+color+"-400"} flex items-center rounded`}>
            <button
                className="flex flex-row gap-2"
                onClick={ModalSettings}
            >
                <Image 
                    alt="engrenagem config"
                    src={"/assets/img/engrenagem.svg"}
                    width={20}
                    height={20}
                />
                <p>Settings</p>
            </button>
            {openModal && (
                <div className={`flex flex-col absolute mt-60 gap-4 p-4 ${isPomo?"bg-red-300":"bg-blue-300"} rounded shadow-lg`}>
                    <div>
                        <label htmlFor="numberInput" className="block mb-2">
                            Tempo do pomodoro:
                        </label>
                        <input
                            id="numberInput"
                            type="number"
                            className="w-full p-2 border rounded text-black"
                            placeholder={`${valorPomo}`}
                            onChange={(e) => alterarValorPomo(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label htmlFor="numberInput2" className="block mb-2">
                            Tempo da Pausa:
                        </label>
                        <input
                            id="numberInput2"
                            type="number"
                            className="w-full p-2 border rounded text-black"
                            placeholder={`${valorBreak}`}
                            onChange={(e) => alterarValorBreak(Number(e.target.value))}
                        />
                    </div>

                    <button
                        className="bg-slate-950 rounded w-10"
                        onClick={ModalSettings}
                    >
                        Ok
                    </button>
                </div>
            )}
        </div>
    );
}
