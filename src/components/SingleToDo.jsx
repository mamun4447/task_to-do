import React from "react";
import Details from "./Details";
import UpdateToDo from "./UpdateToDo";

const SingleToDo = () => {
  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th className="">Description</th>
              <th className="">Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <input type="checkbox" className="cursor-pointer " />
              </td>
              <td>
                {/* The button to open modal */}
                <label
                  htmlFor="my-modal-3"
                  className="cursor-pointer hover:underline hover:text-blue-600"
                >
                  open modal
                </label>
              </td>
              <td className="">Quality Control Specialist</td>
              <td className="gap-1 flex">
                <label htmlFor="modal-for-update" className="btn btn-sm">
                  Update
                </label>
                <button className="btn btn-sm">Delete</button>
              </td>
              <td>=</td>
            </tr>
          </tbody>
        </table>
        <Details />
        <UpdateToDo />
      </div>
    </div>
  );
};

export default SingleToDo;
