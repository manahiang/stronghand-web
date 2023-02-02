import React from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react';
import { Avatar } from 'primereact/avatar'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css"
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import { Tooltip } from 'primereact/tooltip';


function BlogDetail() {
    return (
        <div className='blog_detail_container text-white' style={{ maxWidth: '1200px', height: 'auto', margin: 'auto', marginTop: '100px' }}>
            <div className='flex'>
                <Avatar image='https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg'
                size='xlarge' shape='circle' className='m-2' />
                <div className=''>
                    <h1 className='title'></h1>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail