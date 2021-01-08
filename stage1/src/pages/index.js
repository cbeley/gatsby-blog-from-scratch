import React from 'react';
import { graphql, Link } from 'gatsby';

export default ({
    data: {
        allMarkdownRemark: { nodes: posts },
    },
}) => {
    return (
        <>
            <header>
                <h1>My Awesome Blog</h1>
            </header>
            <main>
                <ul>
                    {posts.map(
                        ({ frontmatter: { title }, fields: { slug } }) => (
                            <li>
                                <Link to={slug}>{title}</Link>
                            </li>
                        )
                    )}
                </ul>
            </main>
        </>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                }
                fields {
                    slug
                }
            }
        }
    }
`;
