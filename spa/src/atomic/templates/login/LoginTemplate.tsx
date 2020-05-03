import React from 'react';
import Button from '../../atoms/Button/Button';
import FullInput from '../../modecules/input/FullInput';
import { FormOnSubmit, InputTextOnChange, TextAreaOnChange } from '../../../interfaces/formTypes/FormEvents';
import Loader from '../../atoms/Loader/Loader';
import styled from 'styled-components';

type Props = {
    isLoading: boolean;
    onSubmit: (event: FormOnSubmit) => void;
    onInputChange: (event: InputTextOnChange | TextAreaOnChange) => void;
};

type ButtonText = {
    isLoading: boolean;
};

const ButtonText = styled.span<ButtonText>`
    ${props => (props.isLoading ? 'margin-right: 10px;' : null)}
`;

const LoginTemplate: React.FC<Props> = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <FullInput type="email" name="email" inputChanged={props.onInputChange} />
            <FullInput type="password" name="password" inputChanged={props.onInputChange} />
            <Button type="submit">
                <ButtonText isLoading={props.isLoading}>Login</ButtonText>
                {props.isLoading ? <Loader small /> : null}
            </Button>
        </form>
    );
};

export default LoginTemplate;
