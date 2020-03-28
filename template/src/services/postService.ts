import axios, {AxiosResponse} from 'axios';
import {Either, left, right} from 'fp-ts/lib/Either';
import {IFailure} from '../models/failure';
import {IPosts} from '../models/postModel';
import {axiosErrorHandler} from '../utils/axiosError';

/**
 * Post Service
 */

/**
 * Fetches list of post
 * and return [Promise<Either<IFailure, IPosts[]>>]
 */
export const getPost = async (): Promise<Either<IFailure, IPosts[]>> => {
  try {
    // throw new Error('oops');
    const response: AxiosResponse<IPosts[]> = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    return right(response.data);
  } catch (e) {
    const failure: IFailure = axiosErrorHandler(e);
    return left(failure);
  }
};
