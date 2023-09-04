import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pagina de Vendas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className={styles.banner}>

          <h1 className={styles.title}>
            Impulsione suas vendas com páginas de vendas poderosas e eficazes!

          </h1>





        </div>
        <div classname={styles.subtitle}>
          <p>
            <strong>Aumente suas conversões e impulsione seus negócios com as melhores páginas de vendas do mercado</strong>

          </p>
          <div>

          </div>
        </div>

        <div className={styles.solucao}>
          <p>
            <strong> Você está cansado de ver suas oportunidades de venda escorregarem entre os dedos? Não perca mais tempo!</strong><br/>
            Nossa equipe de especialistas em marketing digital desenvolveu as páginas de vendas mais eficazes e atraentes que vão alavancar seus resultados.

          </p>
          <p>
            
          </p>

          <img src='/aumento.jpg' alt="grafico" />

        </div>


        <div className={[styles.elementos,styles.coluna]}>

          <p>

            <strong> Nossas páginas de vendas são cuidadosamente projetadas para capturar a atenção do seu público-alvo e guiá-los em um processo de compra irresistível.</strong>

          </p>
          <p>
            <strong> Com elementos estratégicos de persuasão e chamadas de ação convincentes, nossa copy cria uma experiência de compra envolvente, aumentando drasticamente suas taxas de conversão.</strong>

          </p>

          <img className={styles.conversaoC} src="/coversao.jpg" alt="conversaoC"></img> 
          
          </div>

          
        

          
         
          

        



        <div className={styles.diferenciacao}>

          <p>


            <strong> Não importa o tipo de produto ou serviço que você ofereça, nossas páginas de vendas personalizadas são feitas sob medida para o seu negócio.</strong>

          </p>
          <p>
            <strong>Desde a construção de landing pages impressionantes até o desenvolvimento de textos persuasivos, lidamos com todos os detalhes para garantir que o seu negócio se destaque da concorrência.</strong>

          </p>

          


        </div>

        <div className={styles.imageX}>

        <img src="/marcaR.jpg" alt="marcaregistrada"></img>

        </div>

        <div className={styles.chamada}>

          <p>

            <strong>Não perca mais tempo e dinheiro com páginas de vendas genéricas! Aumente seu ROI e conquiste mais clientes hoje mesmo com nossas páginas de vendas de alta performance.</strong>
          </p>





        </div>

        <div className={styles.depoimentos}>
          <strong>Entre em contato agora mesmo e descubra como podemos transformar sua presença online em vendas reais!</strong>

        </div>

        <div className={styles.button}>


          <a href='https://contate.me/paginasdvendas' target="_blank" title="whatsapp">  <button className='button'>Clique Aqui</button> </a>





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

  
