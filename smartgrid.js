const smartgrid = require('smart-grid');

const settings = {
    filename: "_smart-grid",
    outputStyle: "scss",
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1230px',
        fields: '15px'
    },
    breakPoints: {
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "720px",
            fields: "15px"
        },
        xs: {
            width: "576px",
            fields: "30px"
        },
        xsl: {
            width: "480px",
            fields: "30px"
        },
        xxs: {
            width: "380px",
            fields: "30px"
        },
        xxxxx: {
            width: "350px",
            fields: "20px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid('src/styles/vendor/', settings);