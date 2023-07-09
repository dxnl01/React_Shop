// Importar el módulo nodemailer
const nodemailer = require('nodemailer');

// Crear un transportador de nodemailer utilizando la configuración proporcionada
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tu_correo@gmail.com',   // Dirección de correo electrónico desde la cual se enviará el mensaje
    pass: 'tu_contraseña'          // Contraseña de la cuenta de correo electrónico
  }
});

// Definir la función sendMail que enviará el correo electrónico
const sendMail = prod => {
  transporter.sendMail({
    from: "ecommerce <ecommerce@gmail.com>",  // Dirección de correo electrónico del remitente
    to: "a.adarve@utp.edu.co",                // Dirección de correo electrónico del destinatario
    subject: "Stock at its minimum",          // Asunto del correo electrónico
    text: `The following product's stock which id is ${prod.id} is almost empty` // Contenido del correo electrónico
  }).then(console.info)   // Mostrar información en la consola si el envío es exitoso
    .catch(console.error); // Mostrar un error en la consola si el envío falla
}

// Exportar la función sendMail para que pueda ser utilizada en otros archivos
module.exports = sendMail;
