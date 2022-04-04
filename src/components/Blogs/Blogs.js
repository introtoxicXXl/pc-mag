import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div>
      <div className="ques">
        <h2>What is context api?</h2>
        <p>The Context API can be utilized to impart data to numerous parts, without going data through props physically. For instance, some utilization cases the Context API is great for: theming, client language, validation, and so on.One of the ideas of React is to break your application into parts, for reusability purposes. So in a basic React application, we have perhaps a couple of parts. As our application develops, these parts can become tremendous and unmaintainable, so we break them into more modest parts.</p>
      </div>
      <div className="ques">
        <h2>What is semantic tag?</h2>
        <p>Semantic HTML or semantic markup is HTML that acquaints significance with the page as opposed to simply showing. For instance, a p tag shows that the encased text is a paragraph. This is both semantic and presentational in light of the fact that individuals realize what paragraphs are, and programs know how to show them.The advantage of composing semantic HTML originates from what ought to be the driving objective of any website page: the craving to convey. By adding semantic labels to your record, you give extra data about that archive, which helps with correspondence. In particular, semantic labels make it clear to the program what the significance of a page and its substance is. That clearness is likewise spoken with web indexes, guaranteeing that the right pages are conveyed for the right questions.</p>
      </div>
    </div>
  );
};

export default Blogs;