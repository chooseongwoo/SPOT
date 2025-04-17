import {IconCamera} from '@/components/icons';
import DefaultProfile from '@/assets/images/DefaultProfile.png';
import {Input, Button} from '@/components/common';
import {RootStackParamList} from '@/navigations/RootNavigationType';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {useUploadImage} from '@/hooks';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen = ({navigation}: Props) => {
  const [selectedImage, setSelectedImage] = useState<
    string | {uri: string} | number
  >(DefaultProfile);

  const uploadImage = useUploadImage();

  return (
    <View className="flex-1 bg-white items-center px-6 pt-[15px] pb-[6px]">
      <View className="relative">
        <Image
          source={
            typeof selectedImage === 'string'
              ? {uri: selectedImage}
              : selectedImage
          }
          className="w-20 h-20 rounded-full border border-gray-2"
        />
        <Pressable
          onPress={() => uploadImage(setSelectedImage)}
          className="absolute bottom-0 right-0 p-1 rounded-full border border-gray-2 bg-white">
          <IconCamera />
        </Pressable>
      </View>
      <Input label="닉네임" placeholder="닉네임을 입력해주세요" />
      <Button
        title="완료"
        onPress={() => {
          return 0;
        }}
        isDisabled={true}
      />
    </View>
  );
};

export default RegisterScreen;
