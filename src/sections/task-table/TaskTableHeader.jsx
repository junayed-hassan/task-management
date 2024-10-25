import { TextInput } from "flowbite-react";
import { FiSearch } from "react-icons/fi";


function TaskTableHeader({onSearch}) {

  let changeHandler = (e) => {
    let vel = e.target.value;
    onSearch(vel);
  }

  return (
    <div className="flex justify-between items-center mt-5 mb-8">
        <h2 className="text-2xl font-bold dark:text-sky-200">Your Tasks</h2>
        <div className="max-w-lg">
            <TextInput onChange={changeHandler} id="email4" type="email" rightIcon={FiSearch} required />
        </div>
    </div>
  )
}

export default TaskTableHeader