import "./App.css";
import "./Styles/animations.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Artists from "./Components/Artists";
import New from "./Components/New";
import SingleArtist from "./Components/SingleArtist";
import SingleArtist2 from "./Components/SingleArtist2";
import SingleArtist2Fetched from "./Components/SingleArtist2Fetched";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exhibition from "./Components/Exhibition";
import Counter from "./Components/Counter";
import RealFooter from "./Components/RealFooter";
import EventsandPrograms from "./Components/EventsandPrograms";
import Gallery from "./Components/Gallery";
import SingleExhebition from "./Components/SingleExhebition";
import Hero2 from "./Components/Hero2";
import Dashboard from "./Dashboard/Dashboard";
import AboutUs from "./Components/Aboutus";
import ContactUs from "./Components/Contactus";
import ContactUs2 from "./Components/contactus2";
import Hero3 from "./Components/Hero3";
import Section21 from "./Components/Section21";
import Hero4 from "./Components/Hero4";
import DashboardHome2 from "./Dashboard/DashboardHome2";
import DashboardHome from "./Components/DashboardHome";
import ArtistDashboard from "./Dashboard/ArtistDashboard";
import DashboardExperience from "./Dashboard/DashboardExperience";
import DashboardSkills from "./Dashboard/DashboardSkills";
import DashboardAbout from "./Dashboard/DashboardAbout";
import AddArtistForm from "./Components/AddArtistForm";
import ExhibitionAddForm from "./Components/ExhibitionAddForm";
import DashboardGalleries from "./Dashboard/DashboardGallery";
import ProtectedRoute from "./Components/ProtectedRoute";
import AdminLogin from "./Components/Adminlogin";
import TestPdfViewer from "./Components/TestPdfViewer";
import Newsletter from "./Components/Newsletter";
import Multiple from "./Components/Multiple";
import MagaliExheb from "./Components/MagaliExheb";
import ZeinaExheb from "./Components/ZeinaExheb";
import NevineExheb from "./Components/NevineMatar";
import AllianceExheb from "./Components/AllianceFR";
import Projects from "./Components/Proejcts";
import ArtistMK from "./Components/ArtistMK";
import ArtistZN from "./Components/ArtistZN";
import ArtistNM from "./Components/ArtistNM";
import Artists2 from "./Components/Artists2";
import Hero5 from "./Components/Hero5";
import RealFooter2 from "./Components/Realfooter2";
import FcExheb from "./Components/Fcexheb";
import ArtistFC from "./Components/ArtistFC";
import ScrollToBridgingBrushes from "./Components/ScrollToBridgingBrushes";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Router>
          <ScrollToBridgingBrushes />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero5 />
                  <Multiple />

                  {/* <Section21 />
                <Gallery />
                <EventsandPrograms /> */}
                  {/* <RealFooter2 /> */}
                  {/* <RealFooter2 /> */}
                  <title>Bridging Brushes</title>
                </>
              }
            />
            <Route
              path="/artists"
              element={
                <>
                  <Header />
                  <Artists2 />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/sing2"
              element={
                <>
                  <Header />
                  <SingleArtist2 />
                  <RealFooter2 />
                </>
              }
            />
            {/* <Route
            path="/artists/:artist_name/:artist_lastname"
            element={
              <>
                <Header />
                <SingleArtist />
                <RealFooter2 />
              </>
            }
          /> */}

            <Route
              path="/MagaliKatra"
              element={
                <>
                  <Header />
                  <ArtistMK />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/ZeinaNader"
              element={
                <>
                  <Header />
                  <ArtistZN />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/Fadielchamaa"
              element={
                <>
                  <Header />
                  <ArtistFC />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/NevineMattar"
              element={
                <>
                  <Header />
                  <ArtistNM />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/aboutus"
              element={
                <>
                  <Header />
                  <AboutUs />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/artists/artist/pdf/name/:artistFirstName/:artistLastName"
              element={
                <>
                  <Header />
                  <TestPdfViewer />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/contactus"
              element={
                <>
                  <Header />
                  <ContactUs2 />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/exhibitions"
              element={
                <>
                  <Header />
                  <Exhibition />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/newsletter"
              element={
                <>
                  <Header />
                  <Newsletter />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/exhibitions/:exhibitionName"
              element={
                <>
                  <Header />
                  <SingleExhebition />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/section21"
              element={
                <>
                  <Header />
                  <Section21 />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <Header />
                  <Projects />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/admin"
              element={
                <>
                  <Header />
                  <AdminLogin />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/mkexheb"
              element={
                <>
                  <Header />
                  <MagaliExheb />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/zmexheb"
              element={
                <>
                  <Header />
                  <ZeinaExheb />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/nmexheb"
              element={
                <>
                  <Header />
                  <NevineExheb />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/afexheb"
              element={
                <>
                  <Header />
                  <AllianceExheb />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/fcexheb"
              element={
                <>
                  <Header />
                  <FcExheb />
                  <RealFooter2 />
                </>
              }
            />
            <Route
              path="/dashboard"
              element={<ProtectedRoute portopio={Dashboard} />}
            />
            <Route
              path="/hero4"
              element={
                <>
                  <Header />
                  <Hero4 />
                </>
              }
            />
            {/* <Route
            path="/singleex"
            element={
              <>
                <Header />
                <SingleExhebition />
                <Footer />
              </>
            }
          /> */}
            <Route
              path="/exhibition123"
              element={
                <>
                  <Header />
                  <EventsandPrograms />
                </>
              }
            />
            <Route
              path="/gallery123"
              element={
                <>
                  <Header />
                  <Gallery />
                </>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard2"
              element={
                <>
                  {/* <DashboardHome />
                <DashboardHome2 /> */}
                  <ArtistDashboard />
                  {/* <DashboardExperience />
                <DashboardSkills />
                <DashboardAbout /> */}
                </>
              }
            />
            <Route
              path="/dashboard3"
              element={
                <>
                  <Header />
                  <DashboardGalleries />
                  <RealFooter2 />
                </>
              }
            />
            <Route path="/dashboard4" element={<DashboardHome />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
