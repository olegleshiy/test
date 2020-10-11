import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Form.module.css';
import { usePieChart } from '../Piechart/PiechartContext';
import { getRandomColor } from '../../utils';
import { reducer } from '../../BLL/chart/reducer';
import { actions } from '../../BLL/chart/actions';

//import { useInput } from '../../hooks';

export const Form = () => {
    const initialStateForm = {
        forms: [],
        fruit: [
            {
                name: 'Value 1',
                color: 'red',
                count: 180
            }, {
                name: 'Value 2',
                color: 'rebeccapurple',
                count: 100
            }, {
                name: 'Value 3',
                color: 'green',
                count: 135
            }, {
                name: 'Value 4',
                color: 'pink',
                count: 230
            }, {
                name: 'Value 5',
                color: 'blue',
                count: 90
            }, {
                name: 'Value 6',
                color: 'yellow',
                count: 50
            }
        ]
    };

    console.log('RENDER');
    //const { forms, formAdd, formDelete, formChange, itemAdd, itemDelete } = usePieChart();
    const { forms } = usePieChart();

    const [state, dispatch] = useReducer(reducer, initialStateForm);

    const formAdd = (form) => dispatch(actions.formAdd(form));
    const formDelete = (id) => dispatch(actions.formDelete(id));
    const formChange = (obj) => dispatch(actions.formChange(obj));

    const itemAdd = (item) => dispatch(actions.itemAdd(item));
    const itemDelete = (id) => dispatch(actions.itemDelete(id));
    const itemChange = (id) => dispatch(actions.itemDelete(id));

    //const name = useInput('');
    //const count = useInput(0);

    const handleChange = (e) => {
        formChange({
            id: e.target.dataset.formId,
            field: {
                [e.target.name]: e.target.value,
            }
        })
        //console.log('ee', e.target.value, e.target.dataset.formId);
    }
    //
    // const handleBlur = (e) => {
    //     const value = e.target.value;
    //     setFruit([{
    //         [e.target.name]: e.target.name === "count" ? +value : value,
    //         "color": getRandomColor(),
    //     }].concat(fruit));
    //
    //     console.log("fruit", fruit);
    //     console.log('BLUR', e.target.value);
    //     console.log('parent', this);
    // }
    const handleDeleteForm = (e) => {
        formDelete(e.target.dataset.formId);
        itemDelete(e.target.dataset.formId);
    }

    const handleAddPosition = (e) => {
        e.preventDefault();

        const id = uuidv4();
        const formItem = (
            <form className={ styles.form } key={ id } id={ id }>
                <div className={ styles.fieldGroup } >
                    <input
                        data-form-id={id}
                        type='text'
                        name='name'
                        placeholder='Name'
                        className={ styles.field }
                        //value={name.value}
                        onChange={ handleChange }
                    />
                    <input
                        data-form-id={id}
                        type='number'
                        name='count'
                        placeholder='Count'
                        className={ styles.field }
                        //value={count.value}
                        onChange={ handleChange }
                    />
                    <button
                        className={styles.remove}
                        data-form-id={id}
                        onClick={ handleDeleteForm }
                    >&times;</button>
                </div>
            </form>
        );

        const newPosition = {
            id: id,
            name: "",
            count: 0,
            color: getRandomColor(),
        };

        formAdd({form: formItem, id: id});
        itemAdd(newPosition);
    };

    return (
        <div className={ 'wrapper' }>
            <div className={ styles.wrapperForm }>
                <div>
                    <button className={ styles.button } onClick={ handleAddPosition }>Добавить позицию</button>
                </div>
                { forms.map(el => el.form) }
            </div>
        </div>
    );
};
