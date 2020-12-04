const keystone = require('keystone');
const { Types } = keystone.Field;

const ContactReasons = new keystone.List('ContactReasons', {
    map: { name:'reason' },
    label: 'Motivos para Contato'
});

ContactReasons.add({
    reason: {
        type: Types.Text,
        required: true,
        initial: true,
        label: 'Motivo',
        note: 'Motivo para contato'
    }
});

ContactReasons.register();