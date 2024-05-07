import { IonPage } from '@ionic/react';
import './Products.css';
import ListBox from '../components/products/ListBox';

const Products: React.FC = () => {
  return (
    <IonPage>
      <header>
        <div className='menu-burger' >
          <img src='/img/menu-burger.png' />
        </div>
        <div className='nike-logo'>
          <img src='/img/nike-logo-green.png' />
        </div>
        <div className='profile-user'>
          <img src='/img/profile-user.png' />
        </div>
      </header>
      <main>
        <ListBox />
      </main>
    </IonPage>
  );
};

export default Products;