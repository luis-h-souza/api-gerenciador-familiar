require('dotenv').config();
const nodemailer = require('nodemailer');
const sanitizeHtml = require('sanitize-html');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verificar a conexão com o servidor SMTP
    this.transporter.verify((error, success) => {
      if (error) {
        console.error('Erro na configuração do transporte:', error);
      } else {
        console.log('Transporte configurado com sucesso', success);
      }
    });
  }

  async sendInvitationEmail(to, familyName, invitationId, deepLink) {
    // Sanitizar entradas para evitar injeção de HTML
    const cleanFamilyName = sanitizeHtml(familyName);
    const cleanInvitationId = sanitizeHtml(invitationId);
    const cleanDeepLink = sanitizeHtml(deepLink);

    const mailOptions = {
      from: `"Convite Familiar" <${process.env.EMAIL_USER}>`,
      to,
      subject: `Convite para a família ${cleanFamilyName}`,
      html: `
        <h3>Você recebeu um convite!</h3>
        <p>Você foi convidado para se juntar à família <strong>${cleanFamilyName}</strong>.</p>
        <p>Abra o aplicativo para aceitar ou rejeitar o convite:</p>
        <a href="${cleanDeepLink}">Abrir no aplicativo</a>
        </br>
        <p>Ou acesse a seção de convites no aplicativo e insira o ID do convite no campo:</p>
        <p>ID do convite: ${cleanInvitationId}</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`E-mail enviado para ${to}`);
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      throw new Error(`Failed to send invitation email: ${error.message}`);
    }
  }
}

module.exports = new EmailService();
