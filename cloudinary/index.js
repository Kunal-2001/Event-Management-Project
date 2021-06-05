const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.COLUDINARY_KEY,
  api_secret: process.env.COLUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: (req, file) => "thumbnails",
    allowed_formats: ["jpeg", "png", "jpg"],
  },
});

module.exports = {
  storage,
};
