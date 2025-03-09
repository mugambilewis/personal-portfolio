import Servicescard from './Servicescard';
const Services = () =>{
    return(
    <div>
      <div className="flex flex-col justify-center items-center">
      <div className=" top-0 px-6 py-4  rounded-md"><h1 className="text-3xl md:text-5xl font-bold text-gray-900">Services</h1>
      </div>
      <div className="grid grid-cols-1 mt-6 gap-6 p-6 md:grid-cols-3 lg:grid-cols-3">
        <Servicescard />
        <Servicescard />
        <Servicescard />
      </div>


      </div>


    </div>
    );
  }
  
  export default Services; // Now 'About' is the default export