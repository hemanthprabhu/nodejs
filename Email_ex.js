var nodemailer = require('nodemailer');

var http = require('http');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hemanthprabhu33@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'hemanthprabhu33@gmail.com',
  to: 'hemanth.kuppusamy@siriuscom.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};




http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
	console.log("HEllo Called");
	transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
    res.end('Hello World KEC');
}).listen(8082);