import React, { useEffect, useRef, useState } from "react";

function Videocard({ datas }) {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [videoTitle, setVideoTitle] = useState("");

  const iframeRef = useRef(null);

  useEffect(() => {
    // You can make an additional request to the YouTube API to get video details
    // For simplicity, let's assume you have the video title available

    // Simulating an API request to get video details
    setTimeout(() => {
      setIsLoaded(true);
    },3000); // Adjust the timeout based on your needs
  }, []);

  return (
    <>
      {datas.map((data) => (
        <div className="col-11 col-lg-10 col-xl-4 my-md-3 " key={data.id}>
          <div className="card border-0 mt-sm-2 ">
            <div className="card-body text-start">
              <div
                style={{
                  width: isLoaded ? "auto" : "380px",
                  height: isLoaded ? "auto" : "250px",
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: isLoaded ? "transparent" : "GrayText",
                }}
              >
                {!isLoaded && (
                  <div
                    style={{
                      position: "absolute",
                      top: "55%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                      width: "100%",
                      color:'black',
                    }}
                  >
                    <p>Loading video...</p>
                  </div>
                )}
              </div>

              <div
                className="mt-2"
                style={{ display: isLoaded ? "block" : "none" }}
              >
                <iframe
                  ref={iframeRef}
                  width="380"
                  height="250"
                  src={data.videourl}
                  title={data.vidalt}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h4
                className="text-danger mt-2"
                style={{ display: isLoaded ? "block" : "none" }}
              >
                {data.title}
              </h4>
              <p
                className="text-danger"
                style={{ display: isLoaded ? "block" : "none" }}
              >
                {data.category}
              </p>
              <div style={{ display: isLoaded ? "block" : "none" }}>
                <a
                  href={data.videourl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-danger"
                >
                  Watch Now
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Videocard;
