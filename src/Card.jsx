import styled from 'styled-components';


// eslint-disable-next-line react/prop-types
const Card = ({ icon, title, description }) => {
  return (
    <StyledWrapper>
      <div className="flip-card w-full h-25 sm:h-30 lg:h-35">
        <div className="flip-card-inner">
        <div className="flip-card-front flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
          <img 
            src={icon}  // Dynamically passed from Skills.jsx
            alt={title}
            className="w-12 h-12 object-contain"
          />
        </div>
        {/* Back Side (Text) */}
        <div className="flip-card-back p-1"> 
          <p className="font-semibold text-gray-800 truncate">{title}</p>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid #60A5FA;
    border-radius: 1rem;
  }

  .flip-card-front {
    background: linear-gradient(120deg, rgb(230, 241, 254) 60%, rgb(230, 241, 254) 88%,
       rgb(230, 241, 254) 40%, rgba(230, 241, 254, 0.603) 48%);
    color: #e6f1fe;
  }

  .flip-card-back {
    background: linear-gradient(120deg, rgb(230, 241, 254) 30%, rgb(230, 241, 254) 88%,
       rgb(230, 241, 254) 40%, rgb(230, 241, 254) 78%);
    color: #e6f1fe;
    transform: rotateY(180deg);
  }`;

export default Card;
