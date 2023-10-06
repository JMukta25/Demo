import React, { useState, useEffect } from 'react';
import axios from 'axios';
 import AddProbablity from './addProbablity';
import EditProbablityModal from './editProbablitydefination'; // Create this component
const Probablitydefinationdatatable = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage AddThreatModal
    const [editProbablity, setEditProbablity] = useState(null); // State to track edited threat
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/Probablity/getProbablity/');
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const openEditModal = (probablity) => {
      setEditProbablity(probablity);
    };
  
    const closeEditModal = () => {
      setEditProbablity(null);
    };
  
    const handleDeleteProbablity = async (probablity) => {
      console.log(probablity)
      try {
        // Implement your axios.delete request to delete the threat by ID
        // After successful deletion, you can fetch the updated data
        const response = await axios.delete(`http://localhost:8000/api/Probablity/deleteRisk/${probablity}/`);
        if (response.status === 200) {
          console.log("reponse status 200")
          closeModal();
          fetchData();
        } else {
          console.error('Failed to update threat.');
        }
      } catch (error) {
        setError(error);
      }
    };
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error fetching data: {error.message}</div>;
    }
  



    return (
        <div className="data-table p-4">
        <div className="flex justify-end mb-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-800" onClick={openModal}>
          + Add New Probablity
        </button>
      </div>
      <table className="w-full border-collapse bg-blue-100 shadow-lg rounded-lg">
      <thead>
          <tr className="bg-steelblue text-white">
        <th className="py-3 px-6 border text-left">Probability</th>
        <th className="py-3 px-6 border text-left">Probability-Description</th>
        <th className="py-3 px-6 border text-left">Additional-Guidance</th>
       
          </tr>
        </thead>
        <tbody>
          {data.map(entry => (
            <tr key={entry._id} className="border">
            
              <td className="py-3 px-6 border text-left">{entry.probablity}</td> 
              <td className="py-3 px-6 border text-left">{entry.probablitydefination}</td> 
              <td className="py-3 px-6 border text-left">{entry.aditionalguidance}</td> 

           
              <td className="py-3 px-6 border text-left">
                <button
                   onClick={() => openEditModal(entry)}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-800">
                  Edit
                </button>
              </td>
              <td className="py-3 px-6 border text-left">
                <button
                  onClick={() =>{ handleDeleteProbablity(entry.probablity)
                    // console.log(entry)
                  }}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>   
          ))}


        </tbody>
        {isModalOpen && <AddProbablity closeModal={closeModal} />}
      {editProbablity && (
        <EditProbablityModal
          probablity={editProbablity}
          closeModal={closeEditModal}
          fetchData={fetchData} // Pass the fetchData function to update data after editing
        />
      )}
            

              
           
          </table>

        </div>
      );    



}

export default Probablitydefinationdatatable;