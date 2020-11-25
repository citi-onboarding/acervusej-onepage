const keystone = require('keystone');

const { Types } = keystone.Field;

const Service = new keystone.List('Services', {
    map: { name:'title' },
    label: 'Serviços'
  });

Service.add({
    title :{
        type: Types.Text,
        required: true,
        initial: true,
        label: 'Nome do Serviço',
        note:'Coloque o nome do serviço',
    },

    image :{
        type: Types.CloudinaryImages,
        required: true,
        initial: true,
        label: 'Imagem do Serviço',
    },

    description :{
        type: Types.Textarea,
        required: true,
        initial: true,
        label:'Descrição sobre o Serviço',
        note: 'Fale um pouco sobre o serviço',
    }
});

Service.register();