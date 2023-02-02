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
        <div className='container-blog text-white m-2' style={{ maxWidth: '1200px', height: 'auto', margin: 'auto', marginTop: '100px' }}>

            {/* Layout 1 */}

            <div className='flex align-items-center justify-content-between'>
                <div className=''>

                    <div className='flex align-items-center'>
                        <Avatar image='https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg'
                            size='large' shape='circle' className='m-2' />
                        <p className='name'>bill gates</p>
                        <p className='name'>. Jul22,2023</p>
                        <i className='pi pi-star-fill ml-2' style={{ color: 'yellow' }}></i>
                        <p className='ml-2'>Member-only</p>
                    </div>

                    <h1 className='title'>Create A PopUp Window Using JS And React</h1>
                    <p className='des font-bold mr-8'>A small guide on creating the infamous “popup”
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

                <img src='https://miro.medium.com/freeze/fit/c/112/112/1*QC5IVFNUcoviMOe4mF5l1A.gif' className='w-3' alt='pop' />
            </div>
            <hr />

            {/* Layout2 */}

            <div className='flex align-items-center justify-content-between mt-8'>
                <div className=''>

                    <div className='flex align-items-center'>
                        <Avatar image='data:image/jpeg;base64,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'
                            size='large' shape='circle' className='m-2' />
                        <p className='name'>bill gates</p>
                        <p className='name'>. Jul22,2023</p>
                        <i className='pi pi-star-fill ml-2' style={{ color: 'yellow' }}></i>
                        <p className='ml-2'>Member-only</p>
                    </div>

                    <h1 className='title '>Create A PopUp Window Using JS And React</h1>
                    <p className='des font-bold mr-8'>Build projects & get a high-paying developer job — If you want 
                    to learn more about tech, subscribe to my brand new YouTube Channel, where I explain complex 
                    topics in a crisp & sharp way to skill you up! →</p>

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
                <img src='https://miro.medium.com/fit/c/112/112/0*0Yu3JA_vjCwNjmXl' className='w-3' alt='pop' />
            </div>
            <hr />

            {/* Layout3 */}
            <div className='flex align-items-center justify-content-between mt-8'>
                <div className=''>

                    <div className='flex align-items-center'>
                        <Avatar image='https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg'
                            size='large' shape='circle' className='m-2' />
                        <p className='name'>bill gates</p>
                        <p className='name'>. Jul22,2023</p>
                        <i className='pi pi-star-fill ml-2' style={{ color: 'yellow' }}></i>
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
            <hr />
        </div>
    )
}

export default Blog