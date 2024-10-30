import { Button, Modal, Select, Label, TextInput, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

   const schema = yup.object({
    title: yup.string().required().min(5),
    description: yup.string().required().min(5),
  }).required();
 
export function ModalPopup({ onOpen, onClose,onCreate,taskToEdit,onEdit}) {
 
  const { register, handleSubmit, formState: { errors },reset } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    if (taskToEdit) {
      onEdit(data);
    }else{
      onCreate(data); 
    }
    reset();
    onClose();
  } 
  let formData = taskToEdit || {
    id: crypto.randomUUID(),
    title: null,
    description:null,
    assignTo:null,
    priority:null,
  }




  return (
    <>
      <Modal show={onOpen} onClose={() => onClose()}>
        <Modal.Header>{taskToEdit?'Edit Task':'Add Task'}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="flex flex-wrap" onSubmit={handleSubmit(onSubmit)} >
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Title" />
                </div>
                <input defaultValue={formData.id} {...register('id')} type="hidden" />
                <TextInput defaultValue={formData.title} {...register("title")} id="title" type="text"/>
                <p className="text-xs text-red-700">{errors.title?.message}</p>
              </div>
              <div className="w-full mt-2">
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <Textarea defaultValue={formData.description}  {...register("description")} id="description" rows={4} />
                <p className="text-xs text-red-700">{errors.description?.message}</p>
              </div>
              <div className="w-2/3 mt-2">
                <div className="pr-2">
                  <div className="mb-2 block">
                    <Label htmlFor="assign" value="Assign to" />
                  </div>
                  <Select defaultValue={formData.assignTo} id="assign" {...register("assignTo")}>
                    <option value="Person One">Person One</option>
                    <option value="Person Two">Person Two</option>
                    <option value="Person Three">Person Three</option>
                    <option value="Person Four">Person Four</option>
                    <option value="Person Five">Person Five</option>
                  </Select>
                </div>
              </div>
              <div className="w-1/3 mt-2">
                <div className="mb-2 block">
                  <Label htmlFor="assign" value="Priority" />
                </div>
                <Select defaultValue={formData.priority} id="priority" {...register("priority")}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Select>
              </div>
              <Button type="submit" className="mt-4">{taskToEdit?'Update Task':'Add Task'}</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
