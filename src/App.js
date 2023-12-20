import './App.css';
import {useState} from "react";
import {data} from "./data";

function App() {
const [hotels, setHotels]= useState (data);
const [showText, setShowText] = useState (false);


const removeHotel= (id) =>{
  let newHotels=hotels.filter (hotel=> hotel.id !==id);
  setHotels(newHotels)

  const showTextClick = (element)=> {
element.showMore= !element.showMore
setShowText( !showText)
  }
}


  return (
    <div>
    <div className="container">
      <h1>New York TOP {hotels.length} Hotels </h1>
      </div>
      {hotels.map((element=> {
        const {id, hotelName, description, image, source, showMore}= element
        return(
          <div key={id}>
            <div className='container'>
              <h2> {id} - {hotelName} </h2>
              <p> {showMore ? description: description.substring (0,190) +"..."}
              <button onClick ={()=> showTextClick(element) }> {showMore ? "Show less": "Show more"}</button></p>
              <img src= {image} alt='hotel in NY' width="450px"/>
              <p> source:{source}</p>
            </div>
            <div className='container'>
            <button className='btn' onClick={()=> removeHotel (id)}>Remove</button>
            </div>
          </div>
        )
      }))}
     <div className='container'>
      <button onClick = {()=> setHotels([])}>Delete ALL</button>
     </div>
    </div>
  );
  
}

export default App;
