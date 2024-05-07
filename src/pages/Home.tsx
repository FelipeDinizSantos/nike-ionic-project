import Content from '../components/home/Content';
import GetStartedButton from '../components/home/GetStatedButton';
import { IonPage } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage className='home-ion-page'>
      <div className='container'>
        <div>
          <img src='/img/nike-logo-white.png' alt='Logo da Nike' className='nike-icon' />
        </div>
        <div>
          <img src='/img/lemon-shoes.png' alt='Tênis Cor Limão' className='lemonShoes' />
        </div>
        <Content></Content>
        <GetStartedButton></GetStartedButton>
      </div>  
    </IonPage>

  );
};

export default Home;