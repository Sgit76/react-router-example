
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          	<Home></Home>
        </Route>
        <Route path="/courses">
          <Courses></Courses>
        </Route>
        <Route path="/service">
          <Service></Service>
        </Route>
        <Route path="/aboutus">
          <AboutUs></AboutUs>
        </Route>
        <Route path="*">
              <NotFound></NotFound>
          </Route>
      </Switch>
      <Footer></Footer>
    </Router>    
  );
}

export default App;
