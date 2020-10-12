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
    toastShow: (payload) => {
        return {
            type: types.TOAST_SHOW,
            payload,
        }
    },
    toastHide: () => {
        return {
            type: types.TOAST_HIDE,
        }
    }
}
