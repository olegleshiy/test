import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Form.module.css';
import { usePieChart } from '../Piechart/PiechartContext';
import { getRandomColor } from '../../utils';

const Form = () => {
    const { position, itemAdd, itemDelete, itemChange } = usePieChart();

    const handleChange = (e) => {
        itemChange({
            id: e.target.dataset.formId,
            field: {
                [e.target.name]: e.target.name === 'count' ? +e.target.value : e.target.value.trim(),
            }
        });
    };

    const handleDeletePosition = (e) => {
        itemDelete(e.target.dataset.formId);
    };

    const handleAddPosition = (e) => {
        e.preventDefault();

        const id = uuidv4();
        const newPosition = {
            id: id,
            name: '',
            count: '',
            color: getRandomColor()
        };
        itemAdd(newPosition);
    };

    return (
        <div className={ 'wrapper' }>
            <div className={ styles.wrapperForm }>
                <div>
                    <button
                        className={ styles.button }
                        onClick={ handleAddPosition }
                    >
                        Добавить позицию
                    </button>
                </div>
                { position.map(el =>
                    <form
                        key={ el.id }
                        id={ el.id }>
                        <div className={ styles.fieldGroup }>
                            <input
                                data-form-id={ el.id }
                                type='text'
                                name='name'
                                placeholder='Name'
                                className={ styles.field }
                                value={ el.name }
                                onChange={ handleChange }
                            />
                            <input
                                data-form-id={ el.id }
                                type='number'
                                name='count'
                                placeholder='Count'
                                min='0'
                                className={ styles.field }
                                value={ el.count }
                                onChange={ handleChange }
                            />
                            <button
                                className={ styles.remove }
                                data-form-id={ el.id }
                                onClick={ handleDeletePosition }
                            >&times;</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Form;
