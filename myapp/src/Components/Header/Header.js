// import LanguageIcon from '@mui/icons-material/Language';
import  './Style.css';
import { TfiWorld } from "react-icons/tfi";
import ReactDOM from "react-dom/client";
import './Style.css';
import TopNavBar from './Topavbar';
import Headerone from './Headerone';



function Header() {
  return (
    <div>
      <TfiWorld/>
      <TopNavBar/> 
      <Headerone/>
      
     
      <div style={{ display: 'flex', width: '800%', backgroundColor: '#226679', padding: '200px' }}>
      <div style={{ flex: '1', color: '#000080' }}>
      
      <div className='textone'>
        <h1>TestGorilla works. 
          CVs don't.</h1>
          </div>
          <div className='Textsecond'>
        <p>Our talent assessments screen and 
          identify the best candidates 
          and make your hiring decisions 
          faster, easier, and bias-free.</p>
          <button style={{
          margin: '0 10px',
          padding: '10px',
          backgroundColor: 'white',
          color: '#000',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Talk For Free!</button>
        <button style={{
          margin: '0 10px',
          padding: '10px',
          backgroundColor: '#226679',
          color: '#fff',
          border: '#fff',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>Talk to sales</button>
      {/* <button>Try To Free!</button>
      <button>Talk to sales</button> */}
        </div>
      </div>
      <div style={{ flex: '1' }}>
        <img src="il1_2x-min-e1631817056302.png.webp" alt="image" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
    <section className='head'>
    <div className='Tophead'>
          
           
      
        </div>
        
        </section>
      
        <div className='container flexSB'>
          
              
            </div>
            </div>
            
            
  
    

 
           
     
        
  );
}


export default Header;
