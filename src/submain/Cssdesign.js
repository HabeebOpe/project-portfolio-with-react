import React from "react";
import "../prolist.css";
import img from "../asset/name.png";
import { useState, useEffect } from "react";
import { db } from "../Firebase";
import { 
  onSnapshot, 
  collection, 
  getDocs, 
  query, 
  orderBy
} from 'firebase/firestore';

export default function Cssdesign() {
  const handleClick = (event) => {
    const li = event.currentTarget;
    li.classList.add("appear")
    setTimeout(() => {
      li.classList.remove("appear")
    }, 5000)
  }

  const [item, setItem] = React.useState([])
  useEffect(() => {
    const q = query(collection(db, "cssdesign"), orderBy("timestamp", "desc"))
    const unsub = onSnapshot(q, (snapshot) => 
      setItem(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    );
    return unsub;
  }, [])

  const list = item.map((cssList) => {
    return(
        <li key={cssList.id} className="proitem" onClick={handleClick}>
        <h2 className="projname">{cssList.name}</h2>
        <div className="item-img">
          <img src={cssList.imageUrl} alt="project demo image" />
          <div className="view-option">
            <a href={cssList.live}><p>Live site</p></a>
            <a href={cssList.github}><p>Source code</p></a>
          </div>
        </div>
      </li> 
    )
  })
  return (
    <div className="project-list">
      <ul className="prolist">
       {list}
      </ul>
    </div>
  );
}


