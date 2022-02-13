import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, selector, useRecoilValue,useRecoilState } from "recoil";
import { NodeWithTypeArguments } from "typescript";
import { todoAtom, catagoryAtom, Catagories } from "../atoms";
import Createtodo from "../Createtodo";
import Todos from "../todos";
import {TodoState, todoSelector} from '../atoms'

function ToDoList() {
const todo = useRecoilValue(todoSelector)
const [catagory, setCatagory] = useRecoilState(catagoryAtom)

const onInput = (e : React.FormEvent<HTMLSelectElement>) => {
  setCatagory(e.currentTarget.value as any)
}

return (
        <div>
          <select onInput={onInput}>
            <option value={Catagories.TO_DO}>TO_DO</option>
            <option value={Catagories.Doing}>Doing</option>
            <option value={Catagories.Done}>Done</option>
          </select>
          <Createtodo />
          <h1>{catagory}</h1>
          <ul>{todo?.map((tdo:any) => <Todos key={tdo.id} {...tdo}/>)}</ul>
        </div>
      );
}

export default ToDoList;