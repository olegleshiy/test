import React, { useContext, useReducer } from 'react';
import { reducer } from '../../BLL/chart/reducer';
import { actions } from '../../BLL/chart/actions';

const PieChartContext = React.createContext();

export const usePieChart = () => {
    return useContext(PieChartContext);
};

const initialStateForm = {
    position: [
        {
            id: 'sdg1',
            name: 'Яблоки',
            color: 'red',
            count: 170
        }, {
            id: 'sdg2',
            name: 'Манго',
            color: 'indianred',
            count: 28
        }, {
            id: 'sdg3',
            name: 'Бананы',
            color: 'rebeccapurple',
            count: 100
        }, {
            id: 'sdg4',
            name: 'Киви',
            color: 'green',
            count: 135
        }, {
            id: 'sdg5',
            name: 'Ананасы',
            color: 'blue',
            count: 90
        }
    ],
    visible: false,
    text: '',
};

export const PieChartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStateForm);

    const itemAdd = (obj) => dispatch(actions.itemAdd(obj));
    const itemDelete = (id) => dispatch(actions.itemDelete(id));
    const itemChange = (obj) => dispatch(actions.itemChange(obj));

    const toastShow = (text) => dispatch(actions.toastShow(text));
    const toastHide = () => dispatch(actions.toastHide());


    return (
        <PieChartContext.Provider value={ {
            itemAdd,
            itemDelete,
            itemChange,
            position: state.position,

            toastShow,
            toastHide,
            visible: state.visible,
            text: state.text
        } }>
            { children }
        </PieChartContext.Provider>
    );
};
