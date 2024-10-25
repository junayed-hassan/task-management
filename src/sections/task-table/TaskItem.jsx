import React, { useState } from 'react'
import { Table } from "flowbite-react";
import { ModalPopup } from '../../components/ModalPopup';
import { DeleteModal } from '../../components/DeleteModal';

function TaskItem(props) {
  let [openModal, setOpenModal] = useState(false); 
  let [deleteModal,setDeleteModal] = useState(false);
  let {id, title,description,assignTo,priority} = props.data;

  let editTask = (task) => {
    props.onEdit(task);
  }
  
  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell>{props.index + 1}</Table.Cell>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>{description}</Table.Cell>
        <Table.Cell>{assignTo}</Table.Cell>
        <Table.Cell>{priority}</Table.Cell>
        <Table.Cell>
          <button onClick={()=>setOpenModal(true)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-3">Edit</button>
          <button onClick={()=> setDeleteModal(true)} className="font-medium text-rose-600 hover:underline dark:text-rose-500">Delete</button>
        </Table.Cell>
      </Table.Row>
      <ModalPopup taskToEdit={props.data} onEdit={editTask} onOpen={openModal} onClose={() =>setOpenModal(false)}/>
      <DeleteModal deleteTask={()=> props.onDelete(id)} onOpen={deleteModal}  onClose={() =>setDeleteModal(false)} />
    </>
   
  )
}

export default TaskItem