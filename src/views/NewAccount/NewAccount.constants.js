// if (!email || email.length < 1) return "noEmail";
// if (!password || password.length < 1) return "noPassword";
// if (!confirmPassword || confirmPassword.length < 1) return "noConfirmPassword";

// if (!validator.isEmail(email)) return setAlert("formatEmail");
// if (password.length < 8) return setAlert("shortPassword");
// if (confirmPassword.length < 8) return setAlert("shortConfirmPassword");

// if (password !== confirmPassword) return setAlert("mismatchPassword");
// setCreating(true);

export const ALERTS = {
  noEmail: {
    title: "Missing email",
    description: "Email address is required in order to create account",
  },
  noPasssword: {
    title: "Missing password",
    description: "Password is required in order to create account",
  },
  noConfirnPassword: {
    title: "Missing confirm password",
    description: "Confirm password is required in order to prevent typos",
  },
  formatEmail: {
    title: "Invalid email",
    description: "Email values does not match standard email formating. Correct any typos or mistakes.",
  },
  shortPassword: {
    title: "Password too short",
    description: "For security purposes password can not be less than 8 characters",
  },
  mismatchPassword: {
    title: "Confirm password does not match",
    description: "Make sure both the password value and the confirm password value are the same",
  },
  emailAlreadyUsed: {
    title: "Email already in use",
    description: "Can not create an account for a email that is already registered. If this is you then use sign in instead.", 
},
  creating: {
    title: "Creating account",
    nature: "resolving",
  },
  technical: {
    nature: 'error',
    tittle: 'Technical error',
    description: 'Something went wrong on our side. Please try again later',
  }
};
