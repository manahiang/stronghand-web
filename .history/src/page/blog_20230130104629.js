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
        <div className='container-blog text-white ' style={{ maxWidth: '1200px', height: 'auto', margin: 'auto', marginTop: '100px' }}>

            {/* Layout 1 */}

            <div className='flex align-items-center justify-content-between mt-8'>
                <div className='m-2'>

                    <div className='flex align-items-center'>
                        <Avatar image='https://imageio.forbes.com/specials-images/imageserve/09kZdVWgJO0tu/960x960.jpg?format=jpg&width=960'
                            size='large' shape='circle' className='m-2' />
                        <p className='name'>Mark Zuckerberg</p>
                        <p className='name'>. Jul22,2023</p>
                        <i className='pi pi-star-fill ml-2' style={{ color: 'yellow' }}></i>
                        <p className='ml-2'>Member-only</p>
                    </div>

                    <Link to='blog-detail' className='no-underline text-white'><h1 className='title '>How to create a Modal
                        Component in React from basic to advanced?</h1>
                        <p className='des font-bold mr-8'>
                            If you are a frontend developer, I think you know that modal is an
                            ubiquitous UI elements on the web. Today I will show you how to</p></Link>

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
                <img src='https://miro.medium.com/fit/c/224/224/0*sk-gGCWt8ZrGY9z4' className='w-2 m-2' alt='pop' />
            </div>
            <hr />
{/* 
            Layout 3 */}

            <div className='flex align-items-center justify-content-between mt-8'>
                <div className='m-2'>

                    <div className='flex align-items-center'>
                        <Avatar image=''
                            size='large' shape='circle' className='m-2' />
                        <p className='name'>Mark Zuckerberg</p>
                        <p className='name'>. Jul22,2023</p>
                        <i className='pi pi-star-fill ml-2' style={{ color: 'yellow' }}></i>
                        <p className='ml-2'>Member-only</p>
                    </div>

                    <Link to='blog-detail' className='no-underline text-white'><h1 className='title '>How to create a Modal
                        Component in React from basic to advanced?</h1>
                        <p className='des font-bold mr-8'>
                            If you are a frontend developer, I think you know that modal is an
                            ubiquitous UI elements on the web. Today I will show you how to</p></Link>

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
                <img src='https://miro.medium.com/fit/c/224/224/0*gL_ojV8R9rppK7ZL.png' className='w-2 m-2' alt='pop' />
            </div>
            <hr />
            <div className='flex align-items-center justify-content-between mt-8'>
                <div className='m-2'>

                    <div className='flex align-items-center'>
                        <Avatar image='https://imageio.forbes.com/specials-images/imageserve/09kZdVWgJO0tu/960x960.jpg?format=jpg&width=960'
                            size='large' shape='circle' className='m-2' />
                        <p className='name'>Mark Zuckerberg</p>
                        <p className='name'>. Jul22,2023</p>
                        <i className='pi pi-star-fill ml-2' style={{ color: 'yellow' }}></i>
                        <p className='ml-2'>Member-only</p>
                    </div>

                    <Link to='blog-detail' className='no-underline text-white'><h1 className='title '>How to Use Google Analytics on ReactJS in 5 Minutes</h1>
                        <p className='des font-bold mr-8'>
                            I’m sharing this guide on how to use Google Analytics with Universal Analytics property on ReactJS. A bit of introduction related with
                            two products that we’re going to talk about: ReactJS is an SPA (Single Page</p></Link>

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
                <img src='https://miro.medium.com/fit/c/224/224/1*v6DWrSpGPYINJNHuFRrAIg.png' className='w-2 m-2' alt='pop' />
            </div>
            <hr />
        </div>
    )
}

export default Blog