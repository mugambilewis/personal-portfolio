import Card from "./Card";

const Skills = () =>{
    return(
     
      <div className="flex flex-col justify-center items-center">
        <div className=" top-0 px-6 py-2  rounded-md"><h1 className="text-3xl md:text-5xl font-bold text-gray-900">Skills</h1></div>
   
        <div className="grid grid-cols-4 top-10 sm:grid-cols-4 lg:grid-cols-6 gap-4 w-full lg:w-[60%] p-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
      </div>
    ) ;
  }
  
  export default Skills; // Now 'About' is the default export