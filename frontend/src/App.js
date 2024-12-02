// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import About from './Pages/About/About';
// import Services from './Pages/Services/Services';
// import OnGoingPage from './Pages/OnGoingPage/OnGoingPage';
// import CompletePage from './Pages/CompletePage/CompletePage';
// import Gallery from './Pages/Gallery/Gallery';
// import Contact from './Pages/Contact/Contact';
// import SuccessVerification from './Pages/SuccessVerification/SuccessVerification';
// import VerifyEmail from './Pages/VerifyEmail/VerifyEmail';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <ToastContainer />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path='/services' element={<Services />} />
//         <Route path="/ongoing-page" element={<OnGoingPage />} />
//         <Route path="/complete-page" element={<CompletePage />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/success-verification" element={<SuccessVerification />} />
//         <Route path="/verify-email" element={<VerifyEmail />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default App;


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import OnGoingPage from './Pages/OnGoingPage/OnGoingPage';
import CompletePage from './Pages/CompletePage/CompletePage';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
// import SuccessVerification from './Pages/SuccessVerification/SuccessVerification';
// import VerifyEmail from './Pages/VerifyEmail/VerifyEmail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import SingleProjectPage from './Pages/SingleProjectPage/SingleProjectPage';
import SingleProjectPage2 from './Pages/SingleProjectPage2/SingleProjectPage2';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Function to dynamically load a script
    window.scrollTo(0, 0);
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          console.log(`Script loaded successfully: ${src}`);
          resolve();
        };
        script.onerror = () => {
          console.error(`Failed to load script: ${src}`);
          reject(new Error(`Failed to load script: ${src}`));
        };
        document.body.appendChild(script);
      });
    };

    // Function to load all scripts dynamically
    const loadScripts = async () => {
      try {
        // Load AOS.js
        await loadScript('https://unpkg.com/aos@next/dist/aos.js');
        AOS.init({ duration: 1200 });
        console.log('AOS initialized');

   

        // Load jQuery
        await loadScript('plugins/jQuery/jquery.min.js');
        console.log('jQuery loaded');
     // Load Bootstrap
        await loadScript('plugins/bootstrap/bootstrap.min.js');
        console.log('Bootstrap loaded');
        // Load Slick Carousel
        await loadScript('plugins/slick/slick.min.js');
        await loadScript('plugins/slick/slick-animation.min.js');
        console.log('Slick Carousel loaded');
        //  await loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js')
        // Load Colorbox
        await loadScript('plugins/colorbox/jquery.colorbox.js');
        console.log('Colorbox loaded');

        // Load Shuffle.js
        await loadScript('plugins/shuffle/shuffle.min.js');
        // console.log('Shuffle.js loaded');

        // Load Google Maps API
        await loadScript(
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU'
        );
        console.log('Google Maps API loaded');

        // Load Google Maps Plugin
        await loadScript('plugins/google-map/map.js');
        console.log('Google Maps plugin loaded');

        // Load custom script.js
        await loadScript('js/script.js');
        console.log('Custom script.js loaded');
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    // Load scripts dynamically whenever the route changes
    loadScripts();

    return () => {
      console.log('Cleaning up on route change');
    };
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ongoing-page" element={<OnGoingPage />} />
        <Route path="/complete-page" element={<CompletePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/success-verification" element={<SuccessVerification />} /> */}
        {/* <Route path="/verify-email" element={<VerifyEmail />} /> */}
        <Route path="/single-project/:id" element={<SingleProjectPage />} />
        <Route path="/single-project2/:id" element={<SingleProjectPage2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;





// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom'; // Import useLocation to detect route changes
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import About from './Pages/About/About';
// import Services from './Pages/Services/Services';
// import OnGoingPage from './Pages/OnGoingPage/OnGoingPage';
// import CompletePage from './Pages/CompletePage/CompletePage';
// import Gallery from './Pages/Gallery/Gallery';
// import Contact from './Pages/Contact/Contact';
// import SuccessVerification from './Pages/SuccessVerification/SuccessVerification';
// import VerifyEmail from './Pages/VerifyEmail/VerifyEmail';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import AOS from 'aos';
// import SingleProjectPage from './Pages/SingleProjectPage/SingleProjectPage';
// import SingleProjectPage2 from './Pages/SingleProjectPage2/SingleProjectPage2';

// function App() {
//   const location = useLocation(); // Get the current route location

//   useEffect(() => {
//     // Scroll to the top of the page on route change
//     window.scrollTo(0, 0);

//     // Dynamically load external scripts after the component mounts
//     const loadScript = (src) => {
//       return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = src;
//         script.async = true;
//         script.defer = true;
//         script.onload = resolve;
//         script.onerror = reject;
//         document.body.appendChild(script);
//       });
//     };

//     const loadScripts = async () => {
//       try {
//         // Load AOS.js
//         await loadScript('https://unpkg.com/aos@next/dist/aos.js');
//         AOS.init({ duration: 1200 });

//         // Load other required scripts here...
//         await loadScript('plugins/jQuery/jquery.min.js');
//         await loadScript('plugins/bootstrap/bo/otstrap.min.js');
//         await loadScript('plugins/slick/slick.min.js');
//         await loadScript('plugins/slick/slick-animation.min.js');
//         await loadScript('plugins/colorbox/jquery.colorbox.js');
//         await loadScript('plugins/shuffle/shuffle.min.js');
//         await loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');

//         await loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU');
//         await loadScript('plugins/google-map/map.js');
//         await loadScript('js/script.js');
//       } catch (error) {
//         console.error('Error loading scripts:', error);
//       }
//     };

//     loadScripts();

//     // Listen for route changes and refresh AOS animations
//     AOS.refresh(); // Refresh AOS animations whenever the route changes

//   }, [location]); // Re-run when the route changes

//   return (
//     <div className="App">
//       <Navbar />
//       <ToastContainer />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/ongoing-page" element={<OnGoingPage />} />
//         <Route path="/complete-page" element={<CompletePage />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/success-verification" element={<SuccessVerification />} />
//         <Route path="/verify-email" element={<VerifyEmail />} />
//         <Route path="/single-project/:id" element={<SingleProjectPage />} />
//         <Route path="/single-project2/:id" element={<SingleProjectPage2 />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;
