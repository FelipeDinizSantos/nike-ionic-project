import "./ListBox.css";

interface ContainerProps { }

const ListBox: React.FC<ContainerProps> = () => {
  return (
    <div className='container-boxes'>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
    </div>
  );
};

export default ListBox;
