import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Servicescard = ({ icon, title, description, link }) => {
  return (
    <StyledWrapper>
      <div className="card service-card w-full  p-2 sm:p-4 md:p-8">
        <div className="card-details">
          <Icon icon={icon} className="text-7xl text-blue-500 " />
          <p className="text-title">{title}</p>
          <p className="text-body">{description}</p>
          
        </div>
        <button className="card-button"><Link to={link} className="see-more-link">See More</Link></button>
      </div>
    </StyledWrapper>
    
  );
}

const StyledWrapper = styled.div`
  .card {
   
   border-radius: 20px;
   background: #f5f5f5;
   position: relative;
   padding: 1.8rem;
   border: none;
   transition: 0.5s ease-out;
   overflow: visible;
  }

  .card-details {
   color: black;
   height: 100%;
   gap: .5em;
   display: grid;
   place-content: center;
  }

  .card-button {
   transform: translate(-50%, 100%);
   width: 60%;
   border-radius: 1rem;
   border: none;
   background-color: #008bf8;
   color: #fff;
   font-size: 1rem;
   padding: .5rem 1rem;
   position: absolute;
   left: 50%;
   bottom: 0;
   opacity: 0;
   transition: 0.3s ease-out;
  }

  .text-body {
   color: rgb(134, 134, 134);
  }

  /*Text*/
  .text-title {
   font-size: 1.5em;
   font-weight: bold;
  }

  /*Hover*/
  .card:hover {
   border-color: #008bf8;
   background: #e6f1fe;
   box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
   transform: translate(-50%, 50%);
   opacity: 1;
  }`;


Servicescard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Servicescard;
