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
                    <img src='https://miro.medium.com/fit/c/168/168/1*UhDmsFamDWhg33YQ_hwHhg.png' className='w-2 m-2 img' alt='pop' />
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
                    <img src='https://miro.medium.com/fit/c/168/168/1*3SjDVyFY09xZ7NYMO5kj0g.png' className='w-2 m-2 img' alt='pop' />
                </div>
                <hr />

                {/* Layout3 */}

                <div className='flex align-items-center justify-content-between mt-8 text-color'>
                    <div className='m-2'>

                        <div className='flex align-items-center'>
                            <Avatar image='data:image/jpeg;base64,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'
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
                    <img src='https://miro.medium.com/fit/c/168/168/0*SCAJY_j3ywJE8YNK' className='w-2 m-2 img' alt='pop' />
                </div>
                <hr />

            </div>
        </div>
    )
}

export default Blog