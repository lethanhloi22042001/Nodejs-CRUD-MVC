// const path = require("path");

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const errorController = require("./controllers/error");
// const User = require("./models/user");

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findById("")
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => console.log(err));
// });

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);

// mongoose
//   .connect(
//     // 'mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/shop?retryWrites=true'
//     "mongodb+srv://thanhloi:220401@cluster0.socl7.mongodb.net/shop?retryWrites=true&w=majority"
//   )
//   .then((result) => {
//     User.findOne().then((user) => {
//       if (!user) {
//         const user = new User({
//           name: "LeThanhLoi",
//           email: "a@gmail.com",
//           cart: {
//             items: [],
//           },
//         });
//         user.save();
//       }
//     });
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const errorController = require("./controllers/error");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  // User.findById("641c1afcf03af09acec6f593")
  User.findById("641abc2fcc03747ea40c699d")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://thanhloi:220401@cluster0.socl7.mongodb.net/shop?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Max",
          email: "max@test.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
