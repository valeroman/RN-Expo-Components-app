import { Text, TextProps } from 'react-native'
import React from 'react';


interface Props extends TextProps {
    clasName?: string;
    type?: 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link';
}

const ThemedText = ({ className, type, ...rest }: Props) => {
    // className='mt-10 text-3xl text-light-text dark:text-dark-text'
    
    return (
        <Text
            className={[
                'text-light-text dark:text-dark-text',
                type === 'normal' ? 'font-normal' : undefined,
                type === 'h1' ? 'text-3xl' : undefined,
                type === 'h2' ? 'text-xl' : undefined,
                type === 'semi-bold' ? 'font-semibold' : undefined,
                type === 'link' ? 'font-normal underline' : undefined,
                className
            ].join(' ')}
            {...rest}
        />
    )
}

export default ThemedText