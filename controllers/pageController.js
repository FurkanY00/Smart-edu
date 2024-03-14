const nodemailer=require("nodemailer");
const Course=require("../models/Course");
const User=require("../models/User");

exports.getIndexPage = async(req, res) => {

  const courses = await Course.find().sort('-createAt').limit(2);
  const totalCoureses = await Course.find().countDocuments();
  const totalStudents= await User.countDocuments({role:'student'});
  const totalTeachers= await User.countDocuments({role:'teacher'});

  res.status(200).render('index',{
    page_name:'index',
    courses,
    totalCoureses,
    totalStudents,
    totalTeachers
  });


  
};

exports.getaAboutPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};
exports.getRegistertPage = (req, res) => {
  res.status(200).render("register", {
    page_name: "register",
  });
};
exports.getLoginPage = (req, res) => {
  res.status(200).render("login", {
    page_name: "login",
  });
};
exports.getContactPage = (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
};
exports.sendEmail = async(req, res) => {
  try{
  const outputMessage = `
  
  <h1>Mail Details </h1>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>

  </ul>
  <h1>Message  </h1>
  <p>${req.body.message}</p>
  `
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "yfurkan380@gmail.com",
      pass: "ffxm",
    },
  });
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Smart Edu Contact👻" <yfurkan380@gmail.com>', // sender address
      to: "yyilmaz.furkann@gmail.com", // list of receivers
      subject: "Smart Edu Contact👻 New Message ✔", // Subject line
      html: outputMessage, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  req.flash("success","we received your message succesfully");
  res.status(200).redirect('contact');
  }catch(err){
   // req.flash("error",`something happend! ${err}`);
    req.flash("error",`something happend! ${err}`);

    res.status(200).redirect('contact');


  }

};

