import {AxiosError} from 'axios';
import {IFailure} from '../models/failure';
import {EFailureMessage} from './failure';

/**
 * @param error {AxiosError}
 * based on error return respective [IFailure] object
 */
export const axiosErrorHandler = (error: AxiosError): IFailure => {
  const failure: IFailure = {
    message: EFailureMessage.GeneralFailureMessage,
  };
  if (error.response) {
    switch (error.response.status) {
      case 400:
        failure.message = EFailureMessage.BadRequest;
        return failure;
      case 401:
        failure.message = EFailureMessage.AuthorizationFailureMessage;
        return failure;
      case 403:
        failure.message = EFailureMessage.AuthorizationFailureMessage;
        return failure;
      case 404:
        failure.message = EFailureMessage.NotFound;
        return failure;
      case 408:
        failure.message = EFailureMessage.TimeOut;
        return failure;
      case 409:
        failure.message = EFailureMessage.Conflict;
        return failure;
      case 429:
        failure.message = EFailureMessage.RateLimit;
        return failure;
      case 500:
        failure.message = EFailureMessage.ServerFailureMessage;
        return failure;
      case 502:
        failure.message = EFailureMessage.BadGateWay;
        return failure;

      default:
        break;
    }
  }
  if (error.request) {
    failure.message = error.message;
    return failure;
  } else {
    failure.message = EFailureMessage.GeneralFailureMessage;
    return failure;
  }
};
