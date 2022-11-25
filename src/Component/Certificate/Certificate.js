import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
// import xanthronelogo from "../Certificate/xanthronelogo"
import logo from "./logo.png";
import greenbg from "./greenbg.jpeg";
import { singleviewApi } from "../../Store/Students API/useApi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Row, Col } from "reactstrap";
import { map } from "lodash";

function Certificate() {
  const dispatch = useDispatch();
  const params = useParams();

  const { single } = useSelector((state) => ({
    single: state?.StudentsReducer?.singleviewDetails,
  }));
  useEffect(() => {
    dispatch(singleviewApi(params.id));
  }, [dispatch, params.id]);

  console.log(single);

  const course = single?.student_courses;
  const TotalStar = 10;

  const progressArray = course?.map((item) => parseInt(item?.progress));

  const Total = progressArray?.reduce((x, y) => x + y, 0);
  const length = single?.student_courses?.length;
  const rating = (Total / length).toFixed(2);
  const rateTotalStar = 10;


  const handleprint=(e)=>{
   e.preventDefault()
   window.print();
  }

  return (
    <div>
      <Container>
        <div className="maindiv">
          <div class="card" style={{ border: "none" }}>
            <img
              style={{ height: "1040px", width: "115%", position: "absolute" }}
              src={greenbg}
              class="card-img"
              alt="..."
            />
            <div class="card-img-overlay">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "200px",
                }}
              >
                <img
                  style={{ paddingLeft:'58px', height: "50px",objectFit:"contain" }}
                  src={logo}
                  alt="error"
                ></img>
              </div>
              <div style={{ textAlign: "center" }}>
                <h4
                  style={{
                    fontSize: "54px",
                    color: "rgb(119 ,190, 190)",
                    fontFamily: "Copperplate Gothic",
                  }}
                >
                  Certificate
                </h4>
                <h5
                  style={{
                    //   marginBottom: "15px",
                    fontFamily: "Andalus",
                    fontSize: "27px",
                    paddingTop: "0px",
                    color: "rgb(45 130 128)",
                  }}
                >
                  for achievement
                </h5>
              </div>

              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Gabriola",
                    fontSize: "40px",
                    color: "rgb(54, 114, 132)",
                  }}
                >
                  {single?.full_name}
                </p>
                <h2
                  style={{
                    fontFamily: "-moz-initial",
                    color: "rgb(54, 114, 132)",
                  }}
                >
                  {rating}/10
                </h2>
                <div>
                  {[...new Array(rateTotalStar)].map((Array, index) => {
                    return index < Math.floor(rating) ? (
                      <AiFillStar size={30} color="rgb(119 ,190, 190)" />
                    ) : (
                      <AiOutlineStar size={30} color="rgb(54, 114, 132)" />
                    );
                  })}
                </div>
                <p
                  style={{
                    fontFamily: "Apple Chancery",
                    fontSize: "20px",
                    color: "rgb(54, 114, 132)",
                  }}
                >
                  Completed the following achievement
                </p>
                <h1
                  style={{
                    color: "rgb(54, 114, 132)",
                    fontFamily: "Gabriola",
                    fontSize: "40px",
                    fontWeight: "bold",
                  }}
                >
                  {single?.designation}
                </h1>
                <p
                  style={{
                    fontFamily: "Andalus",
                    fontSize: "20px",
                    color: "rgb(54, 114, 132)",
                  }}
                >
                  This certify that
                  <span
                    style={{ fontWeight: "bold", color: "rgb(54, 114, 132)" }}
                  >
                    {" "}
                    {single?.full_name}{" "}
                  </span>
                  has Successfully Completed{" "}
                  <span
                    style={{ fontWeight: "bold", color: "rgb(54, 114, 132)" }}
                  >
                    <br></br>
                    {single?.designation}
                  </span>{" "}
                  started on
                  <span
                    style={{ fontWeight: "bold", color: "rgb(54, 114, 132)" }}
                  >
                    {" "}
                    {single.start_date}
                  </span>
                  <br></br>while showcasing your extraordinary services and
                  dedication to your profession.
                </p>
              </div>
              <p
                style={{
                  fontFamily: "Andalus",
                  fontSize: "20px",
                  color: "rgb(54, 114, 132)",
                  paddingRight: "152px",
                  paddingTop: "87px",
                  display:"flex",
                  justifyContent:"flex-end"
                  
                
                  
                }}
              >
                CEO
              </p>

              <div class="card" style={{ border: "none", marginTop: "400px" }}>
                <img
                  style={{ height: "105vh", width: "115%" }}
                  src={greenbg}
                  class="card-img"
                  alt="..."
                />

                <div
                  class="card-img-overlay"
                  style={{
                    color: "black",
                    textAlign: "center",
                    marginTop: "130px",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "Andalus",
                      color: "rgb(54, 114, 132)",
                    }}
                  >
                    Score Board
                  </h2>
                  <h3
                    style={{
                      fontFamily: "Andalus",
                      color: "rgb(54, 114, 132)",
                    }}
                  >
                    (Based on Practices and Assenssments)
                  </h3>
                  <h2
                    style={{
                      fontFamily: "Andalus",
                      color: "rgb(54, 114, 132)",
                    }}
                  >
                    Web Application Developer
                  </h2>

                  <br></br>

                  {map(course, (item, key) => (
                    <div
                      className="d-flex justify-content-center"
                      style={{ alignItems: "baseline" }}
                    >
                      <h3
                        key={key}
                        className="course-name-1"
                        style={{
                          fontFamily: "-moz-initial",
                          color: "rgb(54, 114, 132)",
                          minWidth: "100px",
                          margin: 0,
                        }}
                      >
                        {item?.course?.course_name}
                      </h3>

                      <div>
                        {[...Array(TotalStar)].map((star, index) => {
                          return index < item?.progress ? (
                            <AiFillStar
                              className="star"
                              color="rgb(119 ,190, 190)"
                              size={30}
                            />
                          ) : (
                            <AiOutlineStar
                              color="rgb(54, 114, 132)"
                              size={30}
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}

<div style={{paddingTop:"20px"}} >
          <Button id="printbtn" onClick={handleprint} style={{backgroundColor:"rgb(45 130 128)",color:"rgb(232 255 254)"}}>
            Print
          </Button>
        </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
       

       
      </Container>

    </div>
  );
}

export default Certificate;
