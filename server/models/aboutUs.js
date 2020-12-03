const keystone = require('keystone');

const { Types } = keystone.Field;

const AboutUs = new keystone.List('AboutUs', {
    map: { name: 'key' },
    label: 'Sobre nós',
});

AboutUs.add({
    key: {
        type: Types.Text,
        initial: false,
        default: 'A Acervus'
    },
    aboutCompany: {
        description: {
            type: Types.Textarea,
            required: true,
            initial: true,
            label: 'Sobre nós',
            note: 'Fale sobre a empresa'
        },

        image: {
            type: Types.CloudinaryImage,
            required: true,
            initial: true,
            label: 'Imagem sobre nós'
        },
    },
    aboutCourse: {
        key: {
            type: Types.Text,
            initial: false,
            label: 'Sobre o curso',
            default: 'A Museologia'
        },

        description: {
            type: Types.Textarea,
            required: true,
            initial: true,
            label: 'Museologia',
            note: 'Fale sobre a museologia'
        },
        image: {
            type: Types.CloudinaryImage,
            required: true,
            initial: true,
            label: 'Imagem sobre a museologia'
        },
    },
    mission: {
        description: {
            type: Types.Textarea,
            required: true,
            initial: true,
            label: 'Missão',
            note: 'Fale sobre a missão da empresa'
        },
    },
    values: {
        file: {
            type: Types.CloudinaryImages,
            required: true,
            initial: true,
            label: 'Valores',
            note: 'Insira os valores da empresa'
        },
        },

});

AboutUs.register();