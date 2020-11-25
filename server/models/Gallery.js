const keystone = require('keystone');
const { Types } = keystone.Field;

const Gallery = new keystone.List('Gallery', {
    map: { name: 'name' },
    label: 'Galeria',
});

Gallery.add({
    title: {
        type: Types.Text,
        required: true,
        initial: true,
        label: 'Título',
        note: 'Título do post'
    },

    image: {
        type: Types.CloudinaryImage,
        required: true,
        initial: true,
        label: 'Imagem'
    },

    description: {
        type: Types.Textarea,
        requeired: true,
        initial: true,
        label: 'Descrição',
        note: 'Descrição sobreo post'
    }

});

Gallery.register();