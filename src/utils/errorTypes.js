export class ErrorWithStatus extends Error {
  /**
   * Crea una instancia de ErrorWithStatus
   * @param {number} status - El codigo html
   * @param {string} message - El mensaje del error
   * @param {ErrorOptions} [options] - Parametros opcioneales para guardar el error
   */

  constructor(status, message, options) {
    super(message, options);
    this.status = status;
  }
}
