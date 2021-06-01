var express = require("express");
var app = express();
var router = express.Router();
var bcrypt = require("bcrypt");
var ejs = require("ejs");
var jwt = require("jsonwebtoken");
var User = require("../models/user");
var nodemailer = require("nodemailer");
var { saveEvent } = require("../controller/db");
var Events = require("../models/event");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PWD,
  },
});
router.post("/sendMail", (req, res) => {
  ejs.renderFile(__dirname + "/index.ejs", function (err, data) {
    console.log(req.body);
    var mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: req.body.email,
      subject: "Join our events",
      html: data,
      attachments: [
        {
          filename: "image-1.png",
          path: `${__dirname}/images/image-1.png`,
          cid: "image-1", //same cid value as in the html img src
        },
        {
          filename: "image-2.png",
          path: `${__dirname}/images/image-2.png`,
          cid: "image-2", //same cid value as in the html img src
        },
        {
          filename: "image-3.png",
          path: `${__dirname}/images/image-3.png`,
          cid: "image-3", //same cid value as in the html img src
        },
        {
          filename: "image-4.png",
          path: `${__dirname}/images/image-4.png`,
          cid: "image-4", //same cid value as in the html img src
        },
        {
          filename: "image-5.png",
          path: `${__dirname}/images/image-5.png`,
          cid: "image-5", //same cid value as in the html img src
        },
        {
          filename: "image-6.png",
          path: `${__dirname}/images/image-6.png`,
          cid: "image-6", //same cid value as in the html img src
        },
        {
          filename: "image-7.png",
          path: `${__dirname}/images/image-7.png`,
          cid: "image-7", //same cid value as in the html img src
        },
      ],
    };
    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        console.log(error);
      } else {
        const existingEmail = await NotifyEmail.findOne({
          email: req.body.email,
        });
        const email = new NotifyEmail({
          email: req.body.email,
        });
        const newEmailNotify = await email.save();
        console.log("Email sent: " + info.response);
        res
          .status(200)
          .json({ msg: "Successfully Email Registered for notification" });
      }
    });
  });
});

// Register User
router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, username } = req.body;

    // validate

    if (!email || !password || !passwordCheck)
      return res
        .status(400)
        .json({ msg: "Not all fields have been entered.", status: false });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Password not matching", status: false });

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res.status(400).json({
        msg: "An account with this email already exists.",
        status: false,
      });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      username,
      status: true,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login User
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Enter all the fields" });

    const user = await User.findOne({ email: email });
    if (!user)
      return res.status(400).json({
        msg: "No account with this email has been registered.",
        status: false,
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: "Invalid password.", status: false });

    const token = jwt.sign({ id: user._id }, "secret");
    console.log("token", token);
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
      status: true,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/newevent", async (req, res, next) => {
  let {
    name,
    genre,
    description,
    organizer,
    cost,
    isOnlineEvent,
    imageLink,
    venue,
    city,
    link,
    likes,
    eventStartDate,
    eventEndDate,
  } = req.body;
  // console.log(req.body);
  // let status = true;
  let status = await saveEvent(
    name,
    genre,
    description,
    organizer,
    cost,
    isOnlineEvent,
    imageLink,
    venue,
    city,
    link,
    likes,
    eventStartDate,
    eventEndDate
  );
  res.json(status);
});

router.get("/fetchEvents", async (req, res) => {
  const events = await Events.find();
  res.json({ events: events });
});

module.exports = router;
