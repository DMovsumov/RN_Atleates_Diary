import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { setProgramsImage } from '../../../../../../redux/actions/writeProgram';

const useProgramImage = () => {
    const dispatch = useDispatch();
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
                    const { assets } = response;
                    dispatch(setProgramsImage(assets[0]));
                }
            },
        );
    };

    return {
        imagePickerHandle,
    };
};

export default useProgramImage;
