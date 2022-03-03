import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <><div className='container'><Navbar /></div> <Component {...pageProps} /></>
}

export default MyApp