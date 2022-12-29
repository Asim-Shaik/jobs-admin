import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const TableComponent = ({ data }) => {
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`https://jobs-juzx.onrender.com/api/jobs/${data._id}`);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <tr className="capitalize">
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex">
            <div>
              <p className="text-gray-900 whitespace-no-wrap">
                {data.job_title}
              </p>
              <p className="text-gray-600 whitespace-no-wrap">{data._id}</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{data.job_role}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{data.location}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex">
            <div>
              <Link to={`/edit/${data._id}`}>
                <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1">
                  Edit
                </button>
              </Link>
              <button
                onClick={handleClick}
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
              >
                Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableComponent;
