const resolvePath = require('path').resolve;

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: 'pages' });

        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const {
        data: { posts },
    } = await graphql(`
        query {
            posts: allMarkdownRemark {
                nodes {
                    id
                    fields {
                        slug
                    }
                }
            }
        }
    `);

    posts.nodes.forEach(({ fields: { slug }, id }) => {
        createPage({
            path: slug,
            component: resolvePath('./src/templates/post.js'),
            context: {
                id,
            },
        });
    });
};
