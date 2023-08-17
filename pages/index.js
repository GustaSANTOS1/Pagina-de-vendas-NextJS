import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
        Impulsione suas vendas com páginas de vendas poderosas e eficazes!
        </h1>
        <Image src='/vercel.svg' 
        width={500} 
        height={500}/>
        <div classname={styles.subtitle}>
          <p>
          <strong>Aumente suas conversões e impulsione seus negócios com as melhores páginas de vendas do mercado</strong>

          </p>
        </div>

        <p className={styles.description}>
        

Você está cansado de ver suas oportunidades de venda escorregarem entre os dedos? Não perca mais tempo! Nossa equipe de especialistas em marketing digital desenvolveu as páginas de vendas mais eficazes e atraentes que vão alavancar seus resultados.

Nossas páginas de vendas são cuidadosamente projetadas para capturar a atenção do seu público-alvo e guiá-los em um processo de compra irresistível. Com elementos estratégicos de persuasão e chamadas de ação convincentes, nossa copy cria uma experiência de compra envolvente, aumentando drasticamente suas taxas de conversão.

Não importa o tipo de produto ou serviço que você ofereça, nossas páginas de vendas personalizadas são feitas sob medida para o seu negócio. Desde a construção de landing pages impressionantes até o desenvolvimento de textos persuasivos, lidamos com todos os detalhes para garantir que o seu negócio se destaque da concorrência.

Não perca mais tempo e dinheiro com páginas de vendas genéricas! Aumente seu ROI e conquiste mais clientes hoje mesmo com nossas páginas de vendas de alta performance.

Entre em contato agora mesmo e descubra como podemos transformar sua presença online em vendas reais! <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
