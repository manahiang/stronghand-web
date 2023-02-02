import React from 'react'
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


function Blog() {
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
        <div className='container-blog text-white' style={{ maxWidth: '1200px', height: 'auto', margin: 'auto', marginTop: '100px' }}>
            
            <div className='flex align-items-center justify-content-between'>
                <div className=''>

                    <div className='flex align-items-center'>
                        <Avatar image='https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg'
                            size='large' shape='circle' className='m-2' />
                        <p className='name'>bill gates</p>
                        <p className='name'>. Jul22,2023</p>
                        <i className='pi pi-star-fill ml-2' style={{color:'yellow'}}></i>
                        <p className='ml-2'>Member-only</p>
                    </div>

                    <h1 className='title'>Create A PopUp Window Using JS And React</h1>
                    <p className='des font-bold'>A small guide on creating the infamous “popup”
                        window that is both a blessing and a curse for users with the help
                        of JS and React. Let’s Review 👓 Learning new languages and paradigms
                        (especially within...</p>

                    <div className='flex align-items-center '>
                        <Button label='Javascript' className='p-button-rounded p-button-secondary' />
                        <p className='time-read ml-4 font-light'>6 min</p>
                        <p className='ml-4 font-light'>read Based on your reading history</p>
                        <i className=' ml-3'></i>

                        <Tooltip target=".custom-target-icon" />
                        <i className="custom-target-icon pi pi-bookmark  p-overlay-badge ml-3"
                            data-pr-tooltip="Save"
                            data-pr-position="right"
                            data-pr-at="right+5 top"
                            data-pr-my="">
                        </i>

                        <Tooltip target=".custom-target-icon" />
                        <i className="custom-target-icon pi pi-minus-circle p-overlay-badge ml-3"
                            data-pr-tooltip="Show less this like"
                            data-pr-position="right"
                            data-pr-at="right+5 top"
                            data-pr-my="left center-2">
                        </i>

                        {/* TieredMenu */}
                        <i className='pi pi-ellipsis-h ml-3' onClick={(e) => ell.current.toggle(e)}></i>
                        <div className="card flex justify-content-center">
                            <TieredMenu model={items} popup ref={ell} onClick={(e) => ell.current.toggle(e)} />
                        </div>
                    </div>
                </div>

                <img src='https://miro.medium.com/freeze/fit/c/112/112/1*QC5IVFNUcoviMOe4mF5l1A.gif' alt='pop' />
            </div>
            <hr/>
        </div>
    )
}

export default Blog