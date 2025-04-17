import React from 'react';
import {Text, Pressable, View} from 'react-native';
import clsx from 'clsx';

interface ButtonProps {
  title: string;
  isDisabled: boolean;
  onPress: () => void;
}

const Button = ({title, onPress, isDisabled}: ButtonProps) => {
  return (
    <View className="w-full absolute bottom-10">
      <Pressable
        onPress={onPress}
        disabled={isDisabled}
        className={clsx(
          'h-14 rounded-[12px] flex items-center justify-center',
          isDisabled ? 'bg-gray-3' : 'bg-green',
        )}>
        <Text
          className={clsx('text-white text-btn1', isDisabled && 'text-gray-3')}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
