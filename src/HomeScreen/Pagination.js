import React from 'react'
import Page from './Page'


const Pagination = function () {
    return <div className='container pagination'>
       <Page page={1} />
       <Page page={2} />
       <Page page={3} />
       <Page page={"...."} />
       <Page page={10} />
       <Page page={"next"} />
       
    </div>
}


export default Pagination;