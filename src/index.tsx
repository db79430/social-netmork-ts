
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AppPropsType} from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";


import {Provider} from "react-redux";


//  const RenderEntireTree = () => {
//
//
//      ReactDOM.render(
//         <React.StrictMode>
//             <Provider store={store}>
//             <App store={store}/>
//             {/*messagesPost={messagesPost} dialogs={dialogs} messagesData={messagesData}*/}
//             {/*dispatch={store.dispatch}*/}
//             </Provider>
//
//
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
//
// }
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
            {/*messagesPost={messagesPost} dialogs={dialogs} messagesData={messagesData}*/}
            {/*dispatch={store.dispatch}*/}
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

/*RenderTree();*/
/*
store.Subscribe ( () => {
        RenderEntireTree
}
    );
*/






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
type MyPostsType = {
    message: string;
    id: number;


}

type messageType = {
    name: string;
    id: number;
    message: string;



}
let dialogs = [
    {id: 1, name: 'Dasha'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Svetlana'},
    {id: 4, name: 'Dmitriy'},
    {id: 5, name: 'Petr'}
]as Array<DialogType>
export type DialogType = {
    name: string;
    id: number;
}

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How are you'},
] as Array<MessageType>





let messagesPost =  [
    {"id":1,  "message": 'Hi', },
    {"id":2, "message": 'How are you?'} ] as Array<MyPostsType>

export type MessageType = {
    message: string;
    id: number;
}
*/
