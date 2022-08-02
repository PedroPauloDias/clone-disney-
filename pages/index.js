import Head from "next/head";
import { Destaques } from "../components/Destaques";
import { CategoryMenu } from "../components/CategoryMenu";
import {Categories} from "../components/Categories"

import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Disney Clone</title>
        <meta name="description" content="Clone Disney +" />
        <meta name="keywords" content=" filmes , series"></meta>
      </Head>

      <div className={styles.main}>
        
        <Destaques />
        <CategoryMenu />
        <Categories />
        <Footer/>
  
      </div>
    </div>
  );
}
