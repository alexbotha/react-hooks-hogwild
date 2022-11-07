import { useState } from "react";

const Image = ({ image }) => <img src={image} alt="pig" />;
const Details = ({ hog }) => {
  return (
    <div>
      <h1>{hog.name}</h1>;<h3>{hog.specialty}</h3>
      <div>{hog.weight} kilos</div>
      <h4>{hog["highest medal achieved"]} medal achieved</h4>
      {hog.greased ? <div>Ready for fun</div> : <div>No grease</div>}
    </div>
  );
};

function Hog({ hog }) {
  const [showDetails, setShowDetails] = useState(true);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div onClick={toggleDetails} className="image pigTile ui three wide column">
      {showDetails ? <Details hog={hog} /> : <Image image={hog.image} />}
    </div>
  );
}

export default Hog;
