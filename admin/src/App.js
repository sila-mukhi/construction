import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
// import Sidebar from './Components/Sidebar/Sidebar';
import AddCarousel from './Pages/AddCarousel/AddCarousel';
import ListCarousel from './Pages/ListCarousel/ListCarousel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditCarousel from './Pages/EditCarousel/EditCarousel';
// import Service from '../../frontend/src/Components/Service/Service';
import AddService from './Pages/AddService/AddService';
import ListService from './Pages/ListService/ListService';
import AddProject from './Pages/AddProject/AddProject';
import ListProject from './Pages/ListProject/ListProject';
import AddTestimonial from './Pages/AddTestimonial/AddTestimonial';
import ListTestimonial from './Pages/ListTestimonial/ListTestimonial';
// import Discover from '../../frontend/src/Components/Discover/Discover';
import ListDiscover from './Pages/ListDiscover/ListDiscover';
import AddDiscover from './Pages/AddDiscover/AddDiscover';
import AddOngoing from './Pages/AddOngoing/AddOngoing';
import ListOngoing from './Pages/ListOngoing/ListOngoing';
import AddComplete from './Pages/AddComplete/AddComplete';
import ListComplete from './Pages/ListComplete/ListComplete';
import AddGallery from './Pages/AddGallery/AddGallery';
import ListGallery from './Pages/ListGallery/ListGallery';
import AddContact from './Pages/AddContact/AddContact';
import ListContact from './Pages/ListContact/ListContact';
import EditService from './Pages/EditService/EditService';
import EditProject from './Pages/EditProject/EditProject';
import EditTestimonial from './Pages/EditTestimonial/EditTestimonial';
import EditDiscover from './Pages/EditDiscover/EditDiscover';
import EditOngoing from './Pages/EditOngoing/EditOngoing';
import EditComplete from './Pages/EditComplete/EditComplete';
import EditGallery from './Pages/EditGallery/EditGallery';
import LogIn from './Pages/LogIn/LogIn';
import PrivateComponent from './Pages/PrivateComponent/PrivateComponent'
import Profile from "./Pages/Profile/Profile"
import ChangePassword from './Pages/ChangePassword/ChangePassword';

function App() {
  // const url="http://localhost:4300"
  const url = "https://construction-backend-wp9o.onrender.com";

  return (
    <>
    <ToastContainer/>
    <Navbar/>
      <div className="container-fluid page-body-wrapper">
        {/* <Sidebar /> */}
        <div className="main-panel">
          <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/add-carousel" element={<AddCarousel url={url}/>}/>
            <Route path="/list-carousel" element={<ListCarousel url={url}/>}/>
            <Route path="/edit-carousel/:id" element={<EditCarousel url={url}/>}/>

            <Route path="/add-service" element={<AddService url={url}/>}/>
            <Route path="/list-service" element={<ListService url={url}/>}/>
            <Route path="/edit-service/:id" element={<EditService url={url}/>}/>

            <Route path="/add-project" element={<AddProject url={url}/>}/>
            <Route path="/list-project" element={<ListProject url={url}/>}/>
            <Route path="/edit-project/:id" element={<EditProject url={url}/>}/>

            <Route path="/add-testimonial" element={<AddTestimonial url={url}/>}/>
            <Route path="/list-testimonial" element={<ListTestimonial url={url}/>}/>
            <Route path="/edit-testimonial/:id" element={<EditTestimonial url={url}/>}/>

            <Route path="/add-discover" element={<AddDiscover url={url}/>}/>
            <Route path="/list-discover" element={<ListDiscover url={url}/>}/>
            <Route path="/edit-discover/:id" element={<EditDiscover url={url}/>}/>

            <Route path="/add-ongoing" element={<AddOngoing url={url}/>}/>
            <Route path="/list-ongoing" element={<ListOngoing url={url}/>}/>
            <Route path="/edit-ongoing/:id" element={<EditOngoing url={url}/>}/>

            <Route path="/add-complete" element={<AddComplete url={url}/>}/>
            <Route path="/list-complete" element={<ListComplete url={url}/>}/>
            <Route path="/edit-complete/:id" element={<EditComplete url={url}/>}/>

            <Route path="/add-gallery" element={<AddGallery url={url}/>}/>
            <Route path="/list-gallery" element={<ListGallery url={url}/>}/>
            <Route path="/edit-gallery/:id" element={<EditGallery url={url}/>}/>

            <Route path="/add-contact" element={<AddContact url={url}/>}/>
            <Route path="/list-contact" element={<ListContact url={url}/>}/>

            <Route path="/profile" element={<Profile url={url}/>}/>
            <Route path="/change-password" element={<ChangePassword url={url}/>}/>
           </Route>
           <Route path="/LogIn" element={<LogIn url={url} />} />
          </Routes>
          </div>
          </div>
          </>
  );
}

export default App;
