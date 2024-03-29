
import './App.css';
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import  Content  from "./components/Content";
import  SideMenu  from "./components/SideMenu";

function App() {
  return (
   <div className="App" >
    <Header />
      <div className="SideMenuAndPageContent">
        <SideMenu>
        </SideMenu>
        <Content></Content>
      </div>
   <Footer/>
   </div>
  );
}

export default App;
