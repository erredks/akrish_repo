import './App.css';
import Crsul from './Carousel';
import { CarouselItem } from './CarouselItem';

function App() {
  return (
    <div className="App">
      <nav>
        <div className='left'>
          <span>Company log</span>
          <ul id="list">
            <li><a>About us</a></li>
            <li><a>ERP</a></li>
            <li><a>Zoho</a></li>
            <li><a>WEB</a></li>
          </ul>
        </div>
        <div className='right'>
          <button id="btn">Contact</button>
        </div>
      </nav>
      <div>
        <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
      </div>
      <div className='coloredback'></div>
      <div>
        <p className='lorem'>Customize every step, process, business the way you work.</p>
        <p>Lorem ipsum dolor sit amet. Ea fugiat adipisci sed quasi doloremque aut omnis eligendi sit dolore facere vel voluptas culpa est esse eligendi. Aut facilis omnis eum nisi voluptatem ut velit illum sit totam possimus est vitae Quis. Ut molestiae doloremque ut officiis nisi quo delectus eius est sunt quod qui facere tempora et laborum omnis ut repellat doloribus.</p>
      </div>
      <div className='carousel'></div>
      <Crsul />
      </div>
  );
}

export default App;
