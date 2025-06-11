
import { Link } from 'react-router-dom';

function Homepage({data, setData}) {
  return (
    <div className='home'>
         <h1 className='intro-first'>Welcome to our furry world.</h1>
         <br></br>
         <h1 className='intro-second'>Search through our list and get to know your future friend better!</h1>
       <div className='container'>
        {data.map((eachData)=>{
            return(
                <main className='main-dashboard' key={eachData.id}>
                <section className='dog-card'>
                    <div>
                        <Link to={`dogs-details/${eachData.id}`}>
                    <img className='dog-image' src={eachData.image}/>
                    </Link>
                    </div>
                    <div className='card-info'>
                    <h2 className='dog-breed'>{eachData.breed}</h2>
                    <br></br>
                    <h3 className='card-description'>{eachData.description}</h3>
                    </div>
                </section>
                </main>

            )
        })}
     </div>

    </div>
  )
}

export default Homepage
