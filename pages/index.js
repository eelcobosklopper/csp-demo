import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Content Security Policy!</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta http-equiv="Content-Security-Policy" content={`default-src 'self' data: i.redd.it i.imgur.com;`} /> */}
      </Head>

      <main id="main" className={styles.main}>
        <h1 className={styles.title} style={{ color: "blue" }}>
          Content Security Policy!
        </h1>
        <img src="https://i.redd.it/tu0ex7afwd171.jpg" alt="A rustic visage" />
        <img src="https://i.imgur.com/lrLuEsX.jpg" alt="Pretty colours" />
        <iframe src="https://nos.nl/" width="1000" height="750"></iframe>
        <iframe
          src="http://localhost:3000/hello"
          width="1000"
          height="750"
        ></iframe>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const defaultSrc = `default-src 'self' data: i.redd.it i.imgur.com;`;
  const script = `script-src 'unsafe-inline' localhost:3000;`;
  const style = `style-src 'unsafe-inline' localhost:3000 fonts.googleapis.com;`;
  const font = `font-src fonts.gstatic.com;`;
  const report = `report-uri /api/report;`;
  const iframe = `frame-src 'self' nos.nl;`;

  context.res.setHeader(
    "Content-Security-Policy",
    `${defaultSrc} ${script} ${style} ${font} ${report} ${iframe}`
  );

  return {
    props: {},
  };
}
