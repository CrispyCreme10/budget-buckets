interface ITransaction {
    _id: string;
    transactionDate: Date;
    postedDate: Date;
    description: string;
    category: E_TransactionCategory;
    amount: number;
}

export enum E_TransactionCategory {
    None,
    Custom,
    Gas,
    Grocery,
    Entertainment,
    Travel,
    Utility
}

export class Transaction implements ITransaction {
    _id: string;
    transactionDate: Date;
    postedDate: Date;
    description: string;
    category: E_TransactionCategory;
    amount: number;
}