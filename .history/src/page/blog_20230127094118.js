import React from 'react'

import { Avatar } from 'primereact/avatar'

function Blog() {
  return (
    <div className='container-blog m-2' style={{maxWidth:'1200px', height:'auto',margin:'auto'}}>
        <Avatar image='https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg' size='xlarg' shape='circle'/>
    </div>
  )
}

export default Blog