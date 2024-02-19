import {motion} from "framer-motion"


export default function Box() {
     return (
          <div>
               <motion.div
				className="  bg-red-400  w-28 rounded-full h-8 flex items-center justify-center"
				drag
				dragConstraints={{
					left:1200,
					right:1200
				}}
				whileHover={{
					scale: 1.1,
					rotate: -60
					// background: 'green'
				}}
				initial={{
					color: 'blue'
				}}
				animate={{
					x: 1120,
					rotateZ: 360
					
				}}
				transition={{
					type: "spring",
					stiffness: 80
				}}
				
			>hello world.</motion.div>
          </div>
     )
}