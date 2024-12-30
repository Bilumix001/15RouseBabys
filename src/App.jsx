import { useState } from "react";
import React, { useEffect, useRef } from "react";
import Reproductor from "./Components/reproductor";
import Countdown from "./Components/countDown";
import Info from "./Components/Info";
import { CiGift } from "react-icons/ci";
import { BsEnvelope } from "react-icons/bs";
import { GiTie } from "react-icons/gi";
import { GiHighHeel } from "react-icons/gi";
import "./App.css";

function App() {
  const sectionsRef = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 200; // Ajusta el umbral en píxeles
    
      sectionsRef.current.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        
        // Verificar si el elemento está parcialmente visible según el umbral
        if (
          rect.top + threshold >= 0 && // Parte superior con margen de umbral
          rect.bottom - threshold <= window.innerHeight // Parte inferior con margen de umbral
        ) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };
    

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al cargar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fondo">
        <img
          className="MarcoRosas izquierda"
          src="/marcoRosa.png"
          alt="Decoración"
        />
        <img
          className="MarcoRosas derecha"
          src="/marcoRosa.png"
          alt="Decoración"
        />
        
        <div className="title">
          <img className="rombo1" src="/rombo.png"/>
          <p className="XV">
            MIS XV
            <br />
            AÑOS
          </p>
          
          <img className="rombo2" src="/rombo.png"/>
          <img className="curvita" src="/linea.png"/>
          <p className="nombre">
            <section
              ref={(el) => (sectionsRef.current[0] = el)} // Guardamos la referencia de la primera sección
              className="animated" // Clase inicial para animación
            >
              
              <img className="corazon1" src="/corazon.png"/>
              Rouse
              <img className="corazon2" src="/corazon.png"/>
            </section>
          </p>
        </div>
        <section
          ref={(el) => (sectionsRef.current[1] = el)} // Guardamos la referencia de la primera sección
          className="animated" // Clase inicial para animación
        >
          <Reproductor></Reproductor>
        </section>

        <div className="Adultos">
          <section
            ref={(el) => (sectionsRef.current[2] = el)} // Guardamos la referencia de la primera sección
            className="animated" // Clase inicial para animación
          >
            <img className="img1" src="/rosas1.png" alt="" />
            <p className="title">En compañia de mis padres</p>
            <p className="papas">Eder Cconochuillca Tinta</p>
            <p>y</p>
            <p>Rosa Fernandez Quispe</p>
          </section>
          <section
            ref={(el) => (sectionsRef.current[3] = el)} // Guardamos la referencia de la primera sección
            className="animated" // Clase inicial para animación
          >
            <img className="img2" src="/rosas1.png" alt="" />
            <p className="title">Y mis padrinos</p>
            <p className="papas">Ciro Yupanqui Fernandez</p>
            <p>y</p>
            <p>Agatha Liz Aranzabal Caceres</p>
          </section>
          <section
            ref={(el) => (sectionsRef.current[4] = el)} // Guardamos la referencia de la primera sección
            className="animated" // Clase inicial para animación
          >
            <p className="waiting">Los esperamos para celebrar juntos</p>
          </section>
        </div>
        <div className="fecha">
          <section
            ref={(el) => (sectionsRef.current[5] = el)} // Guardamos la referencia de la primera sección
            className="animated" // Clase inicial para animación
          >
            <p className="fechita">Sabado</p>
            <p className="fechita">11/01/2025</p>
          </section>
          <section
            ref={(el) => (sectionsRef.current[6] = el)} // Guardamos la referencia de la primera sección
            className="animated" // Clase inicial para animación
          >
            <Countdown></Countdown>
          </section>
        </div>

        {/* Bienvenidos */}
        <div className="welcome">
          <section
            ref={(el) => (sectionsRef.current[7] = el)}
            className="animated"
          >
            <img src="/separador.png" alt="" />
          </section>
        </div>

        {/* Misa */}
        <div className="info">
          <section
            ref={(el) => (sectionsRef.current[8] = el)}
            className="centrar animated"
          >
            <Info
              tittle="Misa"
              icon="1"
              name="Parroquia Nuestra Señora de la Almudena"
              direction="Plazoleta de la Almudena"
              hora="17:00 hrs"
              direc="https://www.google.com/maps/place/Parroquia+Nuestra+Se%C3%B1ora+de+la+Almudena,+Huayra+Calle+310,+Cusco+08001/data=!4m2!3m1!1s0x916dd5d77d367f55:0xe21f2360a392d83?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI0LjQ5LjYYACCenQoqkAEsOTQyMjYwNDAsOTQyNDI1MjksOTQyMjMyOTksOTQyMTY0MTMsOTQyMTI0OTYsOTQyMTI2NjYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjgyMDQsOTQyMjk4MzksNDcwODcxMTgsNDcwODQzOTMsOTQyMTMyMDBCAlBF&g_st=ac"
            />
          </section>
        </div>

        {/* Recepcion */}
        <div className="info">
          <section
            ref={(el) => (sectionsRef.current[9] = el)}
            className="centrar animated"
          >
            <Info
              tittle="Recepción"
              icon="2"
              name="Salón de eventos Ecofiestas"
              direction="Costado de Shalom en Antonio Lorena"
              hora="19:00 hrs"
              direc="https://maps.app.goo.gl/E4rNDdheQpGwJViC9?g_st=ac"
            />
          </section>
        </div>

        {/* Burbujas */}
        <div className="burbuja">
          
          <section
            ref={(el) => (sectionsRef.current[10] = el)}
            className="centrar animated"
          >
            <img src="/separador.png" alt="" />
            <div className="icon">
              <CiGift />
            </div>
            <h2>Regalo</h2>
          </section>
        </div>
        <div className="burbuja">
          <section
            ref={(el) => (sectionsRef.current[11] = el)}
            className="centrar animated"
          >
            <div className="icon">
              <BsEnvelope />
            </div>
            <h2>Lluvia de Sobres</h2>
          </section>
        </div>
        <div className="burbuja">
          <section
            ref={(el) => (sectionsRef.current[12] = el)}
            className="centrar animated"
          >
            <div className="icon icon2">
              <GiTie />
              <GiHighHeel />
            </div>
            <h2>Codigo de vestimenta</h2>
            <p>
            Damas: Vestido elegante. <br />
Caballeros: Traje formal. <br />
EVITAR EL ROJO

            </p>
          </section>
        </div>

        <div className="final">
          <img className="img1" src="/marcoFinal.png" alt="" />
          Rouse Patricia
          <img className="img2" src="/marcoFinal.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
