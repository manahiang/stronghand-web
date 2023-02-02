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
const fb = 'https://web.facebook.com/sh.homefix';
const telegram = 'https://t.me/sh.homefix';


function BlogDetail() {
    const[title,settile]=useState("");
    useEffect(()=>{
        import("../markdown/title.md")
        .then(res=>{
            fetch(res.default)
            .then(response=>response.text())
            .then(response=>settile(response))
        })
    })

    return (
        <div style={{backgroundColor:'white'}}>
        <div className='blog_detail_container text-color' style={{ maxWidth: '1200px', height: 'auto', margin: 'auto', marginTop: '100px' }}>
            <div className='flex align-items-center' style={{bakckgroundColor:'red'}}>
                <Avatar image='https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg'
                    size='xlarge' shape='circle' className='m-2' />
                <div className=''>
                    <p className='title text'>Bill Gates</p>
                    <div className='flex align-items-center'>
                        <p>Nov 8,2023</p>
                        <p className='ml-2'>-</p>
                        <p className='ml-2'>9mn read</p>
                        <p className='ml-2'>-</p>
                        <i className='pi pi-star ml-2 -mt-1'></i>
                        <p className='ml-2'>Member-only</p>
                        <Link to=""><BsFillPlayCircleFill className='text-white ml-4' /></Link>
                        <Link to="" className='no-underline text white'><p className='text-white ml-1'>Listen</p></Link>
                    </div>
                </div>
                <a href={fb} className='text-color'><i className='pi pi-facebook ml-8 text-2xl'></i></a>
                <a href={telegram} className='text-color'><i className='pi pi-telegram ml-3 text-2xl'></i></a>

            </div>
            <h1 className='m-2 mt-4 font-bold'>9 Awesome JavaScript Projects for your Resume</h1>
            <h2 className='m-2 mt-4 font-normal'>Build projects & get a high-paying developer job</h2>
            <div style={{ width: '1200px',backgroundColor:'white',marginTop:'50px'}} className="">
                <img src='https://miro.medium.com/v2/resize:fit:786/0*sk-gGCWt8ZrGY9z4' alt='' className='w-full'/>

                {/* markdown file */}

                <div className='m-2 mt-8' style={{color:'black'}}>
                    <Markdown>
                        {title}
                    </Markdown>
                </div>
            </div>
            <div>
            </div>
        </div>
        </div>
    )
}

export default BlogDetail