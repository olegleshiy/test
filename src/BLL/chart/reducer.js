// Types
import { types } from './types';

export const reducer = (state, action) => {
    switch (action.type) {
        case types.ITEM_ADD:
            return {
                ...state,
                position: [...state.position, action.payload],
            }
        case types.ITEM_DELETE:
            return {
                ...state,
                position: state.position.filter((el, id) => el.id !== action.payload),
            }
        case types.ITEM_CHANGE:
            return {
                ...state,
                position: state.position.map(item => {
                    if(item.id === action.payload.id) {
                        const [[keys, value]] = Object.entries(action.payload.field);
                        return {
                            ...item,
                            [keys]: value,
                        }
                    } else {
                        return { ...item }
                    }
                })
            }
        case types.TOAST_SHOW:
            return {
                ...state,
                visible: true,
                text: action.payload,
            }
        case types.TOAST_HIDE:
            return {
                ...state,
                visible: false,
                text: '',
            }
        default:
            return state;
    }
}
