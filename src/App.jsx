import { useState, useEffect } from "react";
import "./App.css";
import Header from './components/Header';
import TravelForm from './components/TravelForm';
import TravelList from './components/TravelList';


function App() {

  const [travels, setTravels] = useState(() => {
    const saved = localStorage.getItem('travels');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  const [editingTravel, setEditingTravel] =useState(null);

  useEffect(() => {
    localStorage.setItem('travels',JSON.stringify(travels));
  },[travels]);

  const handelAdd = (newTravel) => {
    setTravels([...travels, newTravel]);
  };

  const handleUpdate = (updatedTravel) => {
    setTravels(travels.map(t => 
      t.id === updatedTravel.id ? updatedTravel: t
    ));
    setEditingTravel(null);
  };

  const handleEdit = (traavel) => {
    setEditingTravel(travel);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const handleCancelEdit = () => {
    setEditingTravel(null);
  };

  const totalCOuntries = new Set(travels.map(t=> t.country)).size;

  return (
    <div className="App">
      <Header 
      totalTrips={travels.length} 
      totalCountries={totalCountries} 
      />

      <TravelForm
      onAdd={handleAdd}
      editingTravel={editingTravel}
      onUpdate={handleUpdate}
      onCancelEdit={handleCancelEdit}
      />

      <TravelList
      travels={travels}
      onEdit={handleEdit}
      onDelete={handleDelete}
      />

    </div>
  );
}
export default App;
