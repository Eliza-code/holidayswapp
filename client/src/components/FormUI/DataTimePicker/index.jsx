import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

const DateTimePicker = ({
  name,
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  
  const date = new Date;
  var today = date.getDate() + '-' + ( date.getMonth() + 1 ) + '-' + date.getFullYear();

  const configDateTimePicker = {
    ...field,
    ...otherProps,    
    type: 'date',
    variant: 'outlined',
    fullWidth: true,
    minDateTime:new Date(),    
    InputLabelProps: {
      shrink: true
    }
  };

  if(meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return (
    <TextField
      {...configDateTimePicker}
    />
  );
};

export default DateTimePicker;