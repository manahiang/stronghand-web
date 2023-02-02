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
        <Avatar image='https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg' shape='circle'className='m-2 text0'/>
    </div>
  )
}

export default Blog