const Categories = ({categories, onSelect}) => {
  return (
    <div id="categories">
        <h2>나의 향 감각은 어느정도일까?</h2>
        <ul>
            {
            categories.map((item,idx)=>{
                return(
                     <li key={idx}
                        onClick={()=>{onSelect(item)}}
                     > {item}</li>
                )
            })}
        </ul>
        </div>
  )
}

export default Categories