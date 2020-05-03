import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../../../atomic/atoms/Button/Button';

type Props = {
    onSubmit: () => void;
    onCancel: () => void;
    show: boolean;
};

const FormModal: React.FC<Props> = (props) => {
    return (
        <Modal show={props.show} onHide={props.onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onCancel}>
                    Close
                </Button>
                <Button onClick={props.onSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FormModal;
