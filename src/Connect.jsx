import { Icon } from "@iconify/react";
import Connbutton from "./Connbutton";

const Connect = () => {
    return (
        <div className="bg-white text-gray-800 flex flex-col items-center justify-center gap-4 p-6">
            <h2>Let&apos;s conect</h2>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row"><span><Icon icon="mdi:gmail" width="24" height="24" /></span>mugambilewis001@gmail.com</div>
              <div  className="flex flex-row"><span><Icon icon="ic:baseline-whatsapp" width="24" height="24" /></span>+254 794 644395</div>
            </div>
            
            <div className="flex flex-row items-center gap-4">
              <Connbutton />
              <Connbutton />
              <Connbutton />
              <Connbutton />
              
            </div>

            <button>Download Resume</button>
        </div>
    );
}
export default Connect;