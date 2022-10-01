import {useState} from "react"

import { decks } from "../arrays/decks"
import Pergunta from "./Pergunta"

export default function Perguntas() {
    const [escolhaResposta, setEscolhaResposta] = useState("")
    const [perguntasConcluidas, setPerguntasConcluidas] = useState(0)

    return (
        <>
            {decks.map((e, i) => <Pergunta 
                                        key={i} 
                                        index={i} 
                                        pergunta={e.P} 
                                        resposta={e.R} 
                                        escolhaResposta={escolhaResposta} 
                                        setEscolhaResposta={setEscolhaResposta}
                                        perguntasConcluidas={perguntasConcluidas}
                                        setPerguntasConcluidas={setPerguntasConcluidas}
                                        />)}
        </>
    )

}