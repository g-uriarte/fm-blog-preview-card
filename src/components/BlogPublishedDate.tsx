import { FC } from 'react'

type BlogPublishedDateProps = {
    date: Date;
}

export const BlogPublishedDate: FC<BlogPublishedDateProps> = ({
    date
}) => {
    return (
        <p className='text-xs font-medium'>Published {Intl.DateTimeFormat(navigator.language, { dateStyle: 'medium' }).format(date)}</p>
    )
}
