
const Header = ()=> {

    
    return(
        <>

        <header className="header cfixed">

            <h1 className="logo">
                <a href="/"> indigo </a>
            </h1>

            <nav>
                <ul className="gnb">
                   <li><a href="/">HOME</a></li>
                   <li><a href="/introduce">WE ARE</a></li>
                   <li><a href="/work">WORK</a></li>
                   <li><a href="/blog">BLOG</a></li>
                   <li><a href="/contact">CONTACT US</a></li>
                </ul>
            </nav>

            <span className="menu-toggle-btn">
                <span></span>
                <span></span>
                <span></span>
            </span>
            
        </header>

        </>
    )


}

export default Header;
