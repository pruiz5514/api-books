export interface Books {
    message: string;
    data: BooksInfo[];
}

export interface BooksInfo {
    id?: string;
    title: string;
    author: string;
    description: string;
    summary: string;
    publicationDate?: Date;
    createdBy?: string;
    updatedBy?: null;
    deletedBy?: null;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: null;
    files?: any[];
}