const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// POST /api/contact
router.post('/', async (req, res) => {
  const { nom, prenom, telephone, email, objet, precision } = req.body;

  if (!nom || !prenom || !telephone || !email || !objet || !precision) {
    return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
  }

  // on configure le transporteur Nodemailer 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASSWORD 
    }
  });

  // contenu de l'email
  const mailOptions = {
    from: `"${nom} ${prenom}" <${email}>`,
    to: 'abdelkader.biarritz@gmail.com',
    subject: `[Contact] ${objet}`,
    text: `\nNom: ${nom}\nPrénom: ${prenom}\nTéléphone: ${telephone}\nEmail: ${email}\n\nObjet: ${objet}\n\nPrécision:\n${precision}\n    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Votre message a bien été envoyé !' });
  } catch (error) {
    console.error('Erreur envoi mail:', error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi du message.' });
  }
});

module.exports = router; 