const keystone = require('keystone');

const { Types } = keystone.Field;

/** Banner Model **/

const Banner = new keystone.List('Banners', {
  map: {name: 'title'}
});

Banner.add({
  title: {
    type: Types.Text,
    required: true,
    initial: true,
    label: 'Titulo',
    note: 'Título da imagem',
  },
  image: {
    type: Types.CloudinaryImages,
    required: true,
    initial: true,
    label: 'Imagem',
  },
  description: {
    type: Types.Textarea,
    required: true,
    initial: true,
    label: 'Descrição',
    note: 'Descrição sobre conteúdo',
  },
});

Banner.register();