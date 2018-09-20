import C from '../constants';

export function addItem(item) {

    return {
        type: C.ADD_ITEM,
        payload: item
    }

}

export function removeItem(id) {

    return {
        type: C.REMOVE_ITEM,
        payload: id
    }

}

export function toggleModal() {

    return {
        type: C.TOGGLE_MODAL,
    }

}

export function changeName(name) {

    return {
        type: C.CHANGE_NAME,
        payload: name
    }

}

export function clearName() {

    return {
        type: C.CLEAR_NAME,
    }

}