import React from 'react';
import { connect } from 'react-redux';
import { User } from '../../../interfaces/User';
import { MapStateToProps } from '../../../store';

type Props = {
    show: boolean;
    onClose: () => void;
    user?: User;
};

const Profile: React.FC<Props> = (props: Props) => {
    return <div></div>;
};

const mapStateToProps = (state: MapStateToProps) => {
    return {
        user: state.user.user,
    };
};

export default connect(mapStateToProps)(Profile);
