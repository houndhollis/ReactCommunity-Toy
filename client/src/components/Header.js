import React from 'react'
import { HeaderContainer,HeaderInner,Title,ImgBox} from '../style/HeaderCSS'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <HeaderContainer>
      <HeaderInner>
        <Title>
         <Link to={'/'}><span>Omoide</span></Link>
        </Title>
        <ImgBox>
          <Link to={'/post'}><img src={`${process.env.PUBLIC_URL}/assets/writing.png`}/></Link>
          <Link to={'/login'}><span>로그인</span></Link>
          {/* <img src={`${process.env.PUBLIC_URL}/assets/user.png`}/> */}
        </ImgBox>
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header