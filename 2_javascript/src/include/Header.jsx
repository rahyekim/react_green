import { Link } from "react-router-dom";

const Header = ( ) => {

    return (

        <>
        <nav>
           <Link to='/'>Home</Link> |
           <Link to='/flex'> float vs flex vs grid</Link> |
           <Link to='/es6'>Es6 인트로</Link>
        </nav>
        
        
        
        </>
    )
}

export default Header;