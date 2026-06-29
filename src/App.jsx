import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [userData, setUserData] = useState([])
  const getData = async () => {


    console.log("hello");
    const responce = await axios.get('https://picsum.photos/v2/list?page=6&limit=20');
    setUserData(responce.data)
  }
  let userprintdata = "No user Images availabel";

if (userData.length > 0) {
  userprintdata = userData.map(function (elem, idx) {
    return (
      <div key={idx}>
       <div>
         <img
          src={elem.download_url}
          alt="images"
          className="w-64 h-64 object-cover rounded-lg"
        />
        <h2>{elem.author}</h2>
       </div>
      </div>
    );
  });
}
  return (
    <div className='bg-black h-screen text-white overflow-auto '>

      <button
        onClick={getData}
        className='bg-green-800 px-8 py-4 m-8 font-bold rounded-2xl  '>
        Get Data
      </button>
      <div className="flex flex-wrap justify-center items-center gap-6 p-6">
        {userprintdata}
      </div>
    </div>
  )
}

export default App
