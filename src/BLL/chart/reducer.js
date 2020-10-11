// Types
import { types } from './types';

export const reducer = (state, action) => {
    switch (action.type) {
        case types.ITEM_ADD:
            return {
                ...state,
                fruit: [...state.fruit, action.payload],
            }
        case types.ITEM_DELETE:
            return {
                ...state,
                fruit: state.fruit.filter((el, id) => el.id !== action.payload),
            }
        case types.ITEM_CHANGE:
            return {
                ...state
            }
        case types.FORM_ADD:
            return {
                ...state,
                forms: [...state.forms, action.payload],
            }
        case types.FORM_DELETE:
            return {
                ...state,
                forms: state.forms.filter((el, id) => el.id !== action.payload),
            }
        case types.FORM_CHANGE:
            console.log('->>BEFORE', action.payload);
            return {
                ...state,
                forms: state.forms.map(form => {
                    if(form.id === action.payload.id) {
                        console.log('->>', action.payload);
                        const keys = Object.keys(action.payload.field)[0];
                        return {
                            ...form,
                            [keys]: action.payload.field,
                        }
                    } else {
                        return { ...form }
                    }
                })
            }
        default:
            return state;
    }
}
