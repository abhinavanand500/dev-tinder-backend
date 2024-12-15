const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const app = express();

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res, next) => {
  //Logic for checking if request is authorized.
  // const token = req.headers.token;
  // const isAdminAuthorized = token === "abc";

  res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res, next) => {
  res.status(201).send("Deleted a user");
});

app.get("/admin/editUser", (req, res, next) => {
  res.send("User edited.");
});

app.get("/user/getAllData", userAuth, (req, res, next) => {
  res.send("User fetched successfully");
});

// app.get("/user", (req, res) => {
//   res.send({ firstName: "Abhinav", lastName: "Anand" });
// });

// app.post("/user", (req, res) => {
//   console.log("Save data to the database");
//   res.send({ message: "Data stored successfully" });
// });

// app.use(
//   "/test",
//   (req, res, next) => {
//     console.log("Hello from server");
//     var x = 1;
//     if (x === 1) {
//       res.send("Heyy");
//     } else {
//       next();
//     }
//   },
//   (req, res) => {
//     res.send("Hrrrrr");
//   }
// );

app.listen(3000, () => {
  console.log("Server running on 3000");
});
