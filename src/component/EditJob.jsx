import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
const EditJob = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  //   console.log(path);

  const [selected, setSelected] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [locaation, setLocation] = useState("");
  const [openings, setOpenings] = useState(0);
  //   const [job, setJob] = useState({});

  useEffect(() => {
    const getJob = async () => {
      try {
        const res = await axios.get(
          `https://jobs-juzx.onrender.com/api/jobs/${id}`
        );
        // setJob(res.data);
        // console.log(res.data);
        setTitle(res.data.job_title);
        setCompany(res.data.company);
        setLocation(res.data.location);
        setDescription(res.data.description);
        setSelected(res.data.job_role);
        setOpenings(res.data.openings);
      } catch (err) {
        console.error(err);
      }
    };
    getJob();
    // console.log(job);
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `https://jobs-juzx.onrender.com/api/jobs/${id}`,
        {
          job_title: title,
          job_role: selected,
          company: company,
          openings: openings,
          location: locaation,
          description: description,
        }
      );
      console.log(res.data);
      res.data && window.location.replace("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Edit <span className="text-indigo-600">Job Opening</span>
          </h3>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Job title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Location
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                value={locaation}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                company
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <div className="flex justify-center">
                <div>
                  <p classNameName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Job - Type
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value={"Full-time"}
                      onChange={(e) => setSelected(e.target.value)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault1"
                    >
                      Full-time
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value={"Part-time"}
                      onChange={(e) => setSelected(e.target.value)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault2"
                    >
                      Part-time
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      value={"Appreniceship"}
                      onChange={(e) => setSelected(e.target.value)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault3"
                    >
                      Apprenticeship
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      value={"Internship"}
                      onChange={(e) => setSelected(e.target.value)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault4"
                    >
                      Internship
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault5"
                      value={"Freelance"}
                      onChange={(e) => setSelected(e.target.value)}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault5"
                    >
                      Freelance
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Vacancies
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="01"
              value={openings}
              onChange={(e) => setOpenings(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Description
              </label>
              <textarea
                rows="10"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Edit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJob;
