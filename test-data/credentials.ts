import "dotenv/config";

export const validUser = {
  username: process.env.VALIDUSERNAME!,
  password: process.env.VALIDPASSWORD!,
};

export const lockedUser = {
  username: process.env.LOCKEDUSERNAME!,
  password: process.env.LOCKEDPASSWORD!,
};
