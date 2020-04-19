import React from 'react';
import Input from '../../atoms/input/Input';
import Label from '../../atoms/input/Label';

const FullInput = (props) => {
    return (
        <div>
            <Label for={props.name}>
                {props.name}
            </Label>
            <Input type={props.type} name={props.name} changed={props.inputChanged} />
        </div>
    );
};

export default FullInput;
