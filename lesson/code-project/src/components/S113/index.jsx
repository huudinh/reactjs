import {useDispatch} from "react-redux";
import {increment} from "./store.js";

export default function Counter() {
    const dispatch = useDispatch();

    return <button 
        onClick={
            () => dispatch(increment())
        }>Add 1</button>;
}

