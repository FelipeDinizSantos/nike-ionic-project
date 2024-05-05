import Content from '../components/home/Content';
import GetStartedButton from '../components/home/GetStatedButton';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className='container'>
      <div>
        <img src='/img/nike.png' alt='Logo da Nike' className='nike-icon' />
      </div>
      <div>
        <img src='/img/lemon-shoes.png' alt='Tênis Cor Limão' className='lemonShoes' />
      </div>
      <Content></Content>
      <GetStartedButton></GetStartedButton>
    </div>    
  );
};

export default Home;