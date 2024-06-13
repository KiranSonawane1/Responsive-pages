
import {motion} from "framer-motion"
import { fadeIn } from "../variants"
const Banner = ({banner,heading,subheading,btn1,btn2}) => {
  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
       
         {/* banner image */}
         <motion.div variants={fadeIn("down",0.2)} 
         initial="hidden"
         whileInView={"show"}
         >
            <img src={banner} alt="" className="lg:h-[386px] bg-gradientBg" />
        </motion.div>
       
        {/* banner content */}
        <div className="md:w-3/5">
            <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">{heading}</h2>
            <p className="text-[#EBEBEB] 2xl md-8">{subheading} </p>
            <div className="space-x-5 space-y-4">
                <button className="btnprimary">{btn1}</button>
                <button className="btnprimary">{btn2}</button>
            </div>
        </div>
      
    </div>
</div>
  )
}

export default Banner