import { Children, createContext,useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

export const ContextProvider = (props) => {

    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [resultData, setResultData] = useState("")

    const onSent = async (prompt) => {
        setResultData("")
        setShowResult(true)
        setLoading(true)
        setRecentPrompt(input)
        const response = await run(input)
         setResultData(response || "no response available") 
        setLoading(false)
        setInput("")


    }

    const contextValue = {
        input,
        loading,
        prevPrompts,
        setPrevPrompts,
        recentPrompt,
        onSent,
        showResult,
        setRecentPrompt,
        setInput,
        resultData,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )


}