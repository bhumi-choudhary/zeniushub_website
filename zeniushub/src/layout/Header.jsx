import React from 'react'
import Button from '../component/Button'
import { Undo2 } from "lucide-react";
const Header = () => {
    return (
        <div>
            <Button text='Back'
                variant='back'
                icon={<Undo2 />}
            />

        </div>
    )
}

export default Header 