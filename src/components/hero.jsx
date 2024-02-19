

export default function Hero() {
     return (
          <div>
               <div className=" flex h-[86vh] w-auto gap-4" >

                    <div className=" flex flex-col h-[100%] w-[50%] gap-4">

                         <div className=" h-[60%] w-[100%] bg-blue-300"></div>

                         <div className=" flex h-[40%] w-[100%] gap-4">
                              <div className="h-[100%] w-[50%] bg-blue-400">h1</div>
                              <div className="h-[100%] w-[50%] bg-pink-400"></div>
                         </div>

                    </div>

                    <div className="h-[100%] w-[50%] bg-green-600"></div>

               </div>
          </div>
     )
}