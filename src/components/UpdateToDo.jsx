import React from "react";

const UpdateToDo = () => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="modal-for-update" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <form className="modal-box">
          <h3 className="font-bold text-lg text-center">Add a note</h3>
          <input
            name="title"
            type="text"
            className="w-full rounded-lg input-group-sm px-5 py-1 my-5 border"
            placeholder="Title"
          />
          <textarea
            name="description"
            className="w-full h-52 border p-3 rounded-lg"
            placeholder="Write your todo..."
            rows=""
            cols=""
          ></textarea>
          <div className="text-center m-2">
            <label htmlFor="modal-for-update" className="btn">
              Update
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToDo;
