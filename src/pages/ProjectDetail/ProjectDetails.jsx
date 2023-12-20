import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../helper/imageData";
import "./ProjectDetails.scss";
import NotFound from "../../components/Error/NotFound";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const filteredImage = data.filter((item) => item.id === Number(id));

  if (filteredImage.length === 0 || !filteredImage[0].image || !filteredImage[0].desc) {
    return <NotFound />;
  }

  return (
    <>
      <div className="projectDetails">
        <h1 className="projectDetails__title">Project Details</h1>
        <img
          src={`.${filteredImage[0].image}`}
          alt="image"
          className="projectDetails__image"
        />
        <p>{filteredImage[0].desc}</p>
      </div>
      <div className="buttons">
        <button
          className="buttons__back"
          type="button"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          className="buttons__home"
          type="button"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
    </>
  );
};

export default ProjectDetails;