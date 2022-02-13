import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );

interface Data {
    form : 'string',
}

const { register, watch, handleSubmit, formState, setError, setValue } = useForm<Data>();
  const onValid = (data: Data) => {
      if (data.form.length > 10){
    setError('form', {message: 'too long'})};
    /* setValue('form', ""); */
  };
  console.log(formState.errors);

return (
        <div>
          <form onSubmit={handleSubmit(onValid)}>
            <input {...register('form', {required: "input is required", 
            minLength: {value: 5, message: "your message is too short"}, 
            pattern: {message: "you should input naver address" , 
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,}, validate: (value) => value.includes('nico') ? "no nico is allowed" : true,}
            )} placeholder="Write a to do" />
            <button>Add</button>
          </form>
          <div>{formState.errors?.form?.message}</div>
        </div>
      );
}

export default ToDoList;