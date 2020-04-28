import React, { FormEvent } from 'react';
import Button from '../../atoms/button/Button';
import FullInput from '../../modecules/input/FullInput';
import { FormOnSubmit, InputTextOnChange, TextAreaOnChange } from '../../../config/formTypes/FormEvents';

type Props = {
    onSubmit: (event: FormOnSubmit) => void;
    onInputChange: (event: InputTextOnChange | TextAreaOnChange) => void;
};

const LoginTemplate: React.FC<Props> = props => {

    const test = (event: FormEvent<HTMLFormElement>) => {
        console.log('test')
    }

    return (
        <form onSubmit={test}>
            <FullInput type="email" name="email" inputChanged={props.onInputChange} />
            <FullInput type="password" name="password" inputChanged={props.onInputChange} />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginTemplate;
