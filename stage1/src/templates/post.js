import React from 'react';
import { graphql } from 'gatsby';

export default ({
    data: {
        markdownRemark: {
            html,
            frontmatter: { title },
        },
    },
}) => {
    return (
        <main>
            <h1>{title}</h1>
            <article dangerouslySetInnerHTML={{ __html: html }} />
        </main>
    );
};

export const query = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
