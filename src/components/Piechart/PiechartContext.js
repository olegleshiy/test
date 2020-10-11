import React, { useCallback, useContext, useReducer } from 'react';
//import { reducer } from '../../BLL/chart/reducer';
//import { actions } from '../../BLL/chart/actions';

const PieChartContext = React.createContext();

export const usePieChart = () => {
    return useContext(PieChartContext);
};

// const initialStateForm = {
//     forms: [],
//     fruit: [
//         {
//             name: 'Value 1',
//             color: 'red',
//             count: 180
//         }, {
//             name: 'Value 2',
//             color: 'rebeccapurple',
//             count: 100
//         }, {
//             name: 'Value 3',
//             color: 'green',
//             count: 135
//         }, {
//             name: 'Value 4',
//             color: 'pink',
//             count: 230
//         }, {
//             name: 'Value 5',
//             color: 'blue',
//             count: 90
//         }, {
//             name: 'Value 6',
//             color: 'yellow',
//             count: 50
//         }
//     ]
// };

export const PieChartProvider = ({ children }) => {
    //const memoizedReducer = useCallback(reducer, [initialStateForm]);
    //const [state, dispatch] = useReducer(memoizedReducer, initialStateForm);
    // const [state, dispatch] = useReducer(reducer, initialStateForm);
    //
    // const formAdd = (form) => dispatch(actions.formAdd(form));
    // const formDelete = (id) => dispatch(actions.formDelete(id));
    // const formChange = (obj) => dispatch(actions.formChange(obj));
    //
    // const itemAdd = (item) => dispatch(actions.itemAdd(item));
    // const itemDelete = (id) => dispatch(actions.itemDelete(id));
    // const itemChange = (id) => dispatch(actions.itemDelete(id));


    return (
        <PieChartContext.Provider value={ {
            //itemAdd,
            //itemDelete,
            //itemChange,
            fruit: state.fruit,
            forms: state.forms,
            //formAdd,
            //formDelete,
            //formChange
        } }>
            { children }
        </PieChartContext.Provider>
    );
};
