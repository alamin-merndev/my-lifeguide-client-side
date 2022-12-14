import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const Service = ({ services }) => {
  return (
    <div className="container mx-auto my-16">
      <h1 className="text-center text-4xl uppercase font-semibold mb-10">
        Area of services
      </h1>
      <div className=" flex flex-col md:flex-row justify-center gap-12 items-center">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/services">
          <button className="btn btn-info text-white ">
            View All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
