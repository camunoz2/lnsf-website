import React, {useState} from 'react'
import Header from '../components/header'
import NavBar from '../components/navbar'

const TopNavigation = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Header open={open} setOpen={setOpen}/>
            <NavBar open={open} setOpen={setOpen}/>
        </div>
    )
}

export default TopNavigation
