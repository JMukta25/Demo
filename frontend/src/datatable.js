// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Datatable = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/api/data'); // Replace with your API endpoint
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="data-table">
//       <table>
//         <thead>
//           <tr>
//             <th>Column 1</th>
//             <th>Column 2</th>
//             <th>Column 3</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(item => (
//             <tr key={item._id}>
//               <td>{item.column1}</td>
//               <td>{item.column2}</td>
//               <td>{item.column3}</td>
//               <td>
//                 <button>Edit</button>
//               </td>
//               <td>
//                 <button>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Datatable;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('API_URL'); 
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="data-table p-4">
      <div className="flex justify-end mb-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-800">
          + Add New Threat
        </button>
      </div>
      <table className="w-full border-collapse bg-blue-100 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-steelblue text-white">
            <th className="py-3 px-6 border text-left">Threat</th>
            <th className="py-3 px-6 border text-left">Vulnerability</th>
            <th className="py-3 px-6 border text-left">Date</th>
            <th className="py-3 px-6 border"></th>
            <th className="py-3 px-6 border"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td colSpan="5" className="border h-4"></td>
          </tr>
          {data.map(threat => (
            <tr key={threat.id} className="border text-steelblue">
              <td className="py-3 px-6 border text-left">{threat.name}</td>
              <td className="py-3 px-6 border text-left">
                <ul>
                  {threat.vulnerabilities.map(vulnerability => (
                    <li key={vulnerability.id} className='flex-items-center'>
                      {vulnerability.name}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="py-3 px-6 border text-left">
                {threat.vulnerabilities.map(vulnerability => (
                  <div key={vulnerability.id}>
                    {vulnerability.date}
                  </div>
                ))}
              </td>
              <td className="py-3 px-6 border">
                <button className="bg-blue-500 hover:bg-blue-800 text-white py-1 px-2 rounded-md shadow-md">
                  Edit
                </button>
              </td>
              <td className="py-3 px-6 border">
                <button className="bg-red-500 hover:bg-red-800 text-white py-1 px-2 rounded-md shadow-md">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Datatable;





