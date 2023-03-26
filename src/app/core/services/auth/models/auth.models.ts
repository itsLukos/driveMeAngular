import { Cars } from "../../cars/cars.model";

export interface IUser {
    _id?: string;
    apellidos: string;
    telefono?: number;
    email: string;
    role: RoleUser;
    favoriteCars?: Cars;
    password: string;
    createdAt?:string;
    updatedAt?: string;
    __v: number;
}

export interface IUserSignInResponse {
    user: IUser;
    token: string;
}

export type RoleUser =
'buyer' | 'seller';

export enum AuthError {
    GENERIC = 0,
    AUTH = 1
}