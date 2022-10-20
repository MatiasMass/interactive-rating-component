import {useState} from 'react'
import './circle.css'

const Circle = ({number, choic}) => {

    const [choice, setChoice] = useState(0)

    const handleChoice = (cho)=>{
        console.log('you selected', cho);
        setChoice(cho)
    }

    return (
        <div className="circle" onClick={() => handleChoice(choic)}>
            <h4>{number}</h4>
        </div>
    )
}

export default Circle