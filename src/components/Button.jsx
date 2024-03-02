import { motion } from "framer-motion"
import { useState } from "react"


// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => {
  const [scaly, setScale] = useState(false)
  const setcale = () => {
    setScale(!scaly)
  }
  return (
    <motion.button
      whileHover={{
        scale: 1.03
      }}
      whileTap={{
        scale: 0.9
      }}
      type="button"  className={` relative rounded-[10px] w-[186px] h-[82px] mt-5 bg-blue-gradient text-[18px] text-primary outline-none ${ styles } overflow-hidden `}>

      <span> Get started</span>
    </motion.button>
  )
}

export default Button