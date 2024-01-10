import FooterFilter from "../FooterFilter";
import Header from "../Header"

const Layout = ({children}) => {
    return(
        <div>
            <Header/>
            <FooterFilter />
            {children}

        </div>
    )
}

export default Layout;