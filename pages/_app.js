import '../styles/home.css'
import '../styles/nicepage.css'
import '../styles/landing.css'
import '../styles/About.css'
import '../styles/alliances.css'
import '../styles/services.css'
import '../styles/product.css'
import '../styles/loader.css'
import '../styles/globals.css'
import '../styles/navbar.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'




function MyApp({ Component, pageProps }) {
  return (
		<>
		<Script src='https://cdn.tailwindcss.com'/>
			
			

			
			<Component {...pageProps} />
			
		</>
	);
}

export default MyApp
