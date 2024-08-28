import { useEffect, useState } from 'react'
import './App.css'
import Slider from "react-slick";
import axios from 'axios';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import { IoIosArrowForward ,IoIosArrowBack } from "react-icons/io";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='next'>
    <IoIosArrowForward />
     </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='prev'>
      <IoIosArrowBack />
      </div>
  );
}

function App() {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    speed:500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

  const settings2 = {
 
  };



  let [product , setProduct] = useState([])

  let getData = ()=>{
    axios.get("https://dummyjson.com/recipes").then((response)=>{
      setProduct(response.data.recipes);
      
    })
  }

  useEffect(()=>{
    getData()
    
  },[])

  return (
    <>
      
       <Container>
     <Slider {...settings}>
     {product.map((item, i)=>(
       <div key={i} id='product'>
            <img src={item.image} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <span>Meal type : &nbsp;{item.mealType}</span>
          <h3 className='color'>{item.instructions}</h3>
            <span>{item.rating}</span>
          </div>
    ))}
     </Slider>

     </Container>
     
    </>
  )
}

export default App