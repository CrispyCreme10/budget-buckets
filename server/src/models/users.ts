import { Transaction } from "./transactions";

interface IUser {
    _id: string;
    displayName: string;
    email: string;
    passwordHash: string;
    transactions: Transaction[]
}

export class User implements IUser {
    _id: string;
    email: string;
    passwordHash: string;
    transactions: Transaction[];
    displayName: string;
}