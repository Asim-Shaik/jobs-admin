import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableComponent from "./TableComponent";
const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get("https://jobs-juzx.onrender.com/api/jobs");
        const data = setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getdata();
    console.log(data);
  }, []);
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="flex flex-row content-between">
            <h2 className="text-2xl font-semibold leading-tight flex-1">
              Current Job posts
            </h2>
            <Link to={`/add`}>
              <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded m-1 ">
                Add
              </button>
            </Link>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Job Title
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Job Type
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => {
                    return <TableComponent data={item} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
