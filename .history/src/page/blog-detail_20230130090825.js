import React from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react';
import { Avatar } from 'primereact/avatar'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css"
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import { Tooltip } from 'primereact/tooltip';


function BlogDetail() {
    const ell = useRef(null);
    const items =
        [
            {
                label: 'Mute this author'
            },
            {
                label: 'Report'
            }
        ]
    return (
        <div className='blog_detail_container text-white' style={{ maxWidth: '1200px', height: 'auto', margin: 'auto', marginTop: '100px' }}>

            <div className='flex align-items-center '>
                <Avatar image='https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg'
                    size='xlarge' shape='circle' className='m-2' />
                <div className=''>
                    <p className='title'>This is the name</p>
                    <div className='flex align-items-center'>
                        <p>Nov 8,2023</p>
                        <p className='ml-2'>-</p>
                        <p className='ml-2'>9mn read</p>
                        <p className='ml-2'>-</p>
                        <i className='pi pi-star ml-2 -mt-1'></i>
                        <p className='ml-2'>Member-only</p>
                        <Link to=""><BsFillPlayCircleFill className='text-white ml-2' /></Link>
                        <Link to="" className='no-underline text white'><p className='text-white ml-1'>Listen</p></Link>
                    </div>
                </div>
                <i className='pi pi-facebook ml-3 text-xl'></i>
                <i className='pi pi-telegram ml-3 text-xl'></i>
               
                {/* Space */}
                <i className='pi pi-bookmark ml-8 text-xl text-xl'></i>
               


            </div>
            <h1 className='m-2 mt-4 font-bold'>9 Awesome JavaScript Projects for your Resume</h1>
            <h2 className='m-2 mt-4 font-normal'>Build projects & get a high-paying developer job</h2>
            <div style={{ width: '1000px' }}>
                <img src='https://miro.medium.com/max/1400/0*0Yu3JA_vjCwNjmXl' alt='' className='w-full m-2' />
            </div>
            <div>
            </div>
        </div>
    )
}

export default BlogDetail