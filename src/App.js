import { useState } from "react";
import "./App.css";
import Categories from './components/Categories';
import quizData from './data/quizData.json';
import QuizPage from "./components/QuizPage";
import Results from "./components/Results";
const App = () => {
  const [category,setCategory] = useState('');
  const [filterQuiz,setfilterQuiz] = useState([]);
  const [finish,setFinish]= useState(false);
  const [score,setScore]= useState(0);
  const onSelctCategory = (select)=>{
    setCategory(select);  
    //quizData에서 선택한 카테고리의 문제만 새로 만듬.
    const quizes = quizData.quizzes.filter((data)=>{
      return data.category === select;
    });
   setfilterQuiz(quizes);
  }
  const handleReStart = ()=>{
    setCategory('');
    setFinish(false);
    setScore(0);
  }
  const handleScore = ()=>{
    //이전에 가진 값에 +20
    setScore((prev)=>{return prev+20});
  }
  return (
    <div className='app'>
      <div className={`mainline ${category && !finish ? "quiz-mode" : ""} ${finish ? "no-border":""}`}>
     { ! category && !finish && ( <h1>FRAGRANCE<br/>MASTER QUIZ</h1>
     )}
      
      {
      !category && !finish &&
      <Categories
       categories={quizData.categories}
       onSelect={onSelctCategory}/>
      }
     {
      category && !finish &&
       <QuizPage quizes={filterQuiz}
                            onFinish={setFinish}
                            onScore={handleScore}
                            score={score}
                            />
     }
     {finish && <div className="score-box"> {score}<p>점</p></div>}
     {
      finish && <Results onReStart={handleReStart}/>
     }

    </div>
    </div>
  )
}

export default App