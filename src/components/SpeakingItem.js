import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import { useReactMediaRecorder } from "react-media-recorder";

const SpeakingItem = ({ speakingitems }) => {

    const {
        startRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({ audio: true });


    const [show, setShow] = useState(null);
    const [showBtn, setShowBtn] = useState(null);

    const handleShowBtn = (id) => setShowBtn(id);

    const handleClose = () =>{
        setShow(null);
        setShowBtn(null)
    }
    const handleShow = (id) => setShow(id);

    const [message, setMessage] = useState(null);

    const handleShowSecModal = (id) => {
        setMessage(id)
        setShow(null)
        setShowBtn(null)

    }

    const handleSubmit = () => {
        setMessage(null)
        console.log(mediaBlobUrl)
    }


    return (

        speakingitems.map((item, i) => {
            return (
                <div className="speaking-list-item" key={i}>
                    <div className="title">{item.title}</div>
                    <div className="dot-btn">
                        <button className="dots" onClick={() => handleShowBtn(item.id)}>
                            <BsIcons.BsThreeDotsVertical />
                        </button>
                        {showBtn === item.id ? (
                            <Button id='record-btn' className="record-btn" onClick={() => handleShow(item.id)}>
                                Record Speakings
                            </Button>
                        ) : null}
                    </div>

                    <Modal animation={false} show={show === item.id} onHide={handleClose} >
                        <Modal.Header closeButton>
                            <Modal.Title>Speakings</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='modal-title-wrapper'>
                                <div className='title'>
                                    <h5>
                                        Title:
                                    </h5>
                                </div>
                                <div className='modal-title-content'>
                                    <h5>
                                        {item.title}
                                    </h5>
                                </div>
                            </div>
                            <div className='modal-questions-wrapper'>
                                <div className='question-title'>
                                    <h5>
                                        Questions:
                                    </h5>
                                </div>
                                <div className='questions'>
                                    <h2 className='subject'>{item.qTitle}</h2>
                                    <ul className='questions-list'>
                                        <li>{item.q1}</li>
                                        <li>{item.q2}</li>
                                        <li>{item.q3}</li>
                                    </ul>
                                    <span>Please talk around at least 30 seconds</span>
                                </div>

                            </div>
                            <div className='audio-recording'>
                                <div className='audio-btns'>
                                    <button
                                        className="btn btn-rec-dropdown dropdown-toggle disabled"
                                        data-toggle="dropdown">
                                        Record
                                        <span className="caret"></span>
                                    </button>
                                    <div className='audio-btns-wrapper'>
                                        <button onClick={startRecording}
                                        className='audio-btn audio-rec-btn'>
                                            <FaIcons.FaMicrophone />
                                        </button>

                                        <button onClick={stopRecording}
                                            className='audio-btn audio-stop-btn'
                                        >
                                            <FaIcons.FaMicrophone />
                                        </button>
                                    </div>

                                </div>
                                <div className='audio-controls'>
                                    <audio src={mediaBlobUrl} controls />
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className='left-btns'>
                                <Button variant="danger" onClick={handleClose}>
                                    Close
                                </Button>
                            </div>
                            <div className='right-btns'>
                                <Button variant="warning" className='btn-delete' >
                                    Delete Recording
                                </Button>
                                <Button variant="success" className='btn-save' onClick={() => handleShowSecModal(item.id)}>
                                    Save
                                </Button>

                            </div>
                        </Modal.Footer>
                    </Modal >
                    <Modal id='submit-modal' animation={false} show={message === item.id} >
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <BsIcons.BsCheckCircle />
                            <h1>
                                Speaking Submitted!
                            </h1>
                            <p>
                                The speaking was submitted. Your teacher will review it soon. You will be
                                notified after your speaking is reviewed.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleSubmit}>
                                OK
                            </Button>
                        </Modal.Footer>
                    </Modal >

                </div>
            )
        })
    )
}
export default SpeakingItem;
