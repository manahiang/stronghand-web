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
                        <Avatar image='https://imageio.forbes.com/specials-images/imageserve/09kZdVWgJO0tu/960x960.jpg?format=jpg&width=960'
                            size='large' shape='circle' className='m-2' />
                        <p className='name'>Mark Zuckerberg</p>
                        <p className='name'>. Jul22,2023</p>
                        <i className='pi pi-star-fill ml-2' style={{ color: 'yellow' }}></i>
                        <p className='ml-2'>Member-only</p>
                    </div>

                    <h1 className='title '>9 Awesome JavaScript Projects for your Resume</h1>
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
                        <Avatar image='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QIERXhpZgAASUkqAAgAAAACAA4BAgDFAQAAJgAAAJiCAgARAAAA6wEAAAAAAABGVUVSU1RFTldBTERFLCBHRVJNQU5ZIC0gU0VQVEVNQkVSIDAzOiBUZXNsYSBoZWFkIEVsb24gTXVzayBhcnJpdmVzIHRvIGhhdmUgYSBsb29rIGF0IHRoZSBjb25zdHJ1Y3Rpb24gc2l0ZSBvZiB0aGUgbmV3IFRlc2xhIEdpZ2FmYWN0b3J5IG5lYXIgQmVybGluIG9uIFNlcHRlbWJlciAwMywgMjAyMCBuZWFyIEdydWVuaGVpZGUsIEdlcm1hbnkuIE11c2sgaXMgY3VycmVudGx5IGluIEdlcm1hbnkgd2hlcmUgaGUgbWV0IHdpdGggdmFjY2luZSBtYWtlciBDdXJlVmFjIG9uIFR1ZXNkYXksIHdpdGggd2hpY2ggVGVzbGEgaGFzIGEgY29vcGVyYXRpb24gdG8gYnVpbGQgZGV2aWNlcyBmb3IgcHJvZHVjaW5nIFJOQSB2YWNjaW5lcywgYXMgd2VsbCBhcyBHZXJtYW4gRWNvbm9teSBNaW5pc3RlciBQZXRlciBBbHRtYWllciB5ZXN0ZXJkYXkuIChQaG90byBieSBNYWphIEhpdGlqL0dldHR5IEltYWdlcykyMDIwIEdldHR5IEltYWdlc//tAhxQaG90b3Nob3AgMy4wADhCSU0EBAAAAAACABwCUAAKTWFqYSBIaXRpahwCeAHFRlVFUlNURU5XQUxERSwgR0VSTUFOWSAtIFNFUFRFTUJFUiAwMzogVGVzbGEgaGVhZCBFbG9uIE11c2sgYXJyaXZlcyB0byBoYXZlIGEgbG9vayBhdCB0aGUgY29uc3RydWN0aW9uIHNpdGUgb2YgdGhlIG5ldyBUZXNsYSBHaWdhZmFjdG9yeSBuZWFyIEJlcmxpbiBvbiBTZXB0ZW1iZXIgMDMsIDIwMjAgbmVhciBHcnVlbmhlaWRlLCBHZXJtYW55LiBNdXNrIGlzIGN1cnJlbnRseSBpbiBHZXJtYW55IHdoZXJlIGhlIG1ldCB3aXRoIHZhY2NpbmUgbWFrZXIgQ3VyZVZhYyBvbiBUdWVzZGF5LCB3aXRoIHdoaWNoIFRlc2xhIGhhcyBhIGNvb3BlcmF0aW9uIHRvIGJ1aWxkIGRldmljZXMgZm9yIHByb2R1Y2luZyBSTkEgdmFjY2luZXMsIGFzIHdlbGwgYXMgR2VybWFuIEVjb25vbXkgTWluaXN0ZXIgUGV0ZXIgQWx0bWFpZXIgeWVzdGVyZGF5LiAoUGhvdG8gYnkgTWFqYSBIaXRpai9HZXR0eSBJbWFnZXMpHAJ0ABEyMDIwIEdldHR5IEltYWdlcxwCbgAMR2V0dHkgSW1hZ2Vz/+EG3Gh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBkYzpSaWdodHM9IjIwMjAgR2V0dHkgSW1hZ2VzIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMiIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIxMjg4ODI3OTI5IiB4bXBSaWdodHM6V2ViU3RhdGVtZW50PSJodHRwczovL3d3dy5nZXR0eWltYWdlcy5jb20vZXVsYT91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybCIgPgo8ZGM6Y3JlYXRvcj48cmRmOlNlcT48cmRmOmxpPk1hamEgSGl0aWo8L3JkZjpsaT48L3JkZjpTZXE+PC9kYzpjcmVhdG9yPjxkYzpkZXNjcmlwdGlvbj48cmRmOkFsdD48cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPkZVRVJTVEVOV0FMREUsIEdFUk1BTlkgLSBTRVBURU1CRVIgMDM6IFRlc2xhIGhlYWQgRWxvbiBNdXNrIGFycml2ZXMgdG8gaGF2ZSBhIGxvb2sgYXQgdGhlIGNvbnN0cnVjdGlvbiBzaXRlIG9mIHRoZSBuZXcgVGVzbGEgR2lnYWZhY3RvcnkgbmVhciBCZXJsaW4gb24gU2VwdGVtYmVyIDAzLCAyMDIwIG5lYXIgR3J1ZW5oZWlkZSwgR2VybWFueS4gTXVzayBpcyBjdXJyZW50bHkgaW4gR2VybWFueSB3aGVyZSBoZSBtZXQgd2l0aCB2YWNjaW5lIG1ha2VyIEN1cmVWYWMgb24gVHVlc2RheSwgd2l0aCB3aGljaCBUZXNsYSBoYXMgYSBjb29wZXJhdGlvbiB0byBidWlsZCBkZXZpY2VzIGZvciBwcm9kdWNpbmcgUk5BIHZhY2NpbmVzLCBhcyB3ZWxsIGFzIEdlcm1hbiBFY29ub215IE1pbmlzdGVyIFBldGVyIEFsdG1haWVyIHllc3RlcmRheS4gKFBob3RvIGJ5IE1hamEgSGl0aWovR2V0dHkgSW1hZ2VzKTwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5nZXR0eWltYWdlcy5jb20vZGV0YWlsLzEyODg4Mjc5Mjk/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRt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'
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