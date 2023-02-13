import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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

async function BlogDetail() {
    const { id } = useParams();
    console.log(id)
    
    //const file = ["title.md", "des.md", "footer.md", "header.md", "body.md"]
    const [post, setPost] = useState("");
    const [mdFileName, setMdFileName] = useState("");

    // console.log(mdFileName);
    // const r = import(`../markdown/${mdFileName}`);
    // // const res = await fetch(r.default);
    // // const p = await res.text();
    // setPost(r);
    // //console.log(p);
    // console.log(r)

    useEffect(() => {
        async function DynamicImport() {
            setMdFileName(data.data[id].description.mdFileName);
            const rs = await  import(`../markdown/${mdFileName}`);
            console.log(rs)
        }
       
        DynamicImport();
            // .then(res => {
            //     fetch(res.default)
            //         .then(response => {
            //             response.text();
            //             setPost(response)
            //         })
                    
            // })
            
    }, [mdFileName, id]);

    
    console.log(post);
    // console.log('hi')

    return (
        <div>hi</div>
    )
   
}

export default BlogDetail