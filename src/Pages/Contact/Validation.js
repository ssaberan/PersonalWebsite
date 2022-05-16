export const validate = (values) => {
    const errors = {};
    if (!values.name.trim()) {
        errors.name = "A name is required to submit";
    }
    if (!values.subject.trim()) {
        errors.subject = "A subject is required to submit";
    }
    if (!values.message.trim()) {
        errors.message = "A message is required to submit";
    }
    return errors;
};

export const isValid = (values) => {
    return !!(
        values.name.trim() &&
        values.subject.trim() &&
        values.message.trim()
    );
};
