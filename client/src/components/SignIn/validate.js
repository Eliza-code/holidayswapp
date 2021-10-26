export const validate = (values) => {
  let errors = {};

  // Username
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 4 || values.username.length > 20) {
    errors.username = "Must be between 4 and 20 characters";
  } else if (
    !/^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(
      values.username.trim()
    )
  ) {
    errors.username = "It must not contain spaces or hyphens";
  }

  // Password
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(values.password)
  ) {
    errors.password =
      "Must contain letters (Capital and lower case), numbers and between 8 and 16 characters";
  }

  return errors;
};
