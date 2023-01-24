var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: 'user',
    pass: 'pass'
}
});

var mailOptions = {
from: 'user',
to: 'to',
subject: 'Sending Email using Node.js',
text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
if (error) {
    console.log(error);
} else {
    console.log('Email sent: ' + info.response);
}
});
