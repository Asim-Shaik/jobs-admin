import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
const AddJob = () => {
  const titleRef = useRef();
  const locationRef = useRef();
  const companyRef = useRef();
  const vacanciesRef = useRef();
  const descriptionRef = useRef();
  const [selected, setSelected] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://jobs-juzx.onrender.com/api/jobs", {
        job_title: titleRef.current.value,
        location: locationRef.current.value,
        company: companyRef.current.value,
        openings: vacanciesRef.current.value,
        description: descriptionRef.current.value,
        job_role: selected,
      });
      console.log(res.data);
      res.data && window.location.replace("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-5">
      <div className="text-center mb-16">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Add <span className="text-indigo-600">Job Opening</span>
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
              ref={titleRef}
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
              ref={locationRef}
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
              ref={companyRef}
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
            ref={vacanciesRef}
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
              ref={descriptionRef}
            ></textarea>
          </div>
          <div className="flex justify-between w-full px-3">
            <button
              className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddJob;

// <div classNameName="flex items-center justify-center bg-slate-600">
//   <form classNameName="mt-40 ml-56 sm:ml-0 w-4/6  h-screen">
//     <div classNameName="relative z-0 mb-6 w-full group">
//       <input
//         type="email"
//         name="floating_email"
//         id="floating_email"
//         classNameName="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//         placeholder=" "
//         required
//       />
//       <label
//         for="floating_email"
//         classNameName="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//       >
//         Email address
//       </label>
//     </div>
//     <div classNameName="relative z-0 mb-6 w-full group">
//       <input
//         type="password"
//         name="floating_password"
//         id="floating_password"
//         classNameName="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//         placeholder=" "
//         required
//       />
//       <label
//         for="floating_password"
//         classNameName="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//       >
//         Password
//       </label>
//     </div>
//     <div classNameName="relative z-0 mb-6 w-full group">
//       <input
//         type="password"
//         name="repeat_password"
//         id="floating_repeat_password"
//         classNameName="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//         placeholder=" "
//         required
//       />
//       <label
//         for="floating_repeat_password"
//         classNameName="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//       >
//         Confirm password
//       </label>
//     </div>
//     <div classNameName="grid md:grid-cols-2 md:gap-6">
//       <div classNameName="relative z-0 mb-6 w-full group">
//         <input
//           type="text"
//           name="floating_first_name"
//           id="floating_first_name"
//           classNameName="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//           required
//         />
//         <label
//           for="floating_first_name"
//           classNameName="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//         >
//           First name
//         </label>
//       </div>
//       <div classNameName="relative z-0 mb-6 w-full group">
//         <input
//           type="text"
//           name="floating_last_name"
//           id="floating_last_name"
//           classNameName="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//           required
//         />
//         <label
//           for="floating_last_name"
//           classNameName="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//         >
//           Last name
//         </label>
//       </div>
//     </div>
//     <div classNameName="grid md:grid-cols-2 md:gap-6">
//       <div classNameName="relative z-0 mb-6 w-full group">
//         <input
//           type="tel"
//           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//           name="floating_phone"
//           id="floating_phone"
//           classNameName="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//           required
//         />
//         <label
//           for="floating_phone"
//           classNameName="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//         >
//           Phone number (123-456-7890)
//         </label>
//       </div>
//       <div classNameName="relative z-0 mb-6 w-full group">
//         <input
//           type="text"
//           name="floating_company"
//           id="floating_company"
//           classNameName="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//           required
//         />
//         <label
//           for="floating_company"
//           classNameName="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//         >
//           Company (Ex. Google)
//         </label>
//       </div>
//     </div>
//     <button
//       type="submit"
//       classNameName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//     >
//       Submit
//     </button>
//   </form>
// </div>
