import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import { isEmpty } from "lodash";
import axios from "axios";
import Cancion from "./components/Cancion";
import Artista from "./components/Artista";

const App = () => {
  // -----------------
  // Hooks
  // -----------------
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState(null);
  const [infoArtista, guardarInfoArtista] = useState(null);

  useEffect(() => {
    if (isEmpty(busquedaLetra)) return; // Object.keys(busquedaLetra).length

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaLetra;
      const urlLetra = `https://private-anon-2240aca7b2-lyricsovh.apiary-proxy.com/v1/${artista}/${cancion}`;
      const urlInfoArtista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      // To solve many requests, is better to use Promise.all
      const [letra, informacion] = await Promise.all([
        axios.get(urlLetra),
        axios.get(urlInfoArtista)
      ]);
      guardarLetra(letra.data.lyrics);
      guardarInfoArtista(informacion.data.artists[0]);
    };

    consultarApiLetra();
  }, [busquedaLetra]);

  // -----------------
  // Component View
  // -----------------
  return (
    <>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artista info={infoArtista} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
