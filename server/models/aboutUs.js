const keystone = require('keystone');

const { Types } = keystone.Field;

const aboutUs = new keystone.List('AboutUs', {
    map: { name: 'key' },
    label: 'Sobre nós',
});

aboutUs.add({
    key: {
        type: Types.Text,
        initial: false,
        default: 'Sobre nós'
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
    mission: {
        description: {
            type: Types.Textarea,
            required: true,
            initial: true,
            label: 'Missão',
            note: 'Fale sobre a missão da empresa'
        },
    },
    vision: {
        description: {
            type: Types.Textarea,
            required: true,
            initial: true,
            label: 'Visão',
            note: 'Fale sobre a missão da empresa'
        },
    },

});

aboutUs.register();