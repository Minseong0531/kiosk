import './App.css';
import {useState} from 'react';
import FloorMenu from './components/FloorMenu';
import FirstFloor from './components/FirstFloor';
import SecondFloor from './components/SecondFloor';
import ThirdFloor from './components/ThirdFloor';
import GuideModal from './components/GuideModal';



function App() {
  const [selectedFloor, setSelectedFloor] = useState('first');
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const handleCallGuide = () => {
    setIsGuideOpen(true);
  };

  const handleCloseGuideModal = () => {
    setIsGuideOpen(false);
  };


  const changeFloor = (floor) =>{
    setSelectedFloor(floor);
  }
  console.log(selectedFloor);
  const renderFloorComponent=()=>{
    switch(selectedFloor){
      case 'first':
        return <FirstFloor />;
      case 'second':
        return <SecondFloor />;
      case 'third':
        return <ThirdFloor />;
      default:
        return(<div><p>왼쪽에서 층을 선택해주세요.</p></div>)
    }
  }
  return (
    <div className="container">
      <div className="right-panel">
      {renderFloorComponent()}
      <div className="left-panel">
      <button onClick={handleCallGuide}>안내원 호출</button>
        <FloorMenu onSelectFloor={changeFloor} />
      </div>
      </div>

      {isGuideOpen && <GuideModal onClose={handleCloseGuideModal} />}
    </div>
  );
}

export default App;
