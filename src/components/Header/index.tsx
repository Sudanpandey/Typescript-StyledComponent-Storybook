import React, {FC} from 'react'

import {styled} from "src/theme"

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


const Header: FC  = () => {    
    return(
        <Wrapper>
            <div>Hello</div>
            <div>Hello</div>        
            <div>Hello</div>
        </Wrapper>
    )
}

export default Header;