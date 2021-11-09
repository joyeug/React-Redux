import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { selectDate } from "../../actions/date/select";

const ACCESS_TOKEN = "3875372609247663";
const DOMAIN = "https://www.superheroapi.com/api.php/";

const Hero = () => {
  const [id, setId] = useState(null);

  const history = useHistory();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   getHeros()
  // }, [])
  // ENDPOINT - API - SERVICIO - PATH
  const getHeros = async () => {
    try {
      const response = await fetch(`${DOMAIN}${ACCESS_TOKEN}/${id}`);
      // , {
      //   body: {
      //     nombre: 'Juan',
      //     edad: 20,
      //     ciudad: 'Lima'
      //   },
      //   headers: {},
      //   method: 'POST',
      // }

      const hero = await response.json();
      history.push(
        `/hero/${hero.id}?hero=${hero.name}&image=${hero.image.url}&full-name=${hero.biography["full-name"]}`
      );
      console.log("response", hero);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setId(value);
    dispatch(selectDate(value));
  };
  console.log("value", id);
  return (
    <div>
      Año:
      <input type="number" min="1900" onChange={handleChange} />
      <br />
      <button onClick={getHeros}>Buscar</button>
      <br />
      <br />
      Hero
    </div>
  );
};

export default Hero;
