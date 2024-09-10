import PlusIcon from "./assets/icons/Plus icon.svg"

function App() {

  return (
    <div className="">
      <h1 className="w-full text-center my-20 font-roboto font-bold text-5xl text-yellow-500">Todo App</h1>
      <form >
        <div className="flex flex-col justify-center items-center gap-4">
          <input type="text" placeholder="Enter your task" className="w-full max-w-[500px] px-4 py-2 rounded-lg text-lg placeholder:text-gray-500 text-black focus:outline-lime-600 focus:shadow-outline bg-zinc-100" />
          <button type="submit" className="flex items-center gap-1 px-4 py-2 rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:shadow-outline"><img src={PlusIcon} alt="Plus Icon"/>Add Task</button>
        </div>
      </form>
    </div>
  )
}

export default App
