import { use, useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from './Components/Footer.jsx';
import HomePage from "./Pages/Homepage.jsx";
import DogDetailsPage from './Pages/DogDetailsPage.jsx';
import AddDogPage from './Pages/AddDogPage.jsx';
import UpdateDogPage from './Pages/UpdateDogPage.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';
import axios from 'axios';



function App() {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000"
  const [data, setData] = useState([]);
  useEffect(()=>{
axios.get(`${API_URL}/dogs`)
.then((res)=>{
  console.log(res)
  setData(res.data);
})
.catch(err=>console.log(err))
  }, [])

  return (
    <>
    <main>
    <Navbar />
      <section className='main-section'>
        
    
      
      <Routes>
      <Route path = "/" element={<HomePage data={data} setData={setData} />}></Route>
     <Route path = "/dogs-details/:dogId" element={<DogDetailsPage data={data} setData={setData} />}></Route>
     <Route path = "/add-dogs" element={<AddDogPage data={data} setData={setData}/>}></Route>
     <Route path = "/update/:dogId" element={<UpdateDogPage data={data} setData={setData}/>}></Route>
     <Route path = "*" element={<NotFoundPage />}></Route>
     </Routes>
      </section>

      <Footer />
  </main>
    </>
  )
}

export default App
