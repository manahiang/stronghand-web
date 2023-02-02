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
        <div className='surface-50'>
            <div className='container-blog text-white ' style={{ maxWidth: '1200px', height: 'auto', margin: 'auto', paddingTop: '50px' }}>

                {/* Layout 1 */}

                <div className='flex align-items-center justify-content-between mt-8 text-color'>
                    <div className='m-2'>

                        <div className='flex align-items-center'>
                            <Avatar image='https://imageio.forbes.com/specials-images/imageserve/09kZdVWgJO0tu/960x960.jpg?format=jpg&width=960'
                                size='large' shape='circle' className='m-2' />
                            <p className='name'>Mark Zuckerberg</p>
                            <p className='name'>. Jul22,2023</p>
                            <i className='pi pi-star-fill ml-2' style={{ color: '#F2921D' }}></i>
                            <p className='ml-2 member'>Member-only</p>
                        </div>

                        <Link to='blog-detail' className='no-underline text-color'><h1 className='title '>10 Concepts to Improve Your Mastery of
                            JavaScript</h1>
                            <p className='des font-bold mr-8 des'>
                                JavaScript is unarguably one of the most popular programming languages in the world and is used to create interactive
                                websites and web applications. For developers, learning JavaScript can lead to a</p></Link>

                        <div className='flex align-items-center '>
                            <Button label="Javascript" className="p-button-rounded p-button-secondary" />
                            <p className='time-read ml-4 font-light mn'>6 min</p>
                            <p className='ml-4 font-light read'>read Based on your reading history</p>
                            <i className=' ml-3'></i>

                            <Tooltip target=".custom-target-icon" />
                            <i className="custom-target-icon pi pi-bookmark  p-overlay-badge ml-3 book"
                                data-pr-tooltip="Save"
                                data-pr-position="right"
                                data-pr-at="right+5 top"
                                data-pr-my="">
                            </i>

                            <Tooltip target=".custom-target-icon" />
                            <i className="custom-target-icon pi pi-minus-circle p-overlay-badge ml-3 book"
                                data-pr-tooltip="Show less this like"
                                data-pr-position="right"
                                data-pr-at="right+5 top"
                                data-pr-my="left center-2">
                            </i>

                            {/* TieredMenu */}
                            <i className='pi pi-ellipsis-h ml-3 book' onClick={(e) => ell.current.toggle(e)}></i>
                            <div className="card flex justify-content-center">
                                <TieredMenu model={items} popup ref={ell} onClick={(e) => ell.current.toggle(e)} />
                            </div>
                        </div>
                    </div>
                    <img src='https://miro.medium.com/fit/c/224/224/0*sk-gGCWt8ZrGY9z4' className='w-2 m-2 img' alt='pop' />
                </div>
                <hr />
                
                {/* Layout2 */}

                <div className='flex align-items-center justify-content-between mt-8 text-color'>
                    <div className='m-2'>
                        <div className='flex align-items-center'>
                            <Avatar image='https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg'
                                size='large' shape='circle' className='m-2' />
                            <p className='name'>Bill Gates</p>
                            <p className='name'>. Jul22,2023</p>
                            <i className='pi pi-star-fill ml-2' style={{ color: '#F2921D' }}></i>
                            <p className='ml-2 member'>Member-only</p>
                        </div>

                        <Link to='blog-detail' className='no-underline text-color'><h1 className='title '>Build a full-featured Modal dialog Form with React</h1>
                            <p className='des font-bold mr-8 des'>
                                
How to create a form in a modal that pops on click. — In this tutorial, you’ll create a form in a modal with React. The Modal pops up on a button click. A form is a separate component from the Modal and can</p></Link>

                        <div className='flex align-items-center '>
                            <Button label="Javascript" className="p-button-rounded p-button-secondary" />
                            <p className='time-read ml-4 font-light mn'>6 min</p>
                            <p className='ml-4 font-light read'>read Based on your reading history</p>
                            <i className=' ml-3'></i>

                            <Tooltip target=".custom-target-icon" />
                            <i className="custom-target-icon pi pi-bookmark  p-overlay-badge ml-3 book"
                                data-pr-tooltip="Save"
                                data-pr-position="right"
                                data-pr-at="right+5 top"
                                data-pr-my="">
                            </i>

                            <Tooltip target=".custom-target-icon" />
                            <i className="custom-target-icon pi pi-minus-circle p-overlay-badge ml-3 book"
                                data-pr-tooltip="Show less this like"
                                data-pr-position="right"
                                data-pr-at="right+5 top"
                                data-pr-my="left center-2">
                            </i>

                            {/* TieredMenu */}
                            <i className='pi pi-ellipsis-h ml-3 book' onClick={(e) => ell.current.toggle(e)}></i>
                            <div className="card flex justify-content-center">
                                <TieredMenu model={items} popup ref={ell} onClick={(e) => ell.current.toggle(e)} />
                            </div>
                        </div>
                    </div>
                    <img src='https://miro.medium.com/fit/c/224/224/0*sk-gGCWt8ZrGY9z4' className='w-2 m-2 img' alt='pop' />
                </div>
                <hr />

                <div className='flex align-items-center justify-content-between mt-8 text-color'>
                    <div className='m-2'>

                        <div className='flex align-items-center'>
                            <Avatar image='https://imageio.forbes.com/specials-images/imageserve/09kZdVWgJO0tu/960x960.jpg?format=jpg&width=960'
                                size='large' shape='circle' className='m-2' />
                            <p className='name'>Mark Zuckerberg</p>
                            <p className='name'>. Jul22,2023</p>
                            <i className='pi pi-star-fill ml-2' style={{ color: '#F2921D' }}></i>
                            <p className='ml-2 member'>Member-only</p>
                        </div>

                        <Link to='blog-detail' className='no-underline text-color'><h1 className='title '>10 Concepts to Improve Your Mastery of
                            JavaScript</h1>
                            <p className='des font-bold mr-8 des'>
                                JavaScript is unarguably one of the most popular programming languages in the world and is used to create interactive
                                websites and web applications. For developers, learning JavaScript can lead to a</p></Link>

                        <div className='flex align-items-center '>
                            <Button label="Javascript" className="p-button-rounded p-button-secondary" />
                            <p className='time-read ml-4 font-light mn'>6 min</p>
                            <p className='ml-4 font-light read'>read Based on your reading history</p>
                            <i className=' ml-3'></i>

                            <Tooltip target=".custom-target-icon" />
                            <i className="custom-target-icon pi pi-bookmark  p-overlay-badge ml-3 book"
                                data-pr-tooltip="Save"
                                data-pr-position="right"
                                data-pr-at="right+5 top"
                                data-pr-my="">
                            </i>

                            <Tooltip target=".custom-target-icon" />
                            <i className="custom-target-icon pi pi-minus-circle p-overlay-badge ml-3 book"
                                data-pr-tooltip="Show less this like"
                                data-pr-position="right"
                                data-pr-at="right+5 top"
                                data-pr-my="left center-2">
                            </i>

                            {/* TieredMenu */}
                            <i className='pi pi-ellipsis-h ml-3 book' onClick={(e) => ell.current.toggle(e)}></i>
                            <div className="card flex justify-content-center">
                                <TieredMenu model={items} popup ref={ell} onClick={(e) => ell.current.toggle(e)} />
                            </div>
                        </div>
                    </div>
                    <img src='https://miro.medium.com/fit/c/224/224/0*sk-gGCWt8ZrGY9z4' className='w-2 m-2 img' alt='pop' />
                </div>
                <hr />

            </div>
        </div>
    )
}

export default Blog