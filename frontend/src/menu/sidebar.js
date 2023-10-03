import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-steelblue p-4 text-white w-44">
          <Link to="/datatable" className="block text-white text-lg no-underline hover:bg-gray-400 hover:rounded-lg"><div className=" p-2 m-4 rounded-lg">Threat / Vulnerability Management</div></Link>
        
          <Link to="/about" className="block text-white no-underline hover:bg-gray-400 hover:rounded-lg"><div className=" p-2 m-4 rounded-lg">User Management</div></Link>
      
          <Link to="/riskdefinationdatatable" className="block text-white no-underline hover:bg-gray-400 hover:rounded-lg"><div className=" p-2 m-4 rounded-lg">Risk Definitions</div></Link>
     
          <Link to="/" className="block text-white no-underline hover:bg-gray-400 hover:rounded-lg"><div className="p-2 m-4 rounded-lg">Risk Analysis</div></Link>
     
    </div>
  );
}

export default Sidebar;
