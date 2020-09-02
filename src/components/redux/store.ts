import spinnerReduser from "./spinner-reduser";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    spinner: spinnerReduser
});
// непосредственно создаём store
export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;