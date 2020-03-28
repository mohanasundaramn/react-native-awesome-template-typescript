import {IPosts} from './postModel';
import {Either} from 'fp-ts/lib/Either';
import {IFailure} from './failure';

export interface IPostStoreModel {
  loading: boolean;
  posts: Either<IFailure, IPosts[]> | null;
}
