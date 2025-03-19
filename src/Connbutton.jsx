import PropTypes from 'prop-types';
import styled from 'styled-components';

const Connbutton = ({svg}) => {
  return (
    <StyledWrapper>
      <button className="btn">
       {svg}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    display: grid;
    place-items: center;
    background: #e3edf7;
    padding: 1.4em;
    border-radius: 10px;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
  	      -6px -6px 10px -1px rgba(255,255,255,0.7);
    border: 1px solid rgba(0,0,0,0);
    cursor: pointer;
    transition: transform 0.5s;
  }

  .btn:hover {
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
  	      inset -4px -4px 6px -1px rgba(255,255,255,0.7),
  	      -0.5px -0.5px 0px rgba(255,255,255,1),
  	      0.5px 0.5px 0px rgba(0,0,0,0.15),
  	      0px 12px 10px -10px rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.1);
    transform: translateY(0.5em);
  }

  .btn svg {
    transition: transform 0.5s;
  }

  .btn:hover svg {
    transform: scale(0.9);
    fill: #333333;
  }`;
 

Connbutton.propTypes = {
  svg: PropTypes.node.isRequired,
};

export default Connbutton;
