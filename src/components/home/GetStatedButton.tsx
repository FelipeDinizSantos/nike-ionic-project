import './GetStatedButton.css';

interface ContainerProps { }

const GetStartedButton: React.FC<ContainerProps> = () => {
  const redirect =():void=>{
    window.location.href='http://localhost:8100/produtos';
  }

  return (
    <div>
        <button className='getStartedBtn' onClick={redirect}>
          GET STATED
          <img src='/img/right-arrow.png' alt='flecha para direita' />
        </button>
    </div>
  );
};

export default GetStartedButton;
