import Head from "next/head";

export function IndexPage(props: {}) {
  return <div>
    <Head>
      <title>.eaya.io</title>
    </Head>
    <div className="card">
      <h1>.eaya.io</h1>
      <h3>The EA Young Academy 2LD</h3>

      <div style={{fontWeight: 700, paddingTop: 8}}>
        Want one? Shoot an email to Ben Aubin.
      </div>

      <hr/>

      <p>
        Free domains available to EAYA Scholars, Faculty, classes and clubs.
        Brought to you by the fine folks at the&nbsp;
        <a href="https://hackclub.eaya.io/">
          EAYA Hack Club
        </a>.
      </p>

      <p>
        Content on <code>eaya.io</code> domains is not necessarily school approved.
        Make sure to follow the policies in the scholar handbook - and don't be a moron.
      </p>

      <h4>Sites:</h4>

      <ul>
        <li>
          <a href="https://hackclub.eaya.io/">
            hackclub.eaya.io
          </a>
        </li>
      </ul>

      <h4>Resources:</h4>

      <ul>
        <li>
          <a href="http://www.eayoungacademy.com/">
            Official Website
          </a>
        </li>
        <li>
          <a href="https://github.com/EAYA-Hack-Club/eaya.io/">
            Source Code
          </a>
        </li>
      </ul>
    </div>

    <style jsx>{`
      .card {
        background: #F9F9FA;
        color: #555;

        border-radius: 7px;
        box-sizing: border-box;

        margin: 10vh auto;

        width: 90vw;
        max-width: 480px;

        padding: 40px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      }
      h1 {
        color: #893DEF;
        font-weight: 700;

        margin: 4px 0;
      }
      h3 {
        font-weight: 400;
        margin: 4px 0;
      }

      ul {
        list-style: none;
        padding: 0;
      }
    `}</style>
  </div>;
};

export default IndexPage;