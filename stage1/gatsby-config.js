const path = require('path');

module.exports = {
    siteMetadata: {},
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/pages`,
            },
        },
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-plugin-alias-imports',
            options: {
                alias: {
                    '~src': path.resolve(__dirname, 'src'),
                },
            },
        },
    ],
};
