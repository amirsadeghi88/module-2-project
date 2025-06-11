import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate, Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'




function DogDetailsPage({data, setData}) {
  const{dogId} = useParams();
  const [dog, setDog] = useState([]);
  const nav = useNavigate();
  useEffect(()=>{
axios.get(`http://localhost:4000/dogs/${dogId}`)
.then((res)=>{
  console.log(res)
  setDog(res.data);       
})

  
.catch(err=>console.log(err))
},[dogId])
 function handleDelete(){
         axios.delete(`http://localhost:4000/dogs/${dogId}`)
         .then((res)=>{
          const filteredData = data.filter((oneDog)=>{
if(oneDog.id != dogId){
  return true
}else {return false}
          })
          setData(filteredData);
          nav("/");
         })
         .catch(err=>console.log(err))
                  } 

  return (
    <div className='dog-detail'>
      
      <section id="dog-image" className='dog-detail-image' >
        <img  src={dog.image}/>
        </section>
      <section className='dog-detail-info'>
      <h1 className='dog-detail-title'>{dog.breed}</h1>
      <div className='line'></div>
      <div className='dog-detail-first'>
      <h2 className='dog-detail-weight'>max Weight: {dog.max_weight_kg} kg</h2>
      <h2 className='dog-detail-age'>max Age: {dog.max_age_years} years</h2>
      </div>
      <h4 className='dog-detail-description'>Description: <br></br><p className='dog-detai-text'>{dog.description}</p></h4>
      <p className='dog-detail-fact'>💡 {dog.fun_fact}</p>
      <div className='dog-detail-buttons'>
        <FontAwesomeIcon className='dog-detail-btn' icon={faTrash} onClick={() =>{
                    handleDelete(dog.id)
                }}/>
        <Link to={`/update/${dog.id}`}>
        <FontAwesomeIcon icon={faEdit} className='dog-detail-btn'/>
        </Link>
      </div>
      </section>
    </div>
  )
}

export default DogDetailsPage
