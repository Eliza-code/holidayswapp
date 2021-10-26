export const profileForm = (values) => {
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

  // Profile picture
  if (
    values.profilePicture !== "" &&
    !/^(ftp|http|https):\/\/[^ "]+$/.test(values.profilePicture)
  ) {
    errors.profilePicture = "Must be an url";
  }

  // Name
  if (!values.name) {
    errors.name = "Required";
  }

  // Lastname
  if (!values.lastName) {
    errors.lastName = "Required";
  }

  // Email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Enter a valid email";
  }

  // Phone number
  if (values.phoneNumber) {
    if (!/^([0-9])*$/.test(values.phoneNumber)) {
      errors.phoneNumber = "Enter a valid phone number";
    }
  }

  return errors;
};
