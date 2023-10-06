import React, { useState } from 'react';
import axios from 'axios';

const EditProbablityModal = ({ probablity, closeModal, fetchData }) => {
  console.log(probablity);
   const [editedProbablity, setEditedProbablity] = useState({ ...probablity });
 

  const handleSaveProbablity = async () => {
    console.log("In save")
    try {
      console.log(editedProbablity); // Object for updating the probablity
      const response = await axios.put(`http://localhost:8000/api/Probablity/updateRisk/${editedProbablity.probablity}/`, editedProbablity);

      if (response.status === 200) {
        closeModal();
        fetchData();
      } else {
        console.error('Failed to update threat.');
      }
    } catch (error) {
      console.error('An error occurred while updating threat:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl text-steelblue font-semibold mb-4">Edit probablity</h2>
      <div>
        {/* <label className="block text-steelblue font-semibold mb-1">Edit Risk Name:</label>
        <input
          type="text"
          value={editedRisk.riskname}
          onChange={(e) => setEditedRisk({ ...editedRisk, riskname: e.target.value })}
          className="w-80 px-4 py-2 border rounded mb-4"
        /> */}
      </div>
      <div>
  <label className="block text-steelblue font-semibold mb-1">Probability:</label>
  <select
    value={editedProbablity.probablity}
    onChange={(e) => setEditedProbablity({ ...editedProbablity, probablity: e.target.value })}
    className="w-80 px-4 py-2 border rounded mb-4"
  >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
</div>

      <div>
        <label className="block text-steelblue font-semibold mb-1">Probability Definition:</label>
        <input
          type="text"
          value={editedProbablity.probablitydefination}
          onChange={(e) => setEditedProbablity({ ...editedProbablity, probablitydefination: e.target.value })}
          className="w-80 px-4 py-2 border rounded mb-4"
        />
      </div>
      {/* <div>
  <label className="block text-steelblue font-semibold mb-1">Impact:</label>
  <select
    value={editedRisk.impact}
    onChange={(e) => setEditedRisk({ ...editedRisk, impact: e.target.value })}
    className="w-80 px-4 py-2 border rounded mb-4"
  >
    <option value="1">1 - Low</option>
    <option value="2">2 - Moderate</option>
    <option value="3">3 - Medium</option>
    <option value="4">4 - High</option>
    <option value="5">5 - Very High</option>
  </select>
</div> */}

      <div>
        <label className="block text-steelblue font-semibold mb-1">Additional guidance:</label>
        <input
          type="text"
          value={editedProbablity.aditionalguidance}
          onChange={(e) => setEditedProbablity({ ...editedProbablity, aditionalguidance: e.target.value })}
          className="w-80 px-4 py-2 border rounded mb-4"
        />
      </div>
      {/* <div>
        <label className="block text-steelblue font-semibold mb-1">Category:</label>
        <input
          type="text"
          value={editedRisk.category}
          onChange={(e) => setEditedRisk({ ...editedRisk, category: e.target.value })}
          className="w-80 px-4 py-2 border rounded mb-4"
        />
      </div> */}
      <div className="mt-4">
        <button
          onClick={handleSaveProbablity}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white px-4 py-2 ml-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  
  
  );
};

export default EditProbablityModal;
