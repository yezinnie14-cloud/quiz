import "./Categories.css";

const Categories = ({ categories, onSelect }) => {
  return (
    <div id="categories">
      <img src="/images/perfumeimage.png" alt="향수 사진" />

      <h2 className="scent-level">
        <span className="left">나의 향 감각은</span>
        <span className="right">어느 정도일까?</span>
      </h2>

      <ul>
        {categories.map((item, idx) => (
          <li
            key={idx}
            onClick={() => {
              onSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <button>향수 더보기</button>
    </div>
  );
};

export default Categories;
