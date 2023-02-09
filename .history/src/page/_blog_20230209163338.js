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
import Footer from '../components/footer';
import data from "../language/blogs.json"

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
        <>
            <div className='surface-50'>
                {
                    data.data[1].map((item, index) =>

                        <div className='container-blog text-white ' style={{ maxWidth: '1200px', height: 'auto', margin: 'auto', paddingTop: '50px', paddingBottom: '20px' }}>
                            {/* Layout 1 */}

                            <div className='flex align-items-center justify-content-between mt-8 text-color'>
                                <div className='m-2'>

                                    <div className='flex align-items-center'>
                                        <Avatar image={item.profile.image}
                                            size='large' shape='circle' className='m-2' />
                                        <p className='name'>{item.profile.author}</p>
                                        <p className='name ml-2'>{item.profile.date}</p>
                                        <i className='pi pi-star-fill ml-2' style={{ color: '#F2921D' }}></i>
                                        <p className='ml-2 member'>Member-only</p>
                                    </div>

                                    <Link to='blog-detail' className='no-underline text-color'><h1 className='title '>{item.headline.title}</h1>
                                        <p className='des font-bold mr-8 des'>
                                            {item.headline.dec}</p></Link>

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
                                <img src={item.headline.pic} className='m-2 img' alt='pop' />
                            </div>

                            <hr />
                        </div>

                    )
                }
            </div>

            <div className='mt-4'>
                <Footer />
            </div>
        </>
    )
}

export default Blog