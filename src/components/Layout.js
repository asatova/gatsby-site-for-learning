import  React from "react"
import {Link} from "gatsby";
import Navbar from "./Navbar";
import '../styles/global.css'
export default function Layout({ children }) {
    return (
       <div className="layout">
           <Navbar />
           <div className="content">
               { children }
           </div>
           <footer>
               <p>Copyright 2021</p>
           </footer>
       </div>
    )
}
