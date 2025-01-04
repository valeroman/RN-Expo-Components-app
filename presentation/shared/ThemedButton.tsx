import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react';
import ThemedText from './ThemedText';

interface Props extends PressableProps {
 className?: string;
 children: string;
}

const ThemedButton = ({ className,children, ...rest }: Props) => {
  return (
    <Pressable 
        className={`bg-light-background dark:bg-dark-background border-light-borderButton dark:border-dark-borderButton items-center rounded-xl px-6 py-2 active:opacity-80 ${ className }`}
        style={{ borderWidth: 1}}
        {...rest}
    >
      <ThemedText className='text-light-textButtom dark:text-dark-textButtom'>{ children }</ThemedText>
    </Pressable>
  )
}

export default ThemedButton