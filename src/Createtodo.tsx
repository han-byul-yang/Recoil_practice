import { useForm } from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from 'recoil'
import { catagoryAtom, todoAtom } from "./atoms";

function Createtodo (){
    const { register, watch, handleSubmit, formState, setError, setValue } = useForm<Data>();
    const setTodos = useSetRecoilState(todoAtom)
    const catagory = useRecoilValue(catagoryAtom)

    interface Data {
        form : string,
    }

    const onValid = ({form}: Data) => {
        setTodos((oldtodos) => [{todo: form, id: Date.now(), state: catagory}, ...oldtodos])
        setValue('form', '')
    };
    
    return <form onSubmit={handleSubmit(onValid)}>
            <input {...register('form', {required: "input is required"})} placeholder="Write a to do"></input>
            <button>Add</button>
          </form>
}

export default Createtodo
