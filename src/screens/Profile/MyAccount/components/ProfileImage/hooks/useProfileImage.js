import { launchImageLibrary } from 'react-native-image-picker';
import useTranslates from '../../../../../../i18n/useTranslates';

const useProfileImage = () => {
    const texts = useTranslates('profile.myAccount.title.changePhoto');

    const imagePickerHandle = async () => {
        await launchImageLibrary(
            {
                mediaType: 'photo',
                maxWidth: 700,
                maxHeight: 500,
                quality: 1,
                // includeBase64: true,
                cameraType: 'front',
            },
            response => {
                if (response) {
                    console.log(response);
                }
            },
        );
    };

    return {
        imagePickerHandle,
        texts,
    };
};

export default useProfileImage;
