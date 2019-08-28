export const parseError = err => {
  if (err.isJoi) return err.details[0];
  return JSON.stringify(err, Object.getOwnPropertyNames(err));
};

export const sessionizeUser = user => {
  return {
    userId: user.id,
    username: user.username,
    useremail: user.email,
    usercompany: user.company,
    userphone: user.phone,
    userObj: user.consultantInfo
  };
};
