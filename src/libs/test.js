const EmailService = require('./emailService');

async function testEmail() {
  try {
    await EmailService.sendInvitationEmail(
      'luis.h.souza@outlook.com.br',
      'Família Silva',
      '12345',
      'https://meuapp.com/invite/12345'
    );
  } catch (error) {
    console.error(error);
  }
}

testEmail();
