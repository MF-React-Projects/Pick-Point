import React from 'react';
import './Blog.css';
import {Container} from "react-bootstrap";

const Blog = () => {
    return (
        <div className='blog-section'>
            <Container>
                <h1 className='text-center'>Questions</h1>
                <h3>What is Context API?</h3>
                <p>
                    Context API is a React structure that allows you to pass data through the component tree without having to pass props down manually at every level. Context provides a way to share values like these without having to explicitly pass a prop through every level of the tree. Context is a React feature that is built on top of the Provider and Consumer components. The Provider component is the one that actually provides the context and the Consumer component is the one that actually consumes the context. The Provider component is the one that is the root of the context tree and the Consumer component is the one that is the leaf of the tree.
                </p>

                <h3>What is semantic tag?</h3>
                <p>
                    Semantic tag is a tag that is used to describe the purpose of the element. It is a way to make the HTML more readable and helps to identify the purpose of the element. For example, the <code>&lt;h1&gt;</code> tag is used to define the title of the page. And the <code>&lt;p&gt;</code> tag is used to define the content of the page. Semantic tags describe the purpose of the element. On the other hand, <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> tag is used to define the content of the page. They are not semantic tags. Before semantic tags, we have to use <code>&lt;div class="header"&gt;</code> to define the Header. And after semantic tags, we can easily use <code>&lt;header&gt;</code> to define the header of the page.
                </p>
            </Container>
        </div>
    );
};

export default Blog;