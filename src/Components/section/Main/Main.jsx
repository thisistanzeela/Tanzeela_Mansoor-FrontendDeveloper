import React, { useContext, useEffect, useState } from "react";
import Search from "../Search/search";
import { MyContext } from "../../Context/MyContext";
import DataCart from "../Datas/Data";
import "./Main.css";
import Modal from "../Modal/Modal";

export default function Main() {
  // Accessing state and context from MyContext
  const { CapsuleData, setCapsuleData, filteredCapsules, setFilteredCapsules } =
    useContext(MyContext);
  const { modalshow, setmodalshow } = useContext(MyContext);

  // Authentication key for fetching data
  const authkey = 7777;

  // State for current page and items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  // Function to calculate total number of pages based on filtered data
  const calculateTotalPages = () => {
    return Math.ceil(filteredCapsules.length / itemsPerPage);
  };

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://spacex-assignment.onrender.com/api/data",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authkey,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        console.log("Fetched data:", result); // Log the fetched data

        // Set the fetched data to CapsuleData and filteredCapsules
        setCapsuleData(result.spaceXData);
        setFilteredCapsules(result.spaceXData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setCapsuleData]);

  // total number of pages
  const totalPages = calculateTotalPages();

  //  index on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the current items to display based on the current page
  const currentItems = filteredCapsules?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <section className="Main section-b ">
        <Search />
        {currentItems.length > 0 ? (
          <div className="DisplayArea">
            {currentItems.map((data) => (
              //cart for displaying data
              <DataCart key={data.capsule_serial} data={data} />
            ))}
          </div>
        ) : (
          <div className="no-data">
            <div>
              <h1>No Data.....</h1>
            </div>
          </div>
        )}
        {/* Pagination for capsules */}
        <div className="pagination">
          <ul>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {modalshow && <Modal />}
    </>
  );
}
