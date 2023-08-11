
import './styles.scss';
import logo from './../../assets/white-logo.svg';

const Footer = () => {
    return (
      <footer className="footer">
        <button className='primary-btn'>
            <img src={logo} className="btn-logo" alt="hoo.be" />
            <span >
                create your hoo.be
            </span>
        </button>
        <button className='text-btn'>
            login
        </button>
      </footer>
    );
  }
  
  export default Footer;