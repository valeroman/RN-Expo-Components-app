import { View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react';
import { Href, router } from 'expo-router';
import ThemedText from '../shared/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    name: string;

    isFirst?: boolean;
    isLast?: boolean;
}

const MenuItem = ({
    icon,
    name,
    title,
    isFirst = false,
    isLast = false
}: Props) => {

    // animation-101/index
    const [routeName] = name.split('/');
    const primaryColor = useThemeColor({}, 'neonGreen');
    const borderColor = useThemeColor({}, 'border');

    return (
        <Pressable
            onPress={() => router.push( routeName as Href)}
            className='bg-white dark:bg-black/15 px-5 py-2 border-light-border dark:border-dark-border'
            style={{
                borderColor,
                borderWidth: 1,
                ...(isFirst && {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingTop: 10
                }),
                ...(isLast && {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBottom: 10
                }),
            }}
        >
            <View className='flex-row items-center'>
                <Ionicons name={ icon } size={ 30 } color={ primaryColor }  className='mr-5' />
                <ThemedText type='h2'>{ title }</ThemedText>
            </View>
            
        </Pressable>
    )
}

export default MenuItem