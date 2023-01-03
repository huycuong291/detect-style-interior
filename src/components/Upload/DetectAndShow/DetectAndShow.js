import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import './detectStyle.css'
import Card from "../../Card/Card";
import artdecor from "../../../img/artdecor.png";
import hitech from "../../../img/hitech.png";
import Indochine from "../../../img/Indochine.png";
import industrial from '../../../img/industrial.png'
import Scandinavian from '../../../img/Scandinavian.png'
import axios from "axios";
const DetectAndShow = (props) => {

    const { data } = props
    const [reviewed, setReviewed] = useState([])
    const [reviewText, setReviewText] = useState([])
    const [styleArr, setStyleArr] = useState([])
    useEffect(() => {
        setReviewed(Array(data.length).fill(false))
        setReviewText(Array(data.length).fill(""))
        setStyleArr(Array(data.length).fill(["ArtDecor", "Hitech", "Indochina", "Industrial", "Scandinavian"]))
    }, [data])

    const handleClickReview = (text, passedIndex) => {
        const newReviewed = reviewed.map((item, index) => { return index === passedIndex ? true : item; });
        const newReviewText = reviewText.map((item, index) => { return index === passedIndex ? text : item; });
        setReviewed(newReviewed)
        setReviewText(newReviewText)
    }

    const handleClickStyle = (style, passedIndex) => {
        const newStyle = styleArr.map((item, index) => { return index === passedIndex ? [style] : item; });
        setStyleArr(newStyle)
        const request_data = {
            style: style,
            crops_img: "data:image/png;charset=utf-8;base64, " + data[passedIndex].crop_img
        }
        axios.post("http://127.0.0.1:5000/evaluation", request_data).then(function (response) {
            console.log(response + "evaluation")
        })
    }

    const handleRenderImg = (style) => {
        switch (style) {
            case "ArtDecor": return artdecor
            case "Hitech": return hitech
            case "Indochina": return Indochine
            case "Industrial": return industrial
            case "Scandinavian": return Scandinavian
            default: return null
        }
    }
    return (
        <div >
            {data &&
                data.map((item, index) => {
                    return (
                        <>
                            <div className="detect-div">
                                <img src={"data:image/png;charset=utf-8;base64, " + item.crop_img} />
                                <div className="progress">
                                    <div className="child-div">
                                        <p>Art Decor</p>
                                        <Progress
                                            percent={(item.predict.ArtDecor * 100).toFixed(2)}
                                            strokeColor="red"
                                        />
                                    </div>
                                    <div className="child-div">
                                        <p>Hitech</p>
                                        <Progress percent={(item.predict.Hitech * 100).toFixed(2)}
                                            status="active"
                                            strokeColor="blue"
                                        />
                                    </div>
                                    <div className="child-div">
                                        <p>Indochina</p>
                                        <Progress percent={(item.predict.Indochina * 100).toFixed(2)}
                                            status="active"
                                            strokeColor="orange"
                                        />
                                    </div>
                                    <div className="child-div">
                                        <p>Industrial</p>
                                        <Progress percent={(item.predict.Industrial * 100).toFixed(2)}
                                            status="active"
                                            strokeColor="green"
                                            showInfo={true}
                                        />
                                    </div>
                                    <div className="child-div">
                                        <p>Scandinavian</p>
                                        <Progress percent={(item.predict.Scandinavian * 100).toFixed(2)}
                                            status="active"
                                            strokeColor="purple"
                                            showInfo={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="review-title">Please Let Us Know Your Opinion</p>
                            {!reviewed[index] &&
                                <div className="result-evaluation">
                                    <div className="result-evaluation" onClick={() => handleClickReview("like", index)}>
                                        <div className="hands like"></div>
                                        <span style={{ marginLeft: "20px" }}>Yes it quite right!</span>
                                    </div>
                                    <div className="result-evaluation" onClick={() => handleClickReview("dislike", index)}>
                                        <div className="hands dislike"></div>
                                        <span style={{ marginLeft: "20px" }}>No it quite wrong!</span>
                                    </div>
                                </div>}
                            {
                                reviewText[index] === "like" && <div className="result-evaluation">
                                    <div className="review-title">
                                        <div className="hands like big-icon no-margin full-color"></div>
                                        <p >Thank you about your feedback!</p>
                                    </div>
                                </div>
                            }
                            {
                                reviewText[index] === "dislike" && <div className="result-evaluation">
                                    <div className="review-title">
                                        <div className="hands dislike big-icon no-margin full-color"></div>
                                        <p>Sorry about that, can you tell us what style this object belongs to</p>
                                        <div className="result-evaluation">
                                            {styleArr[index].map(item => {
                                                return (
                                                    <div className="result-evaluation-item" onClick={() => handleClickStyle(item, index)}>
                                                        <Card
                                                            darkmode={props.darkMode}
                                                            emoji={handleRenderImg(item)}
                                                            heading={item}
                                                        />
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                        {styleArr[index].length === 1 && <p>Thanks for your support</p>}
                                    </div>
                                </div>
                            }
                        </>)
                })}
        </div >
    );
};

export default DetectAndShow;
