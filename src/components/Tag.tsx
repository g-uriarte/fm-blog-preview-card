import { FC } from 'react'

type TagProps = {
    name: string;
}

export const Tag: FC<TagProps> = ({
    name
}) => {
    return <div className='px-2 py-1 bg-Yellow text-Black rounded-md font-extrabold text-xs font-sans' >{name}</div>
}
