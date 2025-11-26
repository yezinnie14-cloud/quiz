import "./Result.css";
const Results = ({onReStart}) => {
  return (
    <div id="result">
      <h2>Have a afterglow</h2>
      <p>Your scent story awaits.</p>
        <p>당신의 점수는?</p>
        
        <button onClick={onReStart}>다시하기</button>
    </div>
  )
}

export default Results