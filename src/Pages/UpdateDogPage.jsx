import React, { useEffect } from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const UpdateDogPage = ({data, setData}) => {
  const {dogId} = useParams();
  
    

const[image, setImage] = useState("");
const[breed, setBreed] = useState("");
const[description, setDescription] = useState("");
const[maxAge, setMaxAge] = useState(0);
const[maxWeight, setMaxWeight] = useState(0);
const[disease, setDisease] = useState("");
const[fact, setFact] = useState("");
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000"
useEffect(()=>{
  
axios.get(`${API_URL}/dogs/${dogId}`)
.then(res=>{
  setBreed(res.data.breed)
  setImage(res.data.image)
  setDescription(res.data.description)
  setMaxAge(res.data.max_age_years)
  setMaxWeight(res.data.max_weight_kg)
  setFact(res.data.fun_fact)
  setDisease(res.data.disease)
  console.log(res.data)
})
.catch(err=>console.log(err))
  },[dogId])

const nav = useNavigate();

const handleImageChange =(e) => setImage(e.target.value);
const handleBreedChange =(e) => setBreed(e.target.value);
const handleDescriptionChange =(e) => setDescription(e.target.value);
const handleMaxAgeChange =(e) => setMaxAge(e.target.value);
const handleMaxWeightChange =(e) => setMaxWeight(e.target.value);
const handleDiseaseChange =(e) => setDisease(e.target.value);
const handleFactChange =(e) => setFact(e.target.value);

async function handleUpdateDog (event){
  event.preventDefault();
  const updatedDogInfo={
    id: dogId,
    image,
    breed,
    description,
    disease,
    fun_fact: fact,
   max_age_years: Number(maxAge),
    max_weight_kg: Number(maxWeight)
  };
try {
    const res = await axios.put(`${API_URL}/dogs/${dogId}`, 
      updatedDogInfo);
      const updatedData = data.map((dog)=>{
if (dog.id == dogId){
  return res.data
} else{return dog}
      })
  setData(updatedData);
  nav ("/");
  }
  catch (error){
  console.log(error);
}
}

  return (
    <div className='form-page'>
       <h1 className='add-page-title'>Was there something wrong? Feel free to change it :) </h1>
      <form className="add-form" onSubmit={handleUpdateDog}>
     
      <label>Image
        <br></br>
        <input className="input" name="image" type="url" value={image} onChange={handleImageChange}/>
      </label>
      <label>Breed
        <br></br>
        <input className="input" name="breed" type="text" value={breed} onChange={handleBreedChange}/>
      </label>
      <br></br>
      <label>Description
        <input className="input" name="description" type="text" value={description} onChange={handleDescriptionChange}/>
      </label>
      <label>Max Age
        <br></br>
        <input className="input" name="max-age" type="number" value={maxAge} onChange={handleMaxAgeChange} min={0} max={25}/>
      </label>
      <label>Max Weight
        <br></br>
        <input className="input" name="max-weight" type="number" value={maxWeight} onChange={handleMaxWeightChange} min={0} max={80}/>
      </label>
      <label>Typical Diseases
        <br></br>
        <input className="input" name="disease" type="text" value={disease} onChange={handleDiseaseChange}/>
      </label>
      <label>Fun Fact
        <br></br>
        <input className="input" name="fact" type="text" value={fact} onChange={handleFactChange}/>
      </label>
      </form>
      <button className='add-btn'>Submit</button>
    </div>
  )
}

export default UpdateDogPage
