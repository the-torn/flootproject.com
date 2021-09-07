import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/index.css'

export default function Index({
  data, // Injected by the GraphQL query below.
}) {

  const { markdownRemark } = data
  const { html } = markdownRemark

  return (
    <main>
      <Helmet>
        <title>Floot</title>
      </Helmet>
      <div
        className="header"
      />
      <section
        className="post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(id: { eq: "52737480-9d8a-5edc-81a8-7b4f62d2a886" }) {
      html
    }
  }
`

  // return (
  //   <main>
  //     <Helmet>
  //       <title>Gatsby + Node.js (TypeScript) API</title>
  //     </Helmet>
  //     <h1>Gatsby + Node.js (TypeScript) API</h1>
  //     <h2>
  //       Deployed with{' '}
  //       <a
  //         href="https://vercel.com/docs"
  //         target="_blank"
  //         rel="noreferrer noopener"
  //       >
  //         Vercel
  //       </a>
  //       !
  //     </h2>
  //     <p>
  //       <a
  //         href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
  //         target="_blank"
  //         rel="noreferrer noopener"
  //       >
  //         This project
  //       </a>{' '}
  //       is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
  //       directories, <code>/src</code> for static content and <code>/api</code>{' '}
  //       which contains a serverless{' '}
  //       <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
  //       <a href="/api/date">
  //         <code>api/date</code> for the Date API with Node.js (TypeScript)
  //       </a>
  //       .
  //     </p>
  //     <br />
  //     <h2>The date according to Node.js (TypeScript) is:</h2>
  //     <p>{date ? date : 'Loading date...'}</p>
  //   </main>
  // );
