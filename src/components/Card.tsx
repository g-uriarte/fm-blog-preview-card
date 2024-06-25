import { FC } from 'react'
import { Blog } from '../types'
import { Tag } from './Tag';
import { Content } from './Content';
import { BlogPublishedDate } from './BlogPublishedDate';
import { TagsContainer } from './TagsContainer';

type CardProps = {
    blog: Blog;
}

export const Card: FC<CardProps> = ({
    blog
}) => {

    return (
        <article className='w-[290px] h-[450px] bg-White rounded-2xl border-Black border p-4 flex justify-evenly flex-col gap-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] active:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] xl:w-[350px]'>
            <header className='rounded-xl overflow-hidden h-3/6 xl:h-auto' >
                <img src={blog.urlImage} alt='Ilustration article' className='object-cover w-[100%] h-[100%]' />
            </header>
            <div className='flex flex-col gap-3'>
                <TagsContainer>
                    {blog.tags.map((tag) => (
                        <Tag key={tag} name={tag} />
                    ))}
                </TagsContainer>
                <div>
                    <BlogPublishedDate date={blog.publishedAt} />
                </div>
                <Content title={blog.title} description={blog.description} />
            </div>
            <footer className='flex flex-row gap-2 align-middle items-center'>
                <img src={blog.author.urlImage} alt="" className='rounded-md w-7 h-7' />
                <p className='font-extrabold text-xs' >{blog.author.name}</p>
            </footer>
        </article >
    )
}
