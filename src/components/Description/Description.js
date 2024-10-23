import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";

export default function SimpleSlider() {
  const part = "description";
  const Server_URL = process.env.SER_URL;
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await axios
          .get(Server_URL + "/getdata/2")
          .then((response) => {
            setGetData(response.data.data);
          })
          .then(() => {
            console.log(getData);
          });
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slider = useRef(null);
  const [current, setCurrent] = useState(0);

  var settings = {
    fade: true,
    infinite: true,
    speed: 160,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const createParam = (id) => {
    const getDetailParam = new URLSearchParams();
    getDetailParam.append("id", id);
    getDetailParam.append("part", 2);

    return getDetailParam.toString();
  };

  return (
    <div>
      <Slider ref={slider} {...settings}>
        {getData.map((value, index) => (
          <div className="slide-container" key={index}>
            <div className="desImage">
              <img src={value.img} alt="img" loading="lazy" />
            </div>
            <div className="desContent">
              <p>
                {value.content.substring(0, 700)} ...{" "}
                <Link to={"/detail/?" + createParam(value._id)}>Xem thêm</Link>
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="slideArrow">
        <FaArrowLeftLong
          onClick={() => {
            slider?.current?.slickPrev();
            if (current !== 0) {
              setCurrent(current - 1);
            } else {
              setCurrent(getData.length - 1);
            }
          }}
          className="arrow Lef() => slidertArrow"
        />
        {getData.map((value, index) => (
          <div
            key={index}
            className={index !== current ? "dots" : "dots active"}
          ></div>
        ))}
        <FaArrowRightLong
          onClick={() => {
            slider?.current?.slickNext();
            if (current !== getData.length - 1) {
              setCurrent(current + 1);
            } else {
              setCurrent(0);
            }
          }}
          className="arrow RightArrow"
        />
      </div>
    </div>
  );
}
