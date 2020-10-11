import { types } from './types';

export const actions = {
    itemAdd: (payload) => {
        return {
            type: types.ITEM_ADD,
            payload,
        }
    },
    itemDelete: (payload) => {
        return {
            type: types.ITEM_DELETE,
            payload,
        }
    },
    itemChange: (payload) => {
        return {
            type: types.ITEM_CHANGE,
            payload,
        }
    },
    formAdd: (payload) => {
        return {
            type: types.FORM_ADD,
            payload,
        }
    },
    formDelete: (payload) => {
        return {
            type: types.FORM_DELETE,
            payload,
        }
    },
    formChange: (payload) => {
        console.log('ACTION', payload);
        return {
            type: types.FORM_CHANGE,
            payload,
        }
    }
}
