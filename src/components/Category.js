import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getCategory } from "../api";



export default function Category({getCatId}) {

    const getClass = ({isActive}) => isActive?"category-active":null
  const { catId } = useParams();
  const category = getCategory(catId);
  getCatId(catId)
//   console.log(category)
  return (
    <>
      <h2>{category.name} Sessions</h2>

      <ul className="session-list">
        {category?.sessions.map((session) => (
          <li className="session" key={session.id}>
          <NavLink to={session.id} className={getClass} >
            <p className="session-name">
                {session.name}
            </p>
            <p>
              {session.speaker.name} | {session.speaker.org}
            </p> </NavLink>
          </li>
        ))}
      </ul>
    <Outlet/>
    </>
  );
}
