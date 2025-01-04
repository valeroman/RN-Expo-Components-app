import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { View, Text, Animated } from 'react-native';

const Animation101Screen = () => {

  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  return (
    <ThemedView margin className='flex-1 justify-center items-center'>
      <Animated.View 
        className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity
        }}
      />

      <ThemedButton
        onPress={ fadeIn }
        className='my-5'
      >
        FadeIn
      </ThemedButton>

      <ThemedButton
        onPress={ fadeOut }
        className='my-5'
      >
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
