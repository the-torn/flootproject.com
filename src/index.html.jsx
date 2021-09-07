import About from './pages/about.html.mdx';

export default () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet" />

      <div className="header"></div>
      <main>
        <About />
      </main>
      <link href="/stylesheets/index.css" rel="stylesheet" />
    </>
  );
};
