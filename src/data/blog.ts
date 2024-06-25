import { Blog } from "../types";

export const BLOG_ITEM: Blog = {
    title: 'HTML & CSS foundations',
    description: 'These languages are the backbone of every website, defining structure, content, and presentation.',
    publishedAt: new Date('12/21/2023'),
    urlImage: './assets/images/illustration-article.svg',
    tags: ['Learning', 'Example'],
    author: {
        name: 'Greg Hooper',
        urlImage: './assets/images/image-avatar.webp'
    }
}