import React, { useContext } from "react";
import plusImg from "../Assets/plus.svg";
import GlobalContext from "../context/GlobalContext";

const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className=" border p-2 shadow-md flex rounded-full items-center hover:shadow-2xl"
    >
      <img src={plusImg} alt="" className="h-7 w-7" />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
};

export default CreateEventButton;
