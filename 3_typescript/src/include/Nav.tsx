import * as S from '../Main.styles';


const Nav = () => {

    return(
        <>
         <S.NavBar>
          <S.Logo>TypeScript</S.Logo>
          <S.NavLinks>
            <S.StyledLink to="/">Home</S.StyledLink>
            <S.StyledLink to="/special">Special</S.StyledLink>
          </S.NavLinks>
      </S.NavBar>
        </>
    )
};

export default Nav;



