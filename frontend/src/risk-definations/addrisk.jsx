import React, { useState } from 'react';
import axios from 'axios';

const AddRisk = ({ closeModal }) => {
    const [riskname, setRiskName] = useState('');
    const [probablity, setProbablity] = useState('');
    const [probablitydefination, setProbabilityDefination] = useState('');
    const [impactdefination, setImpactDefination] = useState('');
    const [impact, setImpact] = useState('');
    const [category, setCategory] = useState('');
   
  
    const handleSubmitRisk = async (e) => {
      e.preventDefault();
      
      // Prepare the data to send to the API
      const newRiskData = {
        riskname: riskname,
        probablity: probablity,
        probablitydefination:probablitydefination,
        impact:impact,
        impactdefination:impactdefination,
        category:category
      };
  
      try {
        // Send a POST request to your Django API to add the new threat
        await axios.post('http://localhost:8000/api/RD/addRisk/',  newRiskData);
        
        // After successful submission, you can close the modal
        closeModal();
      } catch (error) {
        // Handle error if API request fails
        console.error('Error adding new threat:', error);
        // Optionally, show an error message to the user
      }
    };



  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-steelblue font-semibold mb-4">Add Risk</h2>
        <form  onSubmit={handleSubmitRisk}>
          <div className="mb-4">
            <label className="block text-steelblue font-semibold mb-1">Risk Name:</label>
            <input
              type="text"
              value={riskname}
              onChange={(e) => setRiskName(e.target.value)}
              className="w-80 px-4 py-2 border rounded"
              required
            />
          </div>
       

<div className="mb-4">
  <label className="block text-steelblue font-semibold mb-1">Probability:</label>
  <select
     value={probablity}
     onChange={(e) => setProbablity(e.target.value)}
    className="w-80 px-4 py-2 border rounded"
    required
  >
    <option value="1">1 - Low</option>
    <option value="2">2 - Moderate</option>
    <option value="3">3 - Medium</option>
    <option value="4">4 - High</option>
    <option value="5">5 - Very High</option>
  </select>
</div>

<div className="mb-4">
  <label className="block text-steelblue font-semibold mb-1">Probability Description:</label>
  <input
    type="text"
     value={probablitydefination}
     onChange={(e) => setProbabilityDefination(e.target.value)}
    className="w-80 px-4 py-2 border rounded"
    required
  />
</div>

<div className="mb-4">
  <label className="block text-steelblue font-semibold mb-1">Impact:</label>
  <select
     value={impact}
     onChange={(e) => setImpact(e.target.value)}
    className="w-80 px-4 py-2 border rounded"
    required
  >
    <option value="1">1 - Low</option>
    <option value="2">2 - Moderate</option>
    <option value="3">3 - Medium</option>
    <option value="4">4 - High</option>
    <option value="5">5 - Very High</option>
  </select>
</div>

<div className="mb-4">
  <label className="block text-steelblue font-semibold mb-1">Impact Description:</label>
  <input
    type="text"
     value={impactdefination}
     onChange={(e) => setImpactDefination(e.target.value)}
    className="w-80 px-4 py-2 border rounded"
    required
  />
</div>

<div className="mb-4">
  <label className="block text-steelblue font-semibold mb-1">Category:</label>
  <input
    type="text"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="w-80 px-4 py-2 border rounded"
    required
  />
</div>

          
          <div className="mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 ml-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRisk;
