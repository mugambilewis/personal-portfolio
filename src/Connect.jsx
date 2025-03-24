import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub  } from "@fortawesome/free-brands-svg-icons";

const Connect = () => {
    return (
        <div className="bg-white text-gray-800 flex flex-col items-center justify-center gap-8 p-6  w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
            <h2>Let&apos;s conect</h2>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row"><span><Icon icon="mdi:gmail" width="24" height="24" /></span>mugambilewis001@gmail.com</div>
              <div  className="flex flex-row"><span><Icon icon="ic:baseline-whatsapp" width="24" height="24" /></span>+254 794 644395</div>
            </div>
            
            <div className="flex flex-row items-center justify-center w-full gap-4">
            <a  
              href="https://www.linkedin.com/in/mugambi-lewis-64051332b" target="_blank" className="inline-flex justify-center items-center w-8 h-8 bg-transparent border-2 border-[#60a5fa] rounded-full text-[#60a5fa] text-base  p-6 hover:bg-[#60a5fa] hover:text-white   transition duration-300 ease-in-out hover:scale-[1.3] hover:-translate-y-[5px]"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://www.facebook.com/mugambilewis1" target="_blank"
              className="inline-flex justify-center items-center w-8 h-8 bg-transparent border-2 border-[#60a5fa] rounded-full text-[#60a5fa] text-base  p-6 hover:bg-[#60a5fa] hover:text-white   transition duration-300 ease-in-out hover:scale-[1.3] hover:-translate-y-[5px]"
              
            >
              <FontAwesomeIcon icon={faFacebook}/>
            </a>

            <a
              href="https://github.com/mugambilewis"
               className="inline-flex justify-center items-center w-8 h-8 bg-transparent border-2 border-[#60a5fa] rounded-full text-[#60a5fa] text-base p-6 hover:bg-[#60a5fa] hover:text-white   transition duration-300 ease-in-out hover:scale-[1.3] hover:-translate-y-[5px]"
            >
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            
            <a
              href="https://github.com/mugambilewis"
               className="inline-flex justify-center items-center w-8 h-8 bg-transparent border-2 border-[#60a5fa] rounded-full text-[#60a5fa] text-base  p-6 hover:bg-[#60a5fa] hover:text-white   transition duration-300 ease-in-out hover:scale-[1.3] hover:-translate-y-[5px]"
            >
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            
              
            </div>

            <button
              className="inline-block px-11 py-4 bg-white rounded-[0.375rem] text-[#60a5fa] text-base border-[2px] border-[#60a5fa] cursor-pointer transition duration-300 ease-in-out hover:bg-[#60a5fa] hover:text-white"
            >Download Resume</button>
        </div>
    );
}
export default Connect;