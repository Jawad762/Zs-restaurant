import React from 'react'
import MenuItems from '@/components/MenuItems';

const page = async ({params}) => {
    return (
        <MenuItems category={params.category}/>
     )
}

export default page