import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
// images of the three courses
import courseImg1 from "../../assets/english-course.png";
import courseImg2 from "../../assets/cloud-storage-course.png";
import courseImg3 from "../../assets/wifi-course.png";
import courseImg4 from "../../assets/maths.png";
import courseImg5 from "../../assets/story.webp";
import courseImg6 from "../../assets/science.png";

// import styling
import "./courses.css";
// import function CourseCard
import CourseCard from "./CourseCard";


// intialised variables from constructor CourseCard
const coursesData = [
  {
    id: "01",
    title: "English",
    lesson: 12,
    difficulty: "Medium",
    rating: 7.8,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Managing Cloud Storage",
    lesson: 12,
    difficulty : "Hard",
    rating: 6.7,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Wifi Connections",
    lesson: 12,
    difficulty: "Easy",
    rating: 11.3,
    imgUrl: courseImg3,
  },

  {
    id: "01",
    title: "Maths",
    lesson: 12,
    difficulty: "Medium",
    rating: 7.8,
    imgUrl: courseImg4,
  },

  {
    id: "02",
    title: "Storytelling Workshop",
    lesson: 12,
    difficulty: "Hard",
    rating: 6.7,
    imgUrl: courseImg5,
  },

  {
    id: "03",
    title: "Science",
    lesson: 12,
    difficulty: "Easy",
    rating: 11.3,
    imgUrl: courseImg6,
  },


];


const CourseSubSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePrevClick = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
    }
  };

    return (
        <section>
            <Container className="container">
                <Row>
                    <Col lg="12">
                        <div className="filter-bar d-flex justify-content-start align-items-center">
                            <select id="difficulty-select" name="difficulty">
                                <option value="" disabled selected>Select Difficulty</option>
                                <option value="All">All</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>

                            <select id="time-select" name="time">
                                <option value="" disabled selected>Select Time</option>
                                <option value="All">All</option>
                                <option value="4weeks">Less than 4 weeks</option>
                                <option value="8weeks">Less than 8 weeks</option>
                                <option value="8weeksmore">More than 8 weeks</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-50">
                                <h1 className="courses">Courses</h1>
                                <p className="para">
                                    Explore the range of courses we have available, where you can gain essential digital skills
                                    opening many employment opportunities for their future.
                                    Courses vary in difficulty level; easy, medium and hard, and each course comes with a
                                    set of practice quizzes and a final exam to test your knowledge.
                                </p>
                            </div>
                        </div>
                    </Col>
              </Row>
         <Row>
          <Col className="d-flex justify-content-end">
            <div className="pagination-container">
              <nav>
                <ul className="pagination">
                  <li>
                    <a href="#!" onClick={(e) => handlePrevClick(e)}>&laquo;</a>
                  </li>
                  {[...Array(totalPages)].map((_, idx) => {
                    const pageNum = idx + 1;
                    return (
                      <li key={`page-${pageNum}`} className={pageNum === currentPage ? "active" : ""}>
                        <a href="#!" onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(pageNum);
                        }}>{pageNum}</a>
                      </li>
                    );
                  })}
                  <li>
                    <a href="#!" onClick={(e) => handleNextClick(e)}>&raquo;</a>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
                
                <Row>
                    <div className="flexcontainer">
                        {coursesData.map((item) => (
                            <Col className="flexitem" lg="4" md="6" sm="6">
                                <CourseCard key={item.id} item={item} />
                            </Col>
                        ))}
                    </div>
                </Row>
                
       </Container>
     </section>
    );
};
export default CourseSubSection;