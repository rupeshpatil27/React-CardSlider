import './App.css'

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

import CardSlider from './component/CardSlider/CardSlider';


function App() {

  const Data = [
    {
      title: "Web Developer",
      name: "David",
      img: img1,
    },
    {
      title: "UI Designer",
      name: "Smith",
      img: img2,
    },
    {
      title: "Mobile Developer",
      name: "Adam",
      img: img3,
    },
    {
      title: "Web Developer",
      name: "David",
      img: img1,
    },
    {
      title: "UI Designer",
      name: "Smith",
      img: img2,
    },
    {
      title: "Mobile Developer",
      name: "Adam",
      img: img3,
    },
    {
      title: "Web Developer",
      name: "David",
      img: img1,
    },
    {
      title: "UI Designer",
      name: "Smith",
      img: img2,
    },
    {
      title: "Mobile Developer",
      name: "Adam",
      img: img3,
    },
  ];

  return (
    <div className="main-container">
      <CardSlider
        cardSliderTitle="Employee List"
        data={Data}
        isButtonVisible={true}
        isDraggable={true}
      />
    </div>
  )
}

export default App
