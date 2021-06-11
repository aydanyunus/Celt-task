import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import SpeakingItem from '../components/SpeakingItem';
import "../styles/SpeakingList.css";

const SpeakingList = ({ match }) => {
  const speakingitems = [
    { id: 1, title: 'A1 Unit 1A', qTitle: 'Talk about something', q1: 'Question number one', q2: 'Question number two', q3: 'Question number three' },
    { id: 2, title: 'A1 Unit 1B', qTitle: 'Talk about something', q1: 'Question number one', q2: 'Question number two', q3: 'Question number three' },
    { id: 3, title: 'A1 Unit 2A', qTitle: 'Talk about something', q1: 'Question number one', q2: 'Question number two', q3: 'Question number three' },
    { id: 4, title: 'A1 Unit 2B', qTitle: 'Talk about  something', q1: 'Question number one', q2: 'Question number two', q3: 'Question number three' },
    { id: 5, title: 'A1 Unit 3A', qTitle: 'Talk about  something', q1: 'Question number one', q2: 'Question number two', q3: 'Question number three' },
    { id: 6, title: 'A1 Unit 3B', qTitle: 'Talk about  something', q1: 'Question number one', q2: 'Question number two', q3: 'Question number three' },
    { id: 7, title: 'A1 Unit 4A', qTitle: 'Talk about  something', q1: 'Question number one', q2: 'Question number two', q3: 'Question number three' },
    { id: 8, title: 'A1 Unit 4B', qTitle: 'Talk about  something', q1: 'Question number one', q2: 'Question number two', q3: 'Question number three' },
    { id: 9, title: 'A1 Unit 5A', qTitle: 'Talk about  something', q1: 'Question number one', q2: 'Question number two', q3: 'Question number three' },
    { id: 10, title: 'A1 Unit 5B', qTitle: 'Talk about  something', q1: 'Question number one', q2: 'Question number two', q3: 'Question number three' }
  ]

  const [title, setTitle] = useState(null);

  useEffect(() => {
    let title = match.params.title;
    setTitle(title);
  }, [match.params.title]);

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
      <div className="speaking-list">
        <div className="speaking-list-header">
          <h3>{title}</h3>
        </div>
        <div className="speaking-list-items-wrapper">
          <SpeakingItem speakingitems={speakingitems} />
        </div>
      </div>
    </>
  );
};
export default SpeakingList;
