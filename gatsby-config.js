module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // CommonMark mode (default: true)
                commonmark: true,
                // Footnotes mode (default: true)
                footnotes: true,
                // Pedantic mode (default: true)
                pedantic: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'public',
                path: `${__dirname}/public/`,
            },
        },
    ],
};
