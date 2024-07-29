import nodemailer from 'nodemailer'

export function POST() {
  try {

    const transporter = nodemailer.createTransport({
      host: "mail.flames.com.br",
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "bot_flames@flames.com.br",
        pass: "333118Home!",
      },
    });

    const mailData = {
      from: "bot_flames@flames.com.br",
      to: 'henriquetsu@gmail.com',
      subject: `Message From Henrique`,
      text:" Sent from: henrique@flames.com.br",
      html: `<div>I am testing nodemailer</div><p>Sent from:</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log('Nodemailer error ==>',err)
      else
        console.log('Nodemailer info ==>', info)
    })

    return Response.json({ ... mailData, status: 'Sucess'});
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}