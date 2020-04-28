const UpdateObject = (oldObject: {}, updatedProperties: {}) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};

export default UpdateObject;
