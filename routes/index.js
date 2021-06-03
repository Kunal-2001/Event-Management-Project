var express = require("express");
var app = express();
var router = express.Router();
var bcrypt = require("bcrypt");
var ejs = require("ejs");
var jwt = require("jsonwebtoken");
var User = require("../models/user");
var nodemailer = require("nodemailer");
var { saveEvent } = require("../controller/db");
var Event = require("../models/event");
var multer = require("multer");
var { storage } = require("../cloudinary");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PWD,
  },
});

// Set Storage Engine
const upload = multer({ storage });

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
      return res.json({
        msg: "Not all fields have been entered.",
        status: false,
      });
    if (password !== passwordCheck)
      return res.json({ msg: "Password not matching", status: false });

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res.json({
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
      return res.json({ msg: "Enter all the fields", status: false });

    const user = await User.findOne({ email: email });
    if (!user)
      return res.json({
        msg: "No account with this email has been registered.",
        status: false,
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ msg: "Invalid password.", status: false });

    jwt.sign({ id: user._id }, "secret", { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      return res.status(200).json({
        token,
        user: { id: user._id, username: user.username },
        status: true,
      });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post(
  "/thumbnailUpload",
  upload.single("thumbnailImage"),
  async (req, res, next) => {
    // let {
    // eventName,
    // genre,
    // eventDescription,
    // organizer,
    // cost,
    // isOnline,
    // venue,
    // city,
    // websiteLink,
    // startDate,
    // endDate,
    // } = req.body.eventData;
    console.log(req.file);
    let thumbnailImageUrl = req.file.path;
    let thumbnailImageLocation = req.file.filename;
    try {
      let newEvent = new Event({
        // eventName,
        // genre,
        // eventDescription,
        // organizer,
        // cost,
        // isOnline,
        // venue,
        // city,
        // websiteLink,
        // startDate,
        // endDate,
        thumbnailImageUrl,
        thumbnailImageLocation,
      });
      newEvent
        .save()
        .then((response) => {
          res.json(response._id);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      throw new Error("Not working");
    }
  }
);

router.post("/newevent", async (req, res, next) => {
  // let {
  //   eventName,
  //   genre,
  //   eventDescription,
  //   organizer,
  //   cost,
  //   isOnline,
  //   venue,
  //   city,
  //   websiteLink,
  //   likes,
  //   startDate,
  //   endDate,
  // } = req.body.eventData;
  // console.log(req.body);
  // Fetching the thumbnail
  // let thumbnail = req.file;
  // let thumbnailImageUrl = thumbnail.path;
  // let thumbnailImageLocation = thumbnail.filename;
  // if (isOnline) {
  //   venue = undefined;
  //   city = undefined;
  // }
  // let status = await saveEvent(
  //   eventName,
  //   genre,
  //   eventDescription,
  //   organizer,
  //   cost,
  //   isOnline,
  //   thumbnailImageUrl,
  //   thumbnailImageLocation,
  //   venue,
  //   city,
  //   websiteLink,
  //   likes,
  //   startDate,
  //   endDate
  // );
  // res.json({ status, url: thumbnailImageUrl });
});

router.get("/fetchEvents", async (req, res) => {
  const events = await Events.find();
  res.json({ events: events });
});

module.exports = router;
