
import Container from '../../components/Container'
import { Button} from "flowbite-react";
import { Table } from "flowbite-react";
import TaskItem from './TaskItem';
import TaskTableHeader from './TaskTableHeader';
import { useState } from 'react';
import { ModalPopup } from '../../components/ModalPopup';
import { createPortal } from 'react-dom';
import { DeleteModal } from '../../components/DeleteModal';


function NoData () {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={6} className="text-center">No data Found</Table.Cell>
        </Table.Row>
    )
}


function TaskTable() {
    let [openModal, setOpenModal] = useState(false); 
    let [deleteModal,setDeleteModal] = useState(false);
    let [tasks,setTasks] = useState([]);
    
    let createTask = (item) => {
        let upDateTasks = [
            
            {
                ...item,
            },
            ...tasks
        ];
        setTasks(upDateTasks)
    }

    let editTask = (task)=>{
        setTasks(tasks.map(item => {
            if (task.id === item.id) {
                return task;
            } else {
                return item;
            }
        }));
    }

    let deleteHandler = (id) => {
        setTasks(tasks.filter(item => {
            return item.id != id;
        }))
        
    }

  return (
    <Container className="mt-8">
        <div className="flex justify-end w-full">
            <Button onClick={() => setOpenModal(true)} className='mr-2' color="success">Add Task</Button>
            <Button onClick={()=>setDeleteModal(true)}  color="failure">Clear Tasks</Button>
        </div>
        <div className="p-2 rounded-sm border my-6">
            <TaskTableHeader />

            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>#</Table.HeadCell>
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Description</Table.HeadCell>
                        <Table.HeadCell>Assigned To</Table.HeadCell>
                        <Table.HeadCell>Priority</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {tasks.length === 0 ?  <NoData /> : tasks.map((item, index)=>{ return <TaskItem data={item} onDelete={deleteHandler} onEdit={editTask} index={index} key={item.id}/>})}
                        
                    </Table.Body>
                </Table>
            </div>
        </div>
    {createPortal(<ModalPopup onCreate={createTask} onOpen={openModal} onClose={() =>setOpenModal(false)}/>,document.getElementById('modal'))} 
        <DeleteModal deleteTask={()=>setTasks([])} onOpen={tasks.length == 0 ?'': deleteModal}  onClose={() =>setDeleteModal(false)} />
    </Container>
  )
}

export default TaskTable;











