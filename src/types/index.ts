interface Author {
    urlImage: string;
    name: string;
}

export interface Blog {
    urlImage: string;
    tags: string[];
    publishedAt: Date;
    title: string;
    description: string;
    author: Author
}