import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">お相手からのいいね！</h1>
      <div className="card-container">
        <div
          className="card"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)"
          }}
        >
          <div className="info">
            <div className="name">
              <span>
                <svg
                  style={{ width: "10px", height: "10px" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#01cb6f"
                    d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </span>
              <span>ゆみ</span>
              <span className="age">23歳</span>
              <span className="prefecture">愛知</span>
              <span className="percent">
                <span>
                  <svg
                    style={{ width: "10px", height: "10px" }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#f67272"
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                    />
                  </svg>
                </span>
                <span>90%</span>
              </span>
            </div>
            <div className="communities">
              <span className="community">まじめに探しています</span>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="button-nope">
          <svg style={{ width: "40px", height: "40px" }} viewBox="0 0 24 24">
            <path
              fill="#cbced0"
              d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z"
            />
          </svg>
        </button>
        <button className="button-like">
          <svg style={{ width: "28px", height: "28px" }} viewBox="0 0 24 24">
            <path
              fill="#f67272"
              d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
