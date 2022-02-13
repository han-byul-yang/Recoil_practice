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

/* export const hourSelector = selector<number>({
    key: "hours",
    get: ({ get }) => {
      const minutes = get(minuteState);
      return minutes / 60;
    },
    set: ({ set }, newValue) => {
      const minutes = Number(newValue) * 60;
      set(minuteState, minutes);
    }
 }) */// 다음과 같이 atom의 값을 바꿔주는 set함수를 쓸 수 있음
 //이 때 useRecoilState(hourSelector)는 배열에 두가지 인자를 가지는데 첫번째는 get의 return 값이고, 두번째는 데이터를 바꿀 수 있는 set함수이다. 