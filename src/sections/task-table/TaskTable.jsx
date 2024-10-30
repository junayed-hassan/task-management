import Container from '../../components/Container';
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import TaskItem from './TaskItem';
import TaskTableHeader from './TaskTableHeader';
import { useReducer, useState } from 'react';
import { ModalPopup } from '../../components/ModalPopup';
import { createPortal } from 'react-dom';
import { DeleteModal } from '../../components/DeleteModal';
import tasksReducer from '../../reducer/ReducerTask';

function NoData() {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={6} className="text-center">No data found</Table.Cell>
        </Table.Row>
    );
}

function TaskTable() {
    const [openModal, setOpenModal] = useState(false); 
    const [deleteModal, setDeleteModal] = useState(false);
    const [tasks, dispatch] = useReducer(tasksReducer, []);
    const [searchText, setSearchText] = useState("");

    const createTask = (item) => {
        setDeleteModal(false);
        dispatch({
            type: 'added',
            item
        });
    };

    const editTask = (task) => {
        dispatch({
            type: 'edited',
            item: task
        });
    };

    const deleteHandler = (id) => {
        dispatch({
            type: 'deleted',
            id
        });
    };

    const searchHandler = (text) => {
        setSearchText(text);
    };

    const filteredTasks = tasks.filter(item => {
        return item.title.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <Container className="mt-8">
            <div className="flex justify-end w-full">
                <Button onClick={() => setOpenModal(true)} className="mr-2" color="success">Add Task</Button>
                <Button onClick={() => setDeleteModal(true)} color="failure">Clear Tasks</Button>
            </div>
            <div className="p-2 rounded-sm border my-6">
                <TaskTableHeader onSearch={searchHandler} />

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
                            {tasks.length === 0 ? (
                                <NoData />
                            ) : (
                                filteredTasks.map((item, index) => (
                                    <TaskItem
                                        data={item}
                                        onDelete={deleteHandler}
                                        onEdit={editTask}
                                        index={index}
                                        key={item.id}
                                    />
                                ))
                            )}
                        </Table.Body>
                    </Table>
                </div>
            </div>
            {createPortal(
                <ModalPopup onCreate={createTask} onOpen={openModal} onClose={() => setOpenModal(false)} />,
                document.getElementById('modal')
            )}
            {tasks.length > 0 && (
                <DeleteModal deleteTask={() => dispatch({ type: 'clear' })} onOpen={deleteModal} onClose={() => setDeleteModal(false)} />
            )}
        </Container>
    );
}

export default TaskTable;
