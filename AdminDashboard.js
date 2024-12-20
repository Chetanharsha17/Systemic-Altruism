import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get("/resources").then((res) => setResources(res.data));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>{resource.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
