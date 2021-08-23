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
  technical: {
    nature: 'error',
    tittle: 'Technical error',
    description: 'Something went wrong on our side. Please try again later',
  },
  notVerified: {
    nature: 'error',
    tittle: 'Email not verified',
    description: 'An account for this email has been created, but the email has not been verified yet. Please check your inbox and span folders.',
  }
};
