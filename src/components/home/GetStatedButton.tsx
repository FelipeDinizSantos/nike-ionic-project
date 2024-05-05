import './GetStatedButton.css';

interface ContainerProps { }

const GetStartedButton: React.FC<ContainerProps> = () => {
  return (
    <div>
        <button className='getStartedBtn'>
          GET STATED
          <img src='/img/right-arrow.png' alt='flecha para direita' />
        </button>
        
    </div>
  );
};

export default GetStartedButton;
