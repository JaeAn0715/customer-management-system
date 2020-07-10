import React from "react";
import "./App.css";
import Customer from "./Component/customer";

const customers = [
  {
    id: 1,
    img: "https://placeimg.com/64/64/1",
    name: "Jane",
    bday: "560711",
    gender: "Female",
    job: "Marketing",
  },
  {
    id: 2,
    img: "https://placeimg.com/64/64/2",
    name: "Alex",
    bday: "560711",
    gender: "Female",
    job: "Designer",
  },
  {
    id: 3,
    img: "https://placeimg.com/64/64/3",
    name: "Poo",
    bday: "560711",
    gender: "Male",
    job: "Dev",
  },
];

function App() {
  return (
    <div className="background">
      {customers.map((customer) => {
        return (
          <Customer
            key={customer.id}
            id={customer.id}
            img={customer.img}
            name={customer.name}
            bday={customer.bday}
            gender={customer.gender}
            job={customer.job}
          />
        );
      })}
    </div>
  );
}

export default App;
