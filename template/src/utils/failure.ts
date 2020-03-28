/**
 * Source [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status]
 */
// Failures constants
export enum EFailureMessage {
  GeneralFailureMessage = 'Something went wrong, Please try after sometimes',
  BadRequest = 'Bad request', // 400
  AuthorizationFailureMessage = 'User not authorized', // 401
  NotFound = 'Not Found', // 404
  TimeOut = 'Request Time Out', // 408,
  Conflict = 'Conflict', // 409,
  RateLimit = 'Request Limit Reached', // 429
  ServerFailureMessage = 'Server not responding', // 500
  BadGateWay = 'Bad Gate Way', //502
}
