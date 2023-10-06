import React, { useState } from 'react';
import axios from 'axios';

const AddProbablity = ({ closeModal }) => {
    
    const [probablity, setProbablity] = useState('');
    const [probablitydefination, setProbablityDefination] = useState('');
    const [aditionalguidance, setAdditionalGuidance] = useState('');
   
    const handleSubmitProbablity = async (e) => {
      e.preventDefault();
      
      // Prepare the data to send to the API
      const newProbablityData = {
        probablity: probablity,
        probablitydefination: probablitydefination,
        aditionalguidance: aditionalguidance
      };
  
      try {
        // Send a POST request to your Django API to add the new threat
        console.log("before")
        console.log(newProbablityData)
        await axios.post('http://localhost:8000/api/Probablity/addProbablity/',  newProbablityData);
        
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
          <h2 className="text-2xl text-steelblue font-semibold mb-4">Add Probability</h2>
          <form onSubmit={handleSubmitProbablity}>
          <div>
  <label className="block text-steelblue font-semibold mb-1">Probability:</label>
  <select
    value={probablity}
    onChange={(e) => {setProbablity( e.target.value )}}
    className="w-80 px-4 py-2 border rounded mb-4"
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
                onChange={(e) => setProbablityDefination(e.target.value)}
                className="w-80 px-4 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-steelblue font-semibold mb-1">Additional Guidance:</label>
              <input
                type="text"
                value={aditionalguidance}
                onChange={(e) => setAdditionalGuidance(e.target.value)}
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

export default AddProbablity;
