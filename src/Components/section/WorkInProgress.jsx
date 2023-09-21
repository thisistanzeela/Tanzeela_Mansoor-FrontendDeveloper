import React from 'react';

function WorkInProgress() {
  return (
    <>
      {/* Section for Work In Progress */}
      <section className="section-d">
        <div className="section-inner">
          <h4>Upcoming Launch</h4>
          <h2>CRS-25 Mission</h2>
          {/* Message indicating work in progress */}
          <h5>Work In Progress...........</h5>
        </div>
        {/* Scroll arrow icon */}
        <div className="scroll-arrow">
          <svg width="30px" height="20px">
            <path
              stroke="#ffffff"
              fill="none"
              strokeWidth="2px"
              d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}

export default WorkInProgress;
