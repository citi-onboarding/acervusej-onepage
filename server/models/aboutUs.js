const keystone = require('keystone');
const { Relationship } = require('keystone/lib/fieldTypes');

const { Types } = keystone.Field;

const AboutUs = new keystone.List('AboutUs', {
    map: { name: 'key' },
    label: 'Sobre nós',
});

const Values = new keystone.List('Values', {
    map: { name: 'title' },
    label: 'Valores',
})

Values.add({
    title: {
        type: Types.Text,
        required: true,
        initial: true,
        label: 'Valor',
        note: 'Insira um valor da empresa'
    },
    image: {
        type: Types.CloudinaryImage,
        required: true,
        initial: true,
        label: 'Imagem sobre o valor',
        note: 'Insira uma imagem que represente esse valor'
    },
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
        type: Relationship,
        ref: 'Values',
        many: true,
        required: false,
        initial: true,
    }

});

Values.register();
AboutUs.register();