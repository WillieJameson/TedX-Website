import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./Home";
import Thanks from "./Thanks";


// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
// });
 
function App() {
  // const [hideMenu,showMenu] = useState(false)
  // useEffect(() => {
  //   window.addEventListener('scroll',listenToScroll)
  // }, [])
  // function listenToScroll(){
  //   if(window.pageYOffset >= 700){
  //     showMenu(true)
  //   }else{
  //     showMenu(false)
  //   }
  // }
  return (
    <div>
      <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/thanks' exact element={<Thanks />}/>
      </Routes>
    </div>
  );
}

export default App;
