import React from 'react';

function SectionThree() {
  // Define the YouTube video URL
  const videoUrl = 'https://www.youtube.com/embed/_krgcofiM6M';

  // Function to open the video in a new tab when the "Rewatch" button is clicked
  const openVideoInNewTab = (event) => {
    event.preventDefault();
    window.open(videoUrl, '_blank');
  };

  return (
    <>
      {/* Section for Starship */}
      <section className="section-c">
        <div className="section-inner">
          <h4>Starship</h4>
          <h2>First Integrated Flight Test</h2>
          {/* Button to open the video in a new tab */}
          <a href={videoUrl} className="btn" onClick={openVideoInNewTab}>
            <div className="hover"></div>
            <span>Rewatch</span>
          </a>
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

export default SectionThree;
