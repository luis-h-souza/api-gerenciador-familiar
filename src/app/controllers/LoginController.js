

class LoginController {
  async index(request, response) {
    response.send('Hello World!')
  }
}

module.exports = new LoginController()