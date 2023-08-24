import "./App.css";
import { puppyList } from "./data";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);

  return (
    <>
      <div className="mb-5">
        <h1 className="text-primary">Puppies</h1>
        <h5 className="pb-3">Click names to view details.</h5>
        {puppies.map((puppy) => {
          return (
            <div>
              <p
                onClick={() => {
                  setFeatPupId(puppy.id);
                }}
                key={puppy.id}
              >
                {puppy.name}
              </p>
            </div>
          );
        })}
      </div>
      {featPupId && (
        <div>
          <h2 className="text-primary">Featured Puppy:</h2>
          <h5>{featuredPup.name}</h5>
          <ul>
            <li>Owner ID: {featuredPup.ownerId}</li>
            <li>Age: {featuredPup.age} years</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
