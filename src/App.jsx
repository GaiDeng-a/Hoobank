// import {motion} from 'framer-motion';
import Box from './components/box';
import Hero from './components/hero';
import Navbar from './components/navbar';
// import { useRef } from 'react';



function App() {


	return (
		<div className="bg-white h-screen w-auto p-4 flex  flex-col space-y-4">
			<Navbar />
			<Hero/>
			{/* <Box /> */}

		</div>
	);
}

export default App;
