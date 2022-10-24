//Controller related to HCE ressource.
const db = require("../Database/index");
const bcrypt = require("bcrypt");
const { sendConfirmationMail } = require("./nodemailer");

module.exports = {
  addHce: async (req, res) => {
    const characters =
      "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let activationCode = "";
    for (let i = 0; i <= 6; i++) {
      activationCode +=
        characters[Math.floor(Math.random() * characters.length)];
    }
    let newHce = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      licenseNumber: req.body.licenseNumber,
      activationCode: activationCode,
    };
    // console.log(newHce);
    try {
      console.log('try block')
    const nodemailerResponse = await sendConfirmationMail(newHce.email,activationCode)
    console.log(nodemailerResponse)
    
      const hce = await db.Hce.create(newHce);
      res.status(203).send("registred");
    } catch (error) {
      console.log('catch block')
      console.log(error);
      res.status(555).send(error);
    }
  },
  verifyCode: async (req, res) => {
    try {
      let filter = { activationCode: req.body.activationCode };
      const hce = await db.Hce.findOne({ where: filter });
      if (hce) {
        return res.status(200).send("allowed");
      }
      res.status(402).send("wrong code");
    } catch (error) {
      res.status(400).send(error);
    }
  },
  hceAuthentification: async (req, res) => {
    try {
      let filter = {
        email: req.body.email,
      };
      console.log(req.body);
      const Hce = await db.Hce.findOne({ where: filter });
      console.log(Hce);
      if (!Hce) {
        return res.status(401).send("check you email address");
      }
      const Valid = bcrypt.compareSync(req.body.password, Hce.password);
      if (!Valid) {
        return res.status(402).send("wrong password");
      }

      res.status(200).send("allowed");
    } catch (error) {
      res.status(400).send(error);
    }
  },
  gettingOneHce: async (req, res) => {
    try {
      let filter = {
        email: req.body.email,
      };
      const Hce = await db.Hce.findOne({ where: filter });
      res.status(200).json(Hce);
    } catch (error) {
      console.log(error);
      res.status(400).send("error");
    }
  },
};
