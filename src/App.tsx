import React, {useState} from 'react';
import './App.css';
import Task1 from "./components/Task1/Task1";
import Task2 from "./components/Task2/Task2";
import Task3 from "./components/Task3/Task3";
import Task4 from "./components/Task4/Task4";

export type toDoType = {
    id: number
    n: string
    p: string
}

function App() {
    const [toDoArr, setToDo] = useState([
        {id: 1, n: "Work", p: "hight"},
        {id: 2, n: "Poker", p: "low"},
        {id: 3, n: "Games", p: "middle"},
        {id: 4, n: "React", p: "hight"},
        {id: 5, n: "Redux", p: "middle"}
    ]);

    function sortToDo(arr: Array<toDoType>) {

        let newArr = arr.map(item => {
            if (item.p === "hight") {
                item.p = 'A';
                return item
            }
            if (item.p === "middle") {
                item.p = 'B';
                return item
            }
            if (item.p === "low") {
                item.p = 'C';
                return item
            }
            return item
        });
        let toDoArrSort = newArr.sort((a: any, b: any) => a.p > b.p ? 1 : -1).map((item: toDoType) => {
            if (item.p === 'A') {
                item.p = "hight";
                return item
            }
            if (item.p === 'B') {
                item.p = "middle";
                return item
            }
            if (item.p === 'C') {
                item.p = "low";
                return item
            }
            return item
        });
        setToDo(toDoArrSort)
    }

    function removeToDo(id: number) {
        let filterTasks = toDoArr.filter(item => item.id !== id);
        setToDo(filterTasks);
    }

    return (
        <div className='app-wrapper'>
            <Task1 name='Artem' text='npm start нажимал?' time='20:00'/>
            <Task2 toDo={toDoArr} sortToDo={sortToDo} removeToDo={removeToDo}/>
            <Task3/>
            <Task4/>
        </div>
    );
}

export default App;
