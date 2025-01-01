import { View, ViewProps } from 'react-native'
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends ViewProps {
    className?: string;
    margin?: boolean;
    safe?: boolean;
    bgColor?: string;
}

const ThemedView = ({
    style,
    className,
    margin = false,
    safe = false,
    bgColor = 'bg-light-background dark:bg-dark-background',
    children,
}: Props) => {

    const safeArea = useSafeAreaInsets();

    return (
        <View
            className={[
                bgColor,
                margin ? 'mx-10' : 0,
                safe ? `pt-[${safeArea.top}px]` : 0,
                style,
                className,
            ].join(' ')}
        >
            {children}
        </View>
    )
}

export default ThemedView

//MaximilianoVV16