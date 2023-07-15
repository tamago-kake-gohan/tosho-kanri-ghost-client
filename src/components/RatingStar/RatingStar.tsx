import "./RatingStar.css";

interface RatingStarProps {
  maxStars: number;
  currentRating: number;
  onStarClick: (rating: number) => void;
}

const RatingStar: React.FC<RatingStarProps> = ({
  maxStars,
  currentRating,
  onStarClick,
}) => {
  const handleStarClick = (index: number) => {
    onStarClick(index + 1);
  };
  return (
    <div className="rating-stars">
      {[...Array(maxStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={index < currentRating ? "#FFC107" : "#F0F0F0"}
          onClick={() => handleStarClick(index)}
          className="star-icon"
        >
          <path d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976a2.999 2.999 0 0 1-5.223 0a3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9Zm0 10c-1.105 0-2 1.12-2 2.5s.895 2.5 2 2.5s2-1.12 2-2.5s-.895-2.5-2-2.5ZM9.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z" />
        </svg>
      ))}
    </div>
  );
};

export default RatingStar;
