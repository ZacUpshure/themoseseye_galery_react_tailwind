import Navbar from './../Navbar';
import Footer from './../Footer';
import { TagContextProvider } from '../../context/TagContext';


const Layout = ({children}) => {
    return (
        <>
        <TagContextProvider>
            <header className='sticky top-0 bg-white z-10'>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </TagContextProvider>
    </>
    )
  }
  
  export default Layout