import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

const App = () => {

  const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadCoffees);

  return (
    <div className="m-20">
      <h2 className="text-center my-20 text-6xl font-bold text-cyan-600">Coffee Master</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {
          coffees.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default App;