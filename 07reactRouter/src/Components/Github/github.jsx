import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData()

//   const [data, setData] = useState(0);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/Rohanstha555`)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);
  return (
    <div className="flex justify-center"> 
    <div className="flex justify-center bg-gray-700 text-white p-3 text-3xl gap-3 ">
      <img src={[data.avatar_url]} alt="" />
      <div>Github Followers: {[data.followers]}</div>
    </div>
    </div>
  );
}

export default Github;

export const githuninfoLoader = async () =>{
   const res = await fetch(`https://api.github.com/users/Rohanstha555`,{
    headers: {
        "User-Agent": "request",
    },
   })
    return res.json()
}
