import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from "uuid";

function AddDogPage({data, setData}) {
//const[image, setImage] = useState("");
const[breed, setBreed] = useState("");
const[description, setDescription] = useState("");
const[maxAge, setmaxAge] = useState(0);
const[maxWeight, setmaxWeight] = useState(0);
const[disease, setDisease] = useState("");
const[fact, setFact] = useState("");
const [image, setImage] = useState(null);

const nav = useNavigate();
const handleImageChange =(e) => setImage(e.target.value);
const handleBreedChange =(e) => setBreed(e.target.value);
const handleDescriptionChange =(e) => setDescription(e.target.value);
const handleMaxAgeChange =(e) => setmaxAge(e.target.value);
const handleMaxWeightChange =(e) => setmaxWeight(e.target.value);
const handleDiseaseChange =(e) => setDisease(e.target.value);
const handleFactChange =(e) => setFact(e.target.value);

async function handleAddNewDog (event){
  event.preventDefault();
  const dogToAdd = { 
    id: uuidv4(),
    image,
    breed,
    description,
    max_age_years: Number(maxAge),
    max_weight_kg: Number(maxWeight),
    disease,
    fact
  };
  

  try {
    const imageData = new FormData();
      imageData.append("file", image);
      imageData.append("upload_preset", "DogsImages");
      imageData.append("cloud_name", "dqgm1zhya");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dqgm1zhya/image/upload",
        imageData
      );
      console.log("res: ", response.data);
      dogToAdd.image= response.data.url 
    const res = await axios.post("${API_URL}/dogs", 
      dogToAdd);
      console.log(res);
  setData([dogToAdd, ...data]);
  nav("/");
}
catch (error){
  console.log(error);
}
}

  return (
    <div className='form-page'>
      <h1 className='add-page-title'>Please fill the inputs with the breed's info you would like to add</h1>
     <form className="add-form" onSubmit={handleAddNewDog}>
      
      
      {/*<label>Image
        <br></br>
        <input className="input" name="image" type="url" value={image} onChange={handleImageChange}/>
      </label>*/}
      <label>Breed
        <br></br>
        <input className="input" name="breed" type="text" value={breed} onChange={handleBreedChange}/>
      </label>
      <label>Description
        <br></br>
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
      <label>
          Project Image:
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
  </label>
     </form>
     <button className='add-btn'>Add New Dog</button>
    </div>
  )
}

export default AddDogPage
