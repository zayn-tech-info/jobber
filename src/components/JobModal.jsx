import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { jobs } from "../constants";

Modal.setAppElement("#root");

const JobModal = ({ question, actBtn, displayKey }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [role, setRole] = useState("");

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  function handleSave() {
    closeModal();
  }

  return (
    <div>
      <div>
        <div>
          <p className="text-lg font-medium py-5">{question}</p>
          <div className="space-y-4">
            <div className="flex items-center shadow gap-3  py-2 bg-[#FFBF46] rounded-md justify-center">
              <span>{role || "Nill"}</span>
              <ion-icon className="text-2xl" name="close-outline"></ion-icon>
            </div>
            <div
              onClick={openModal}
              className="flex items-center shadow rounded-md gap-2 w-38 px-2 py-2 justify-center border-dotted border-1 border-[#FFBF46]"
            >
              <ion-icon name="add-outline"></ion-icon>
              <span className="text-sm">{actBtn}</span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Job Role"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "2rem",
            borderRadius: "10px",
            width: "500px",
            maxWidth: "90vw",
            maxHeight: "60vh",
            overflowY: "auto",
          },
        }}
      >
        <h2 className="text-xl mb-4">Add Job Role</h2>
        <input
          type="text"
          value={role}
          placeholder="Search role"
          className="border p-2 w-full mb-4"
        />

        <div>
          {jobs.map((job) => (
            <p
              onClick={() => {
                setRole(job[displayKey]);
              }}
              key={job.id}
              className="text-sm font-font-normal cursor-pointer my-1 p-1 border-1 border-gray-300"
            >
              {job[displayKey]}
            </p>
          ))}
        </div>

        <div className="flex justify-end items-center mt-3 gap-2">
          <button
            onClick={closeModal}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-yellow-500 px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default JobModal;
