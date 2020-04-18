import React from 'react';
import Label from '../../atoms/input/Label';

const FullInput = (props) => {
    return (
        <div>
            <Label for={props.name}>
                Username
            </Label>
            <Input type={props.type} name={props.name} />
        </div>
    );
};

export default FullInput;
