import { ComponentPropsWithoutRef, FC } from 'react'

type TagsContainerProps = {

} & ComponentPropsWithoutRef<'div'>;

export const TagsContainer: FC<TagsContainerProps> = ({ 
    children
}) => {
    return (
        <div className='flex flex-row gap-2' >
            {children}
        </div>
    )
}
