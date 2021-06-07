import useTranslates from '../../../../i18n/useTranslates';

const useMain = navigation => {
    const {
        createChooseListTrainingTitle,
        createChooseListTrainingSubtitle,
        createChooseListCreateprogramTitle,
        createChooseListCreateprogramSubtitle,
        createChooseListFindprogramTitle,
    } = useTranslates(
        'create.choose.list.training.title',
        'create.choose.list.training.subtitle',
        'create.choose.list.createProgram.title',
        'create.choose.list.createProgram.subtitle',
        'create.choose.list.findProgram.title',
    );

    const list = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/athlete-s-diary-a0636.appspot.com/o/Others%2Fprogramma-trenirovok-na-vse-telo-v-trenazhernom-zale.webp?alt=media&token=a6b4760b-a415-40c9-9e85-31ed1fc4b14a',
            title: createChooseListTrainingTitle,
            subTitle: createChooseListTrainingSubtitle,
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/athlete-s-diary-a0636.appspot.com/o/Others%2FFitness-girl-sportswear-dumbbells-gym_1280x800.webp?alt=media&token=95b69bef-a4d1-4c2e-b7f4-d48e1cba4167',
            title: createChooseListCreateprogramTitle,
            subTitle: createChooseListCreateprogramSubtitle,
            onPress: () => navigation.navigate('CreateProgram'),
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/athlete-s-diary-a0636.appspot.com/o/Others%2Fstop-complaining.-maximize-the-treadmill-experience-to-improve-your-running-2.webp?alt=media&token=ac498931-bc77-4049-850b-95cd5f13b328',
            title: createChooseListFindprogramTitle,
        },
    ];

    return {
        list,
    };
};

export default useMain;
