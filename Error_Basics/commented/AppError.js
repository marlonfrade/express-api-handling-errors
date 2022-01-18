// Classe criada para auxiliar a lidar com erros dentro do aplicativo

class AppError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

module.exports = AppError;
