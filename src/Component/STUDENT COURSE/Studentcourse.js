import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, Button, Table, Input, Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  allstudentcourseApi,
  deletestudentcourseApi,
} from "../../Store/Students API/useApi";
import { map, range } from "lodash";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function Studentcourse() {
  const dispatch = useDispatch();
  const { allstudentcourse } = useSelector((state) => ({
    allstudentcourse: state.StudentsReducer.AllStudentCourseDetails,
  }));

  const navigate = useNavigate();
  // const params = useParams()

  // const deleteCourse= (id) => {
  //   dispatch(deletecourseApi(id,navigate))
  // }

  const [pages, setPages] = useState(1);
  const totalPages = Math.ceil(allstudentcourse?.count / 10);
  const pageArray = range(1, totalPages + 1);

  useEffect(() => {
    dispatch(allstudentcourseApi(pages));
  }, [dispatch, pages]);

  const tableData = allstudentcourse?.results;

  const deleteCourse = (id) => {
    dispatch(deletestudentcourseApi(id, navigate));
  };

  return (
    <div>
      <Layout>
        <div className="main-card">
          <h5
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#495057",
              marginLeft: "15px",
            }}
          >
            STUDENT COURSE
          </h5>
          <div className="main-card">
            <Card
              className="subcard"
              style={{ width: "55%", height: "300px", borderRadius: "3px" }}
            >
              {/* <Form onSubmit={handleSubmit}> */}

              <div style={{ display: "flex" }}>
                <h5
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#495057",
                    marginLeft: "15px",
                  }}
                >
                  STUDENT COURSE
                </h5>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Link to="/newcourse">
                    {" "}
                    <Button
                      style={{
                        fontSize: "10px",
                        width: "150px",
                        height: "25px",
                        marginTop: "30px",
                        marginLeft: "270px",
                        backgroundColor: "#34c38f",
                      }}
                    >
                      + Create New Course
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <Table style={{ marginTop: "10px" }}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ID</th>
                      <th>Course Name</th>
                      <th>Progress</th>

                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {map(tableData, (item, key) => (
                      <tr key={key}>
                        <th scope="row">{(key = key + 1)}</th>
                        <td>{item?.id}</td>
                        <td>{item?.course_name}</td>
                        <td>{item?.progress}</td>
                        <td>
                          {/* <Input  style={{width: '5rem',height: '20px'}}type='select'></Input> */}
                        </td>
                        <td>
                          <div style={{ display: "flex" }}>
                            <div>
                              <Button
                                style={{
                                  backgroundColor: "blue",
                                  border: "none",
                                  width: "60px",
                                  height: "20px",
                                  fontSize: "10px",
                                }}
                              >
                                View
                              </Button>
                            </div>
                            <div style={{ paddingLeft: "15px" }}>
                              <Button
                                onClick={() => {
                                  deleteCourse(item?.id);
                                }}
                                style={{
                                  backgroundColor: "red",
                                  border: "none",
                                  width: "60px",
                                  height: "20px",
                                  fontSize: "10px",
                                }}
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                <Row>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BiLeftArrow
                      onClick={() => {
                        setPages(pages - 1);
                      }}
                    />
                  </Col>

                  {map(pageArray, (page) => (
                    <Col
                      onClick={() => setPages(page)}
                      className={pages == page && "active"}
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      {page}
                    </Col>
                  ))}

                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BiRightArrow
                      onClick={() => {
                        setPages(pages + 1);
                      }}
                    />
                  </Col>
                </Row>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Studentcourse;
