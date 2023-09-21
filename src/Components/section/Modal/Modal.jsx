import { useContext, useRef, useEffect } from "react";
import "./Modal.css";
import { MyContext } from "../../Context/MyContext";

export default function Modal() {
  // Accessing state and context from MyContext
  const { modalshow, setmodalshow, selectedData, setselectedData } =
    useContext(MyContext);

  // Ref to access the body element
  const bodyRef = useRef(document.body);

  // Extract date and time from selected data
  const launchDateTime = new Date(selectedData.original_launch);
  const launchDate = launchDateTime.toLocaleDateString(); // Format date as "MM/DD/YYYY"
  const launchTime = launchDateTime.toLocaleTimeString(); // Format time as "HH:MM:SS AM/PM"

  // Effect to control scrolling when the modal is shown/hidden
  useEffect(() => {
    if (modalshow) {
      bodyRef.current.style.overflow = "hidden"; // Disable scrolling when the modal is shown
    } else {
      bodyRef.current.style.overflow = "auto"; // Restore default scrolling
    }

    // Cleanup by restoring default scrolling when the component unmounts
    return () => {
      bodyRef.current.style.overflow = "auto";
    };
  }, [modalshow]);

  return (
    <div className="ModalSection">
      <div className="ModalContent">
        <div className="closebtnSection">
          {/* Button to close the modal */}
          <button
            onClick={() => {
              setmodalshow(false);
            }}
          >
            X
          </button>
        </div>
        <h1>{selectedData.capsule_serial}</h1>
        <div className="Detailsbox">
          <div id="CapulesText">
            {/* Display capsule details */}
            <p>
              {" "}
              <span>Capsule ID: </span>
              {selectedData.capsule_id}
            </p>
            <p>
              <span>Status: </span>
              <span
              >
                {selectedData.status}
              </span>
            </p>
            <p>
              <span>Original Launch: </span>
              {launchDate} , {launchTime}
            </p>
            <p>
              <span>Type: </span>
              {selectedData.type}
            </p>
            <p>
              <span>Original Launch Unix: </span>
              {selectedData.original_launch_unix}
            </p>
            <p>
              <span>Count: </span>
              {selectedData.reuse_count}
            </p>
            <p>
              <span>Details: </span>{" "}
              {selectedData.details ? (
                selectedData.details
              ) : (
                <span>No detail available</span>
              )}
            </p>
          </div>
          <div id="CapulesMission">
            <h1>Mission</h1>
            <ol type="1">
              {selectedData.missions.length > 0 ? (
                selectedData.missions.map((item) => {
                  return (
                    <div className="missions" key={item.name}>
                      {item.name}
                      <p>Flight: {item.flight}</p>
                    </div>
                  );
                })
              ) : (
                <p>No mission </p>
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
