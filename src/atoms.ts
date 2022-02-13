import { atom, selector } from "recoil";

/* type catagories = 'TO_DO' | 'Doing' | 'Done' //이렇게 타입으로 지정해줄 수 있음 */

export enum Catagories { //실수를 방지하기 위해 enum을 써줌
    'TO_DO' = 'TO_DO', //이렇게 값을 지정해주지 않으면 0,1,2 값으로 할당됨
    'Doing' = 'Doing',
    'Done' = 'Done',
} 

export interface TodoState {
    'todo' : string,
    'id' : number,
    'state' : Catagories, //제한적 선택
}

export const todoAtom = atom<TodoState[]>({
    key : 'todo',
    default : []
})

export const catagoryAtom = atom<Catagories> ({
    key: 'catagory',
    default: Catagories.TO_DO,
})


export const todoSelector = selector({ 
  key: 'todoselect',
  get: ({get}) => {
    const todoval = get(todoAtom)
    const catagor = get(catagoryAtom) //catagoryAtom 의 값이 변할 때마다 selector 가 시행됨
    return todoval.filter((tdo)=> tdo.state === catagor)}
})