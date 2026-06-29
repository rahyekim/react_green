import { createRoot } from 'react-dom/client';
//스타일드 컴포넌트를 불러옴 
// 별칭을 사용하지않을 경우: {Container,Header,Sidebar,Nav등등등 } from './css/AppLayout.styles'
// import * as S from './css/Layout.styles';
import * as S from './css/AppLayout.styles';

interface LayoutProps {
  children: React.ReactNode;

}

function App ({children} : LayoutProps) {  //엄격모드제거 

  return(
    <>
    <S.AppContainer>
      <S.Header>럭셔리 플랫폼 MVP</S.Header>
      <S.MainContent>{children}</S.MainContent>
      <S.BottomNav>
        <button>렌탈/스토어</button>
        <button>수선/복원</button>
        <button>마이페이지</button>
      </S.BottomNav>
    </S.AppContainer>
    </>
  )

}

createRoot(document.getElementById('root')!).render(
    <App>
      <div></div>
    </App>
)
