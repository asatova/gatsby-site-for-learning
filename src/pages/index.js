import  React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import {graphql, Link} from "gatsby";



export default function Home() {
        return (
        <Layout>
            <section className={styles.header}>
                <div>
                <h2>Design</h2>
                    <h3>Develop & Deploy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis</p>
                </div>
                <img src="/rasm.jpg" alt="site banner" />
                </section>
            <Link className={styles.btn} to="/projects" >my projects</Link>
        </Layout>
    )
}

