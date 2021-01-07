module.exports = {
    siteMetadata: {},
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `${__dirname}/pages`,
            },
        },
        "gatsby-transformer-remark",
    ],
};
