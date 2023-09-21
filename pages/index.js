import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pagina de Vendas</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=0,8.0"></meta>

      </Head>

      <main>
        <div className={styles.banner}>
          
        </div>
        <div classname={styles.subtitle}>
          <p>
            <strong>Aumente suas conversões e impulsione seus negócios com as melhores páginas de vendas do mercado</strong>
          </p>
        </div>

        <div className={`${styles.coluna} ${styles.solucao}`}>
          <p>
            <strong> Você está cansado de ver suas oportunidades de venda escorregarem entre os dedos? Não perca mais tempo!</strong>
            Nossa equipe de especialistas em marketing digital desenvolveu as páginas de vendas mais eficazes e atraentes que vão alavancar seus resultados. <br />
          </p>
          <img src='/aumento.jpg' alt="grafico" />
        </div>
        <div className={styles.coluna}>
          <p>
            <strong><span> Nossas páginas de vendas são cuidadosamente projetadas para capturar a atenção do seu público-alvo e guiá-los em um processo de compra irresistível.</span></strong><br />
            <span> Com elementos estratégicos de persuasão e chamadas de ação convincentes, nossa copy cria uma experiência de compra envolvente, aumentando drasticamente suas taxas de conversão.</span>
          </p>
          <img className={[styles.conversaoC]} src="/coversao.jpg" alt="conversaoC"></img>
        </div>
        <div className={`${styles.diferenciacao} ${styles.coluna}`}>
          <p>
            <strong>Não importa o tipo de produto ou serviço que você ofereça, nossas páginas de vendas personalizadas são feitas sob medida para o seu negócio.</strong><br />
            <span> Desde a construção de landing pages impressionantes até o desenvolvimento de textos persuasivos, lidamos com todos os detalhes para garantir que o seu negócio se destaque da concorrência.</span>
          </p>

          <img src="/marcaR.jpg" alt="marcaregistrada"></img>
        </div>
        <div className={styles.pagesale}>

          <h1 className={styles.centralizar}>PAGINAS DE VENDAS</h1>
          <a href='#'>

            <img src='/paginas.png' alt='paginasvendas'></img>
          </a>

        </div>





        <div className={styles.feedbacks}>
          <h1 className={styles.centralizar}>FEEDBECKS 1</h1>
          <video width="630" height="300" controls>
            <source src='/lead.mp4' alt='feedbacks'></source>
          </video>


        </div>
        <div className={styles.feedbacks2}>





        </div>

        <div className={styles.feedbacks3}>



        </div>
        <div className={[styles.chamada, styles.coluna]}>
          <p>
            <strong>Não perca mais tempo e dinheiro com páginas de vendas genéricas! Aumente seu ROI e conquiste mais clientes hoje mesmo com nossas páginas de vendas de alta performance.</strong><br />
          </p>
        </div>
        <div className={[styles.depoimentos, styles.coluna]}>
          <strong>Entre em contato agora mesmo clicando em "Clique aqui" e descubra como podemos transformar sua presença online em vendas reais!</strong>
        </div>
        <div className={[styles.button, styles.coluna]}>

          <a href='https://contate.me/paginasdvendas' target="_blank" title="whatsapp">
            <img src='/Clique.png' alt='clique aqui'></img>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

          Powered by{'  GustaSANTOS1'}

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


