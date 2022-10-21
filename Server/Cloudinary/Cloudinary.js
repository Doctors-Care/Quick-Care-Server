const cloudinary = require("cloudinary").v2;
require("dotenv").config();
//CLD Config
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});
//Uploading img to CLD
sendToCloudinary = (path, data) => {
  return cloudinary.uploader
    .upload(path, {
      data,
    })
    .then((data) => {
      return { url: data.url, public: data.public_id };
    })
    .catch((error) => {
      console.log(error);
    });
};
//  delete img from the CLD
removeFromCloudinary = async (public_id) => {
  await cloudinary.uploader.destroy(public_id, function (error, result) {
    console.log("result API--->", result);
    console.log("err--->api", error);
  });
};

module.exports = { sendToCloudinary, removeFromCloudinary,updateImg };