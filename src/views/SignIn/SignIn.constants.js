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
  formatEmail: {
    title: "Invalid email",
    description: "Email values does not match standard email formating. Correct any typos or mistakes.",
  },
  shortPassword: {
    title: "Password too short",
    description: "For security purposes password can not be less than 8 characters",
  },
  NoAccount: {
    title: "Invalid details",
    description: "Either the account does not exist or you entered an incorrect password. Please try again.", 
},
  checking: {
    title: "Checking details",
    nature: "resolving",
  },
};
