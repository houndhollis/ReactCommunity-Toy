import React from 'react'
import { HeaderContainer,HeaderInner,Title,ImgBox} from '../style/HeaderCSS'
import { Link ,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import firebase from '../firebase'
import { RootState } from '../Reducer/store'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state:RootState) => state.user)

  return (
    <HeaderContainer>
      <HeaderInner>
        <Title>
         <Link to={'/'}><span>Omoide</span></Link>
        </Title>
        <ImgBox>
          <Link to={'/post'}><img src={`${process.env.PUBLIC_URL}/assets/writing.png`} alt='글쓰기'/></Link>
          {user.accessToken ==='' ? <Link to={'/login'}><span>로그인</span></Link>
          :
          <>
          <Link to={'/mypage'}><span>마이 페이지</span></Link>
          <span onClick={()=>{firebase.auth().signOut();navigate('/')}}>로그아웃</span>
          </>
          }
        </ImgBox>
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header