import { ErrorMessage, useField } from 'formik';
import React from 'react';

const TextField = ({label, ...props}) => {

const [field, meta] = useField(props);
    return (
        <div className="bloc-input mb-2">
            <label htmlFor={field.name}> { label }</label>
            <input 
            {...field} {...props}
            type="text"
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            autoComplete="off" />
            <ErrorMessage component="div" className="error" name={field.name}></ErrorMessage>
        </div>
    );
};

export default TextField;