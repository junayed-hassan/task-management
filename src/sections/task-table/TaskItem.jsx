import React, { useState } from 'react'
import { Table } from "flowbite-react";
import { ModalPopup } from '../../components/ModalPopup';

function TaskItem(props) {
  let [openModal, setOpenModal] = useState(false); 
  let {title,description,assignTo,priority} = props.data;

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
          <button className="font-medium text-rose-600 hover:underline dark:text-rose-500">Delete</button>
        </Table.Cell>
      </Table.Row>
      <ModalPopup taskToEdit={props.data} onEdit={editTask} onOpen={openModal} onClose={() =>setOpenModal(false)}/>
    </>
   
  )
}

export default TaskItem