import React, { useContext, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineClose,AiTwotoneDelete } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import { MdDragHandle, MdSchedule, MdSegment } from "react-icons/md";
import GlobalContext from "../context/GlobalContext";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

const EventModal = () => {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <herder className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-600">
            <MdDragHandle />
          </span>
          <div className="flex">
          {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
               <AiTwotoneDelete/>
              </span>
            )}

          <button
            onClick={() => setShowEventModal(false)}
            className="text-gray-600"
          >
            <AiOutlineClose />
          </button>
          </div>
        </herder>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7 ">
            <input
              type="text"
              name="title"
              placeholder="Add title"
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex  items-center">
              <span className="text-gray-400 ">
                < MdSchedule className="mt-1 mx-1 h-10 w-7" />
              </span>
              <p >{daySelected.format("dddd, MMMM DD")}</p>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-gray-400">
                <MdSegment className="mt-1 mx-1 h-10 w-7"  />
              </span>
              <input
                type="text"
                name="description"
                placeholder="Add a description"
                required
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex  items-center">
              <span className="text-gray-400">
                <BsBookmarkCheck  className="mt-1 mx-1 h-10 w-7"/>
              </span>
              <div className="flex gap-x-2">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`bg-${lblClass}-600 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <span className="text-white text-sm">
                        <AiOutlineCheckCircle />
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-end w-100 border-t p-3 mt-5 ">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
