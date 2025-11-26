import { useState } from "react";
import "./QuizPage.css";

const QuizPage = ({ quizes, onFinish, onScore, score }) => {
    const [current, setCurrent] = useState(0);
    const handleClick = (idx) => {
        //정답체크
        if (idx + 1 === quizes[current].correct) {
            //점수를 +20 
            onScore();
        }
        if (current + 1 < quizes.length) {
            setCurrent(current + 1);
        } else {
            onFinish(true);
        }
    }
    return (
        <div id="quiz-page">
            <div className="quiz-inner">
                <img
                    className="quiz-image"
                    src={quizes[current].image}
                    alt=""
                />


                <p>{quizes[current].question}</p>
                <ul className="choices">
                    {
                        quizes[current].choices.map((item, idx) => {
                            return (
                                <li key={idx} onClick={() => { handleClick(idx) }}>{idx + 1}.{item}</li>
                            )
                        })
                    }
                </ul>
                <p>현재 점수 : {score}</p>
                <p>({current + 1}/{quizes.length})</p>
            </div>
        </div>
    )
}

export default QuizPage