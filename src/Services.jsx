import Servicescard from './Servicescard';

const Services = () =>{
    return(
      // eslint-disable-next-line react/no-unknown-property
      <div className="flex flex-col justify-center items-center">
        <div className=" top-0 px-6 py-4  rounded-md"><h1 className="text-3xl md:text-5xl font-bold text-gray-900">Services</h1></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Servicescard 
            icon="mdi:gear-play-outline" width="24" height="24" 
            title="Mechanical Engineering"
            description="Designing and developing mechanical systems."
            link="https://www.google.com"
          
          />
          <Servicescard 
            icon="mdi:gear-play-outline" width="24" height="24" 
            title="Mechanical Engineering"
            description="Designing and developing mechanical systems."
            link="https://www.google.com"
          
          />
          <Servicescard 
            icon="mdi:gear-play-outline" width="24" height="24" 
            title="Mechanical Engineering"
            description="Designing and developing mechanical systems."
            link="https://www.google.com"
          
          />
        </div>
      </div>
    );
  }
  
  export default Services; // Now 'About' is the default export