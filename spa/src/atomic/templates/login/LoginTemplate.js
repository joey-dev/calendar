import React from 'react';
import Button from '../../atoms/button/Button';
import FullInput from '../../modecules/input/FullInput';


const LoginTemplate = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <FullInput type="email" name="email" inputChanged={props.onInputChange} />
            <FullInput type="password" name="password" inputChanged={props.onInputChange} />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginTemplate;
