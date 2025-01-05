import { useAnimation } from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

const Animation101Screen = () => {



  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition
  } = useAnimation();

  return (
    <ThemedView margin className='flex-1 justify-center items-center'>
      <Animated.View
        className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }]
        }}
      />

      <ThemedButton
        onPress={() => {
          fadeIn({

          });
          startMovingTopPosition({
            easing: Easing.bounce,
            duration: 700
          });
        }}
        className='my-5'
      >
        FadeIn
      </ThemedButton>

      <ThemedButton
        onPress={() => fadeOut({})}
        className='my-5'
      >
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
