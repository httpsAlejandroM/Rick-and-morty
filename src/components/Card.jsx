import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { Connect } from "react-redux";
import { agregarFavoritos, borrarFavoritos } from "../redux/actions";


export function Card({name, species, gender, image, onClose,id, agregarFavoritos, borrarFavoritos}) {

const [isFav, setIsfav] = React.useState(false)

   return (
      <div>
         
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}

export function mapDispatchToProps(dispatch){
  
}

export default connect(null, mapDispatchToProps)(Card);