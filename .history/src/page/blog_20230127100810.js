import React from 'react'
import { Avatar } from 'primereact/avatar'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import 'primeicons/primeicons.css';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeflex/primeflex.min.css"


function Blog() {
  return (
    <div className='container-blog ' style={{maxWidth:'1200px', height:'auto',margin:'auto'}}>
        <div className='flex align-items-center'>
        <Avatar image='https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg'
         size='large' shape='circle'className='m-2'/>
         <p className='name'>bill gates</p>
         <p className='name'>. Jul22,2023</p>
         <p className='name'>. Jul22,2023</p>
         <i className='pi-star-fill'>. Jul22,2023</i>
         <p className='name'>Member-only</p>
        </div>
    </div>
  )
}

export default Blog