import React from 'react';

const LoginTemplate = (props) => {



    return (
        <form onSubmit={props.onSubmitHandler}>
            <FullInput type="text" name="username" />
        </form>
    );
};

export default LoginTemplate;
