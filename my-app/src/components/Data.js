import React, { useState, useEffect } from 'react';

export default function Data(props) {
  const [DataList, setDataList] = useState([]);
  const [planet, setPlanet] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let list = []
  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/${props.category}/?search=${props.name}`);
        const data = await response.json();
        list = data.results;
        setDataList(list[0]);
        if(props.category == 'people'){
          const planetResponse = await fetch(list[0].homeworld);
          const planetData = await planetResponse.json();
          setPlanet(planetData);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [props.name]);
  if(props.category === 'people'){
    return (
      <>
      {isLoading ? <p>Loading...</p> : (
          <ul className='categoryInfoList'>
            <li>
              <h2>Name: {DataList.name}</h2>
            </li>
            <li>
              <p>Birth year: {DataList.birth_year}</p>
            </li>
            <li>
              <p>Eye color: {DataList.eye_color}</p>
            </li>
            <li>
              <p>Hair color: {DataList.hair_color}</p>
            </li>
            <li>
              <p>Skin color: {DataList.skin_color}</p>
            </li>
            <li>
              <p>Gender: {DataList.gender}</p>
            </li>
            <li>
              <p>Height: {DataList.height}</p>
            </li>
            <li>
              <p>Mass: {DataList.mass}</p>
            </li>
            <li>
              <h2>Home planet: {planet.name}</h2>
            </li>
            <li>
              <p>Climate: {planet.climate}</p>
            </li>
            <li>
              <p>Diameter: {planet.diameter}</p>
            </li>
            <li>
              <p>Orbital period: {planet.orbital_period}</p>
            </li>
            <li>
              <p>Rotation period: {planet.rotation_period}</p>
            </li>
            <li>
              <p>Surface water: {planet.surface_water}</p>
            </li>
            <li>
              <p>Terrain: {planet.terrain}</p>
            </li>
            <li>
              <p>Gravity: {planet.gravity}</p>
            </li>
          </ul>
        )
      }
      </>
    )
  }
  else if(props.category === 'species'){
    return(
      <>
      {isLoading ? <p>Loading...</p> : (
          <ul className='categoryInfoList'>
            <li>
                <h2>Name: {DataList.name}</h2>
            </li>
            <li>
                <p>Classification: {DataList.classification}</p>
            </li>
            <li>
                <p>Designation: {DataList.designation}</p>
            </li>
            <li>
                <p>Average height: {DataList.average_height}</p>
            </li>
            <li>
                <p>Skin colors: {DataList.skin_colors}</p>
            </li>
            <li>
                <p>Hair colors: {DataList.hair_colors}</p>
            </li>
            <li>
                <p>Eye colors: {DataList.eye_colors}</p>
            </li>
            <li>
                <p>Average lifespan: {DataList.average_lifespan}</p>
            </li>
            <li>
                <p>Language: {DataList.language}</p>
            </li>
          </ul>
        )
      }
      </>
    )
  }
  else if(props.category === 'films'){
    return(
      <>
      <ul className='categoryInfoList'>
        <li>
            <h2>Title: {DataList.title}</h2>
        </li>
        <li>
            <p>Episode id: {DataList.episode_id}</p>
        </li>
        <li>
            <p>Opening crawl: {DataList.opening_crawl}</p>
        </li>
        <li>
            <p>Director: {DataList.director}</p>
        </li>
        <li>
            <p>Producer: {DataList.producer}</p>
        </li>
        <li>
            <p>Created: {DataList.created}</p>
        </li>
        <li>
            <p>Release date: {DataList.release_date}</p>
        </li>
    </ul>
      </>
    )
  }
  else if(props.category === 'planets'){
    return(
      <>
      {isLoading ? <p>Loading...</p> : (
        <ul className='categoryInfoList'>
            <li>
                <h2>Name: {DataList.name}</h2>
            </li>
            <li>
                <p>Rotation period: {DataList.rotation_period}</p>
            </li>
            <li>
                <p>Orbital period: {DataList.orbital_period}</p>
            </li>
            <li>
                <p>Diameter: {DataList.diameter}</p>
            </li>
            <li>
                <p>Climate: {DataList.climate}</p>
            </li>
            <li>
                <p>Gravity: {DataList.gravity}</p>
            </li>
            <li>
                <p>Terrain: {DataList.terrain}</p>
            </li>
            <li>
                <p>Population: {DataList.population}</p>
            </li>
        </ul>
      )}
      </>
    )
  }
  else if(props.category === 'starships'){
    return(
      <>
       {isLoading ? <p>Loading...</p> : (
        <ul className='categoryInfoList'>
            <li>
                <h2>Name: {DataList.name}</h2>
            </li>
            <li>
                <p>Model: {DataList.model}</p>
            </li>
            <li>
                <p>Manufacturer: {DataList.manufacturer}</p>
            </li>
            <li>
                <p>Cost in credits: {DataList.cost_in_credits}</p>
            </li>
            <li>
                <p>Length: {DataList.length}</p>
            </li>

            <li>
                <p>Max atmosphering speed: {DataList.max_atmosphering_speed}</p>
            </li>
            <li>
                <p>Crew: {DataList.crew}</p>
            </li>
            <li>
                <p>Passengers: {DataList.passengers}</p>
            </li>
            <li>
                <p>Cargo capacity: {DataList.cargo_capacity}</p>
            </li>
            <li>
                <p>Consumables: {DataList.consumables}</p>
            </li>
        </ul>
        )}
      </>
    )
  }
  else if(props.category === 'vehicles'){
    return(
      <>
      {isLoading ? <p>Loading...</p> : (
        <ul className='categoryInfoList'>
            <li>
                <h2>Name: {DataList.name}</h2>
            </li>
            <li>
                <p>Model: {DataList.model}</p>
            </li>
            <li>
                <p>Manufacturer: {DataList.manufacturer}</p>
            </li>
            <li>
                <p>Cost in credits: {DataList.cost_in_credits}</p>
            </li>
            <li>
                <p>Length: {DataList.length}</p>
            </li>
            <li>
                <p>Max atmosphering speed: {DataList.max_atmosphering_speed}</p>
            </li>
            <li>
                <p>Crew: {DataList.crew}</p>
            </li>
            <li>
                <p>Passengers: {DataList.passengers}</p>
            </li>
            <li>
                <p>Cargo capacity: {DataList.cargo_capacity}</p>
            </li>
            <li>
                <p>Consumables: {DataList.consumables}</p>
            </li>
        </ul>
        )}
      </>
    )
  };
}
