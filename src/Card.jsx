
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="flip-card w-full h-[100px] sm:h-[120px] lg:h-[140px]">
        <div className="flip-card-inner">
          <div className="flip-card-front">
          
          <h3 className="text-gray-800 text-xl font-semibold">Skill</h3>
          </div>
          <div className="flip-card-back">
            <p className="title">BACK</p>
            <p>Leave Me</p>
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
    background: linear-gradient(120deg, rgb(230, 230, 255) 60%, rgb(204, 204, 255) 88%,
       rgb(204, 204, 255) 40%, rgba(204, 204, 255, 0.603) 48%);
    color: #1F2937;
  }

  .flip-card-back {
    background: linear-gradient(120deg, rgb(230, 230, 255) 30%, rgb(230, 230, 255) 88%,
       rgb(230, 230, 255) 40%, rgb(230, 230, 255) 78%);
    color: #1F2937;
    transform: rotateY(180deg);
  }`;

export default Card;
