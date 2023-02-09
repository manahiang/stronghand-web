import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'primereact/avatar'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css"
import { BsFillPlayCircleFill } from "react-icons/bs";
import Markdown from 'markdown-to-jsx';
import Footer from '../components/footer';
import data from "../language/blogs.json"
const fb = 'https://web.facebook.com/sh.homefix';
const telegram = 'https://t.me/sh.homefix';

function BlogDetail() {
    const file = ["title.md", "des.md", "footer.md", "header.md", "body.md"]
    const [post, setPost] = useState("");
    useEffect(() => {
        import(`../markdown/${file[1]}`)
            .then(res => {
                fetch(res.default)
                    .then(response => response.text())
                    .then(response => setPost(response))
            })
    })

    return (
        <>
            <div style={{ backgroundColor: 'white' }}>
                {
                    data.data.map((item)){
                        return()
                    }
                    
                    
                }
            </div>
            <div className='mt-4'>
                <Footer />
            </div>
        </>
    )
}

export default BlogDetail