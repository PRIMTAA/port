import { motion } from "framer-motion"
import {styles} from "../styles"
import { edus } from "../constants"
import {SectionWrapper} from "../hoc"
import {fadeIn, textVariant} from "../utils/motion"

const EducatoinCard = ({index,edu,name,place,degree,image})=>(
  <motion.div
  variants={fadeIn("","spring",index*0.5,0.75)}
  className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
  <p className="text-white font-black text-[18px]">{degree}</p>
  <div className="mt-1">
    <p className="text-white tracking-wider text-[13px]">{edu}</p>
    <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[18px]">
          {name}
        </p>
        <p className="mt-1 text-secondary text-[14px]">
          {place}
        </p>
      </div>
        <img 
          src = {image}
          alt = "logos"
          className="w-10 h-10 rounded-full object-cover"
        />
    </div>
  </div>
  </motion.div>
)
const Education = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
    <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>How very qualified am I, u say?</p>
      <h2 className={`${styles.sectionHeadText}`}><span className="text-[#00D7FF]">Education.</span></h2>
    </motion.div>
    </div>
    <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
      {edus.map((edu,index)=>(
        <EducatoinCard
          key = {edu.name}
          index = {index}
          {...edu}
        />
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(Education,"")