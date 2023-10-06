import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Card, Col, FormGroup, Label, Input, Button, Form } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getcoursecategoryApi,updatecoursecategoryApi } from "../../Store/CourseCategory API/useApi";

function UpdateCC() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const params = useParams();
  const [state, setState] = useState();
  const id = params?.id;

  // const { updatecoursecategoryDetails} = useSelector((state) => ({

  //   updatecoursecategoryDetails:state.CourseCategoryReducer.AllCourseCategoryDetails.results

  // }));

  const { single } = useSelector((state) => ({
    single: state.CourseCategoryReducer.getcoursecategoryDetails,
  }));

  useEffect(() => {
    dispatch(getcoursecategoryApi(params.id));
  },);

  useEffect(() => {
    setState(single);
  }, [single]);



 
    // useEffect(() => {
    //   dispatch(updatecoursecategoryApi(id));
    // }, [dispatch]);

    const Handle = (e) => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    };


    const HandleUpdateCourseCategory = (e) => {
      e.preventDefault();
      dispatch(updatecoursecategoryApi(id,state,navigate));
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
            UPDATE COURSE CATEGORY
          </h5>
          <Card className="subcard" style={{ width: "58%", height: "330px" }}>
            <Form onSubmit={(e)=>HandleUpdateCourseCategory(e)}>
              <Col md={6}>
                <FormGroup>
                  <Label
                    for="exampleName"
                    style={{
                      fontSize: "smaller",
                      fontWeight: "600",
                      paddingLeft: "20px",
                      paddingTop: "10px",
                    }}
                  >
                    Course Category:
                  </Label>
                  <Input
                    style={{ marginLeft: "15px", width: "100%" }}
                    id="exampleName"
                    name="course_category_name"
                    placeholder="Enter a Course Category"
                    type="string"
                    onChange={(e) => Handle(e)}
                    value={state?.course_category_name}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label
                    for="exampleName"
                    style={{
                      fontSize: "smaller",
                      fontWeight: "600",
                      paddingLeft: "20px",
                    }}
                  >
                    Designation:
                  </Label>
                  <Input
                    style={{ marginLeft: "15px", width: "100%" }}
                    id="exampleName"
                    name="designation"
                    placeholder="Enter a Designation"
                    type="string"
                    onChange={(e) => Handle(e)}
                    value={state?.designation}
                  />
                </FormGroup>
              </Col>

              <div className="bottombtn" style={{ marginTop: "90px" }}>
                <div className="bottombtn1">
                  <Button
                    style={{
                      backgroundColor: "#f3f3f3",
                      color: "#4c6a61",
                      width: "80px",
                      height: "30px",
                      paddingTop: "1px",
                    }}
                  >
                    Back
                  </Button>
                </div>
                <div className="bottombtn2">
                  <Button
                    style={{
                      backgroundColor: "#4c6a61",
                      color: "white",
                      width: "110px",
                      height: "30px",
                      fontSize: "smaller",
                    }}
                    type="submit"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </Form>
          </Card>
        </div>
      </Layout>
    </div>
  );
}

export default UpdateCC;
