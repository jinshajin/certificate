import React ,{useEffect, useState}from 'react'
import Layout from '../Layout/Layout'
import {Card,Table,Row,Col} from 'reactstrap';
// import {BsPencilFill,BsXLg } from 'react-icons/bs';

import { allcoursecategoryApi, deletecourseCategoryApi } from '../../Store/CourseCategory API/useApi';
import { useDispatch, useSelector } from 'react-redux';
import {map,range} from "lodash"
import { Link, useNavigate } from 'react-router-dom';
// import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import './CourseCategory.css'

function UCpage() {


 

  

//  console.log(single)
// console.log(params.id)






  const dispatch = useDispatch();
  const { allcoursecategory}=useSelector((state) => ({
   allcoursecategory:state.CourseCategoryReducer.AllCourseCategoryDetails,
  }))
 



const navigate = useNavigate()




const deleteCourseCategory = (id) => {
  dispatch(deletecourseCategoryApi(id,navigate))
}




const [pages, setPages] = useState(1)
const totalPages = Math.ceil(allcoursecategory?.count / 10);
const pageArray = range(1, totalPages + 1);
  useEffect(() =>{
    dispatch(allcoursecategoryApi(pages))
   },[dispatch,pages])



  
  const tableData = allcoursecategory?.results
  

  return (
    <div>
      <Layout>
      <div className='main-card'>
            <h5 style={{fontSize:'14px',fontWeight:'600',color:'#495057',marginLeft:'15px'}}>ALL COURSES CATEGORY</h5>
            <Card  className='subcard'    style={{width:'50%',height:'400px'}}>
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
    Course Category Name
    </th>
    <th>
      Designation
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
      

      {item?.course_category_name}

      </td>
      <td>
      {item?.designation}
      </td>
      
      <td>
      <Link to={`/updatecoursecategory/${item?.id}`}><BsPencilFill/></Link>
      
      <a href="style={{color:'red'}}"><BsXLg onClick={()=>{deleteCourseCategory(item?.id)}}/></a>
   
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

export default UCpage
