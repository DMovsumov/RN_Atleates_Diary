import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setProgramsImage } from '../../../../../../redux/actions/writeProgram';

const useImage = () => {
    const dispatch = useDispatch();
    const {
        img,
        tempImage: { uri },
    } = useSelector(({ writeProgram }) => writeProgram);

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
        img: uri || img,
        imagePickerHandle,
    };
};

export default useImage;
