import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import './styles.css'

const Stars = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    // debugger;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="star" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="star" />
        ) : (
          <AiOutlineStar className="star" />
        )}
      </span>
    );
  });

  return (
    <section>
      <div className="icon-style">
        {ratingStar}
        <p>({reviews} customer reviews)</p>
      </div>
    </section>
  );
};

export default Stars;