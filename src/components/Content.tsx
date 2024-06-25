import { FC } from 'react'

type ContentProps = {
    title: string;
    description: string;
}

export const Content: FC<ContentProps> = ({
    title, description
}) => {
    return (
        <div>
            <header className='font-extrabold text-paragraph mb-2 font-Figtree hover:text-Yellow hover:cursor-pointer transition-all' >{title}</header>
            <section className='text-xs text-Grey' >{description}</section>
        </div>
    )
}
