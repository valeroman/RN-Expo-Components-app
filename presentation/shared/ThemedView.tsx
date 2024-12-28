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
    bgColor,
    children,
}: Props) => {

    const safeArea = useSafeAreaInsets();
    return (
        <View
            style={[
                {
                    backgroundColor: bgColor ? bgColor : 'bg-light-background dark:bg-dark-background',
                    flex: 1,
                    paddingTop: safe ? safeArea.top : 0,
                    marginHorizontal: margin ? 10 : 0,
                },
                style,
            ]}
            className={ className }
            

        >
            {children}
        </View>
    )
}

export default ThemedView

//MaximilianoVV16