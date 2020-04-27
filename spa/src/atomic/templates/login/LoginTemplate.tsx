import React from 'react';
import Button from '../../atoms/button/Button';
import FullInput from '../../modecules/input/FullInput';
import { FormOnSubmit, InputTextOnChange, TextAreaOnChange } from '../../../config/formTypes/FormEvents';

type Props = {
    onSubmit: (event: FormOnSubmit) => void;
    onInputChange: (event: InputTextOnChange | TextAreaOnChange) => void;
};

const LoginTemplate: React.FC<Props> = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <FullInput type="email" name="email" inputChanged={props.onInputChange} />
            <FullInput type="password" name="password" inputChanged={props.onInputChange} />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginTemplate;
