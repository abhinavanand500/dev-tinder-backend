const adminAuth = (req, res, next) => {
  const token = req.headers.token;
  const isAdminAuthorized = token === "abc";
  if (!isAdminAuthorized) {
    res.status(401).send("Admin not authorized");
  } else {
    console.log("Admin is authorized");
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = req.headers.token;
  const isAdminAuthorized = token === "abcd";
  if (!isAdminAuthorized) {
    res.status(401).send("User not authorized");
  } else {
    console.log("User is authorized");
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
