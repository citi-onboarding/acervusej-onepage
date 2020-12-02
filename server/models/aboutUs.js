const keystone = require('keystone');

const { Types } = keystone.Field;

const AboutUs = new keystone.List('AboutUs', {
    map: { name: 'key' },
    label: 'Sobre nós',
});

AboutUs.add({
    aboutCompany: {
        key: {
            type: Types.Text,
            initial: false,
            default: 'Sobre nós'
        },
        
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
    vision: {
        description: {
            type: Types.Textarea,
            required: true,
            initial: true,
            label: 'Visão',
            note: 'Fale sobre a visão da empresa'
        },
    },

});

AboutUs.register();