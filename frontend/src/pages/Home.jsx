import React from "react";
import Hero from "../components/Hero";

import BeneficiosBienvenida from "../components/Beneficios";
import SistemaBrinda from "../components/SistemaBrinda";
import PreciosPremium from "../components/PreciosPremium";
import Testimonios from "../components/Testimonios";
import Precios from "../components/Precios";


const Home = () => (
  <>
    <Hero />
  <BeneficiosBienvenida />
    <SistemaBrinda />
  <PreciosPremium />
    <Testimonios />
    <Precios />
  </>
);

export default Home;
