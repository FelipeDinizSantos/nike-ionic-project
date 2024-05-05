import './Content.css';

interface ContainerProps { }

const Content: React.FC<ContainerProps> = () => {
  return (
    <div className='content-container'>
        <h1 className='content-title'>SUMMER<br/>COLECTIONS</h1>
        <h2 className='content-sub-title'>2022</h2>
        <p className='content-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quod ullam nihil facilis sint laborum illo qui sed perspiciatis voluptas magnam commodi.</p>
    </div>
  );
};

export default Content;
