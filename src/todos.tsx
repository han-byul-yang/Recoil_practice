import { useForm } from "react-hook-form";
import {useRecoilState} from 'recoil'
import { Catagories, todoAtom } from "./atoms";
import { TodoState } from "./atoms";

function Todos ({state, id, todo}:TodoState) {
    const [todos, setTodos] = useRecoilState(todoAtom)

    const onClick = (oldvalue:TodoState['state']) => {
        const index = todos.findIndex((todo)=> todo.id === id)
        const form = [...todos.slice(0,index), {id, todo, state: oldvalue},...todos.slice(index+1)] //atom의 값을 바꿔주려면 이렇게 전체를 바꿔줘야 함 
        setTodos(form)
      }

    return (<li>{todo}
          {state !== Catagories.TO_DO && <button onClick={()=>onClick(Catagories.TO_DO)}>TO_DO</button>}
          {state !== Catagories.Doing && <button onClick={()=>onClick(Catagories.Doing)}>Doing</button>}
          {state !== Catagories.Done && <button onClick={()=>onClick(Catagories.Done)}>Done</button>}
          </li>)
      ;
}

export default Todos