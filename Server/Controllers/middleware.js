const jwt = require("jsonwebtoken");
const db = require("../Database/index");
const dotenv = require("dotenv");
dotenv.config();
async function requireAuhDoc(req, res, next) {
  try {
    //read the token from the header or url
    const token = req.cookies.Authorization;
    //decode the token using a secret key-phrase
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const doctor = await db.Doctors.findByPk(decoded.sub);

    if (Date.now() > decoded.exp) {
      return res.status(401).json("token expired");
    }

    if (!doctor) {
      return res.status(401).json("doctor not found");
    } else {
      req.doctor = doctor;
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).json("unauthorized");
  }
}

module.exports = requireAuhDoc;