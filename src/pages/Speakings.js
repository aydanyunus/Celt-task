import React from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/Speakings.css";

const Speakings = () => {
  const speakingItems = [
    { id: 1, title: 'CELT English A1' },
    { id: 2, title: 'CELT English A2' },
    { id: 3, title: 'CELT English B1' },
    { id: 4, title: 'CELT English B1+' },
    { id: 5, title: 'CELT English B2' },
    { id: 6, title: 'CELT English C1' }
  ]
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb breadcrumb-list">
          <li className="breadcrumb-item">
            <a href="/speakings">Speakings</a>
          </li>
          <AiIcons.AiOutlineHome />
          <li className="breadcrumb-item active" aria-current="page">
            Speakings
          </li>
        </ol>
      </nav>
      <div className="speakings-wrapper">
        <div className="speaking-header">
          <h3>Speakings</h3>
        </div>
        <div className="speaking-items-wrapper">
          {
            speakingItems.map((item, index) => {
              return (
                <div className="speaking-item" key={index}>
                  <div className="g-english-circle">
                    <div className="circle-content">
                      <span>general</span>
                      <span>english</span>
                    </div>
                  </div>
                  <div className="link">
                    <Link to={`/SpeakingList/${item.title}`}>
                      {item.title}
                    </Link>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </>
  );
};
export default Speakings;
