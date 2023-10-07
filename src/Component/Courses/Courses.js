import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import {Card,Table,Col,Row} from 'reactstrap';
// import { RiPencilFill} from "react-icons/ri";
// import { BsXLg} from "react-icons/bs";
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allcourseApi, deletecourseApi } from '../../Store/Course API/useApi';
import {map,range} from "lodash"
// import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';


function Courses() {


  const dispatch = useDispatch();
  const { allcourse}=useSelector((state) => ({
   allcourse:state.CourseReducer.AllCourseDetails,
  }))
 

  
const navigate = useNavigate()


const deleteCourse= (id) => {
  dispatch(deletecourseApi(id,navigate))
}


const [pages, setPages] = useState(1)
const totalPages = Math.ceil(allcourse?.count / 10);
const pageArray = range(1, totalPages + 1);





useEffect(() =>{
  dispatch(allcourseApi(pages))
 },[dispatch,pages])


 const tableData = allcourse?.results



 

  return (
    <div>
        <Layout>
        <div className='main-card'>
            <h5 style={{fontSize:'14px',fontWeight:'600',color:'#495057',marginLeft:'15px'}}>COURSES</h5>
            <Card  className='subcard'    style={{width:'50%',height:'350px'}}>
            <Table style={{marginTop:'10px'}}>

<thead>
  <tr>
    <th>
    #
    </th>
    <th>
    ID
    </th>
    <th>
    Course Name
    </th>
    <th>
      Duration
    </th>
     <th>
    Course Category
    </th>
    <th>
    Action
    </th>
    
    </tr>
</thead>
<tbody>{map(tableData,(item,key)=>(
    <tr key={key}>
      <th scope="row">

      {key=key+1}
      </th>
      <td>
       {item?.id}
      </td>
      <td>
      {item?.course_name}
      </td>
      <td>
      {item?.duration }
      </td>
      <td>
      {item?.course_category  }
      
    
      </td>
      <td>
      
      <Link to={`/updatecourse/${item?.id}`}><RiPencilFill/></Link>

      
      <a href="style={{color:'red'}}"><BsXLg onClick={()=>{deleteCourse(item?.id)}}/></a>
      </td>
     
    </tr>
    ))}
    </tbody>
    
    
</Table>
{/* <Pagination className='page'>
  <PaginationItem>
    <PaginationLink className='page2'
      href="#"
      previous
    />
  </PaginationItem>
  <PaginationItem active >
    <PaginationLink href="#"    className='page2'>
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#" className='page2'>
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem >
    <PaginationLink href="#" className='page2'>
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem >
    <PaginationLink href="#" className='page2'>
      4
    </PaginationLink>
  </PaginationItem>
  <PaginationItem >
    <PaginationLink href="#" className='page2'>
      5
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink  className='page2'
      href="#"
      next
    />
  </PaginationItem>

</Pagination> */}

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

export default Courses