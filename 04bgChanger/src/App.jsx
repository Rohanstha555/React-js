import { useState } from "react"

function App() {
  const [color, setcolor] = useState("Black")

  return (
    <div className="w-full h-screen  "style={{backgroundColor: color}}>

            <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-3 py-2">
              
              <div className="flex justify-center flex-wrap p-3 gap-3 bg-white rounded-xl ">
                  <button onClick={() => setcolor("red")} className="px-3 outline-none rounded-lg text-white " style={{backgroundColor: "red"}}>Red</button>
                  <button onClick={() => setcolor("green")} className="px-3 outline-none rounded-lg text-white " style={{backgroundColor: "Green"}}>Red</button>
                  <button onClick={() => setcolor("blue")} className="px-3 outline-none rounded-lg text-white " style={{backgroundColor: "Blue"}}>Red</button>
              </div>
            </div>
    </div>

  )
}

export default App
