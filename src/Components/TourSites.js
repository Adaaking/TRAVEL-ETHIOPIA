import React, { useState } from "react";
import { tourist_sites } from "../my_datas/data";
import Categories from "./Categories";
import Tour from "./Tour";
import Detail from "./Detail";
const newRegions = [
  "all",
  ...new Set(tourist_sites.map((newTour) => newTour.region)),
];
const TourSites = () => {
  const [tours, setTours] = useState(tourist_sites);
  const [searchTerm, setSearchTerm] = useState("");
  const [detail, setDetail] = useState();

  const filterTour = (region) => {
    if (region === "all") {
      setTours(tourist_sites);
      return;
    }
    console.log(searchTerm);
    const newItem = tourist_sites.filter((item) => item.region === region);
    setTours(newItem);
  };
  const filterById = (id) => {
    const singletour = tourist_sites.filter((tour) => tour.id === id);
    setDetail(singletour);
  };

  const filterbySearchTerm = () => {
    const searchTour = tourist_sites.filter((tour) => tour.name === searchTerm);
    setTours(searchTour);
    setSearchTerm('')
  };

  const setDetails = () => setDetail(null);

  return detail ? (
    <Detail singletour={detail} setDetails={setDetails} />
  ) : (
    <div className="tour-container">
      <div className="search">
      <input
        type="text"
        placeholder="search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn" onClick={filterbySearchTerm}>search</button>
      </div>
      <div className="our_sites">
        <h1>Our Tourist sites </h1>
        <div className="underline"></div>
      </div>
      <Categories regions={newRegions} filterTour={filterTour} />
      {tours.map((tour) => (
        <Tour tour={tour} key={tour.id} filterById={filterById} />
      ))}
    </div>
  );
};

export default TourSites;
