import React from 'react';
import Input from '../../atoms/input/Input';
import Label from '../../atoms/input/Label';
import { InputTextOnChange, TextAreaOnChange } from '../../../config/formTypes/FormEvents';
import { FormType } from '../../../config/formTypes/FormType';

type Props = {
    name: string;
    type: FormType;
    inputChanged: (event: InputTextOnChange | TextAreaOnChange) => void;
};

const FullInput: React.FC<Props> = props => {
    return (
        <div>
            <Label for={props.name}>{props.name}</Label>
            <Input id={props.name} inputType={props.type} name={props.name} changed={props.inputChanged} />
        </div>
    );
};

export default FullInput;
