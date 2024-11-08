import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './users.css'

const Users = () => {
  const [fdata, setData] = useState([]);  

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {Array.isArray(fdata) && fdata.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Username</th>
               
            </tr>
          </thead>
          <tbody>
            
            {fdata.map((elem) => (
              <tr >
                <td>{elem.username}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
      
        <div>
          <h1>Error: No data found</h1>
        </div>
      )}
    </>
  );
};

export default Users;
