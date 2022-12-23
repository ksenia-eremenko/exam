
import { throttle } from 'lodash';
import { combineReducers, legacy_createStore } from 'redux'
import { counterReducer } from './counter-reducer/counter-reducer'
import { loadState, saveState } from './localeStorage';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReducer
})
const persistedState = loadState();
// непосредственно создаём store
export const store = legacy_createStore(rootReducer, persistedState)
store.subscribe(throttle(() => {
    saveState({
        counterMax: store.getState().counter.maxValue,
        counterMin: store.getState().counter.minValue
    });
}, 1000));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store