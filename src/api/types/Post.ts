import { User } from './User';

export type Post = {
    _id: string;
    message: string;
    author: User;
    likes: string;
    createdAt: string;
    updatedAt: string;
}