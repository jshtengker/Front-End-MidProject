import AboutMe from "./assets/AboutMe"
import AreaOfInterest from "./assets/AreaOfInterest"
import Author from "./assets/Author"
import ContacMe from "./assets/ContactMe"
import MainBar from "./assets/MainBar"
import MyWork from "./assets/MyWork"
import './config/Firebase'

function App() {
  return (
    <>
    <div id="page-wraper">
  {/* Sidebar Menu */}
  <div className="responsive-nav">
    <i className="fa fa-bars" id="menu-toggle" />
    <div id="menu" className="menu">
      <i className="fa fa-times" id="menu-close" />
      <div className="container">
        <Author/>
        <MainBar/>
      </div>
    </div>
  </div>
  <AboutMe/>
  <AreaOfInterest/>
  <MyWork/>
  <ContacMe/>
</div>
    </>
  )
}

export default App
