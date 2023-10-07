import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import {Form} from 'react-bootstrap';
import {Table,Card,Col,Row} from 'reactstrap';
import './Alls.css'
import { studentApi } from '../../Store/Students API/useApi';
import { useDispatch, useSelector } from 'react-redux';
import { BsEyeFill } from 'react-icons/bs';
import {map,range} from "lodash"
import { Link } from 'react-router-dom';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';


const Alls =() => {


 const dispatch = useDispatch();
 const { allstudents}=useSelector((state) => ({
  allstudents:state.StudentsReducer.allstudentsDetails,
 }))



 useEffect(() =>{
  dispatch(studentApi())
 })



//...............PAGINATION...................//

 const [pages, setPages] = useState(1)
 const totalPages = Math.ceil(allstudents?.count / 10);
 const pageArray = range(1, totalPages + 1);
 
 useEffect(() =>{
   dispatch(studentApi(pages))
  },[dispatch,pages])


const tableData = allstudents?.results


  return (
    <div>
      <Layout>
        <div className='main-card'>
            <h5 style={{fontSize:'14px',fontWeight:'600',color:'#495057',marginLeft:'15px'}}>STUDENTS</h5>
            <Card  className='subcard'    style={{width:'90%',height:'550px'}}>
            <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search..."
            className="Sbtn"
            aria-label="Search"
          />
          </Form>
          <div className='show'>
            <p>Show</p>
            <input type="text" className='input'></input>
            <p>entries</p>

          </div>
         
          <Table>

  <thead>
    <tr>
      <th>
      ID
      </th>
      <th>
      Name
      </th>
      <th>
      Phone
      </th>
      <th>
        Email
      </th>
       <th>
      Joining Date
      </th>
      <th>
      DOB
      </th>
      <th>
      Designation
      </th>
      <th>
      Photo
      </th>
      <th>
      Action
      </th>
    </tr>
  </thead>
  <tbody> {map(tableData,(item,key)=>(
    <tr key={key}>
      <th scope="row">
        {key=key+1}
      </th>
      <td>
        {item?.full_name}
      </td>
      <td>
      {item?.phone}
        
      </td>
      <td>
      {item?.email}
        
      </td>
      <td>
      {item?.start_date}
      
      </td>
      <td>
      {item?.dob}
        
      </td>
      <td>
      {item?.designation}
        
      </td>
      <td>
      {item?.img}
       
      </td>
      <td>
      <Link to={`/studentview/${item?.id}`}><BsEyeFill/></Link>
       
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
                        className={pages === page && "active"}
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
              
            </Card>

        

        </div>
      
      </Layout>
    </div>
  )
}

export default Alls
