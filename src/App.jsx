import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addText, decrement, increment} from "./redux/actions/actions.js";

function App() {
    const [text, setText]=useState('')
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)
    const texts = useSelector(state => state.text)


    const handleAddText =()=>{
        dispatch(addText(text))
        setText ('')
    }

    const handleIncrement = ()=>{
        dispatch(increment())
    }
    const handleDecrement = ()=> {
        dispatch(decrement())
    }
        return (
            <>
                <div>
                    <input type="text"value={text} onChange={(e)=> setText(e.target.value)}/>
                    <button onClick={handleAddText}>Добавить</button>
                </div>
                <ul>
                    {texts.map((text, key)=>(
                        <li key={key}>{text}</li>
                    ))}
                </ul>
                <div>
                    <p>COUNTER: {counter}</p>
                    <button onClick={handleIncrement}>Плюс</button>
                    <button onClick={handleDecrement}>Минус</button>
                </div>
            </>
        )
}
export default App
