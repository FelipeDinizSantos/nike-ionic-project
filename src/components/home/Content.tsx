import './Content.css';

interface ContainerProps { }

const Content: React.FC<ContainerProps> = () => {
  return (
    <div className='content-container'>
        <h1 className='content-title'>SUMMER<br/>COLECTIONS</h1>
        <h2 className='content-sub-title'>2024</h2>
        <p className='content-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus quia asperiores similique voluptas veritatis sint dicta quam. Iure quis blanditiis odio incidunt non veniam corporis delectus, culpa asperiores quas.</p>
    </div>
  );
};

export default Content;
