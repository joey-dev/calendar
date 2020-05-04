import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Backdrop from '../../../atomic/atoms/Backdrop/Backdrop';
import { MODAL_TIER1 } from '../../../config/ZIndex/ZIndex';
import CloseButton from '../../../atomic/atoms/buttons/CloseButton/CloseButton';
import FullInput from '../../../atomic/modecules/input/FullInput';
import { InputTextOnChange, TextAreaOnChange } from '../../../interfaces/formTypes/FormEvents';
import ProfilePicture from '../../../atomic/atoms/profile/ProfilePicture';
import { MapStateToProps } from '../../../store';
import { connect } from 'react-redux';
import { User } from '../../../interfaces/User';

type ModalProps = {
    show: boolean;
};

const Modal = styled.div<ModalProps>`
    position: fixed;
    display: ${props => (props.show ? 'block' : 'none')};
    width: 60vw;
    height: 60vh;
    top: 20vh;
    left: 20vw;
    background-color: #eeeeee;
    z-index: ${MODAL_TIER1};
    border-radius: 5%;
`;

const Content = styled.div`
    display: grid;
    grid-template: "username profilePicture" "firstName profilePicture" "lastName profilePicture" "email profilePicture" "password repeatPassword";
    grid-gap: 30px;
    padding: 20px;
`;

type formFieldValues = string;

type Props = {
    onSubmit: () => void;
    onCancel: () => void;
    show: boolean;
    user?: User;
};

const FormModal: React.FC<Props> = props => {
    const [username, setUsername] = useState<formFieldValues>('');
    const [firstName, setFirstName] = useState<formFieldValues>('');
    const [lastName, setLastName] = useState<formFieldValues>('');
    const [email, setEmail] = useState<formFieldValues>('');
    const [password, setPassword] = useState<formFieldValues>('');
    const [repeatPassword, setRepeatPassword] = useState<formFieldValues>('');

    const {user} = props;

    useEffect(() => {
        setUsername(user?.username || '');
        setFirstName(user?.firstName || '');
        setLastName(user?.lastName || '');
        setEmail(user?.email || '');
    }, [user])

    const onChangeInputValuesHandler = (name: string, event: InputTextOnChange | TextAreaOnChange) => {
        const value = event.target.value;

        switch(name) {
            case 'username':
                setUsername(value);
                break;
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'repeatPassword':
                setRepeatPassword(value);
                break;
            default:
                throw 'The input ' + name + ' is not implemented jet!';
        }
    }

    return (
        <React.Fragment>
            <Backdrop show={props.show} onClose={props.onCancel} />

            <Modal show={props.show}>
                <CloseButton clicked={props.onCancel} />
                <Content>
                    <FullInput name="Username" type='text' grid="username" inputChanged={event => onChangeInputValuesHandler('username', event)} value={username} />
                    <FullInput name="FirstName" type='text' grid="firstName" inputChanged={event => onChangeInputValuesHandler('firstName', event)} value={firstName} />
                    <FullInput name="LastName" type='text' grid="lastName" inputChanged={event => onChangeInputValuesHandler('lastName', event)} value={lastName} />
                    <FullInput name="Email" type='email' grid="email" inputChanged={event => onChangeInputValuesHandler('email', event)} value={email} />
                    <FullInput name="Password" type='password' grid="password" inputChanged={event => onChangeInputValuesHandler('password', event)} value={password}  placeholder="****" />
                    <FullInput name="RepeatPassword" type='password' grid="repeatPassword" inputChanged={event => onChangeInputValuesHandler('repeatPassword', event)} value={repeatPassword} placeholder="****" />
                    <ProfilePicture grid="profilePicture" width="60%" />
                </Content>
            </Modal>
        </React.Fragment>
    );
};

const mapStateToProps = (state: MapStateToProps) => {
    return {
        user: state.user.user,
    }
}

export default connect(mapStateToProps)(FormModal);
