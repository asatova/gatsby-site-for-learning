import  React from "react"
import Layout from "../components/Layout";
import * as styles from "../styles/projects.module.css"
export default function Home() {
    return (
        <Layout>
        <section>
            <div className={styles.portfolio}>
                <h2>Design</h2>
                <h3>Develop & projects</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis</p>
            </div>
        </section>
        </Layout>
    )
}
