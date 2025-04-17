import React, {useState} from 'react';
import {Text, TextInput, View, KeyboardTypeOptions} from 'react-native';
import clsx from 'clsx';

interface InputProps {
  label: string;
  placeholder: string;
  type?: KeyboardTypeOptions;
}

const Input = ({label, placeholder, type = 'default'}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="w-full flex flex-col gap-2">
      <Text className="text-b2 text-black">{label}</Text>
      <TextInput
        className={clsx(
          'h-14 px-4 py-[10px] text-b2 text-black rounded-lg border',
          isFocused ? 'border-green-active' : 'border-gray-3',
        )}
        placeholder={placeholder}
        placeholderTextColor="#C3C3C3"
        keyboardType={type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default Input;
