import { useState } from 'react';

export function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        setValue(event.target.name === 'count' ? +event.target.value : event.target.value);
        console.log('value', typeof value);
    }

    const onBlur = event => {

    }

    return {
        value, onChange
    }
}
