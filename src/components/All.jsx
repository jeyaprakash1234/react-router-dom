import React from 'react';
import { Link } from 'react-router-dom';

// Example course images (replace these with actual URLs if you have them)
const courseImages = {
  career: 'https://img.freepik.com/free-vector/professional-career-elements-design_1200-212.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybridi?text=Full+Stack+Development',
  datascience: 'https://static.vecteezy.com/system/resources/thumbnails/013/937/092/small/data-science-artificial-intelligence-concept-futuristic-supercomputer-background-photo.jpg?text=Data+Science',
  cybersecurity: 'https://static.vecteezy.com/system/resources/thumbnails/035/506/117/small/privacy-conept-business-woman-using-laptop-computer-on-office-desk-with-privacy-icon-on-virtual-screen-cyber-security-data-protection-data-management-cybersecurity-photo.jpg?text=Cyber+Security',
  fullstack: 'https://www.shutterstock.com/image-illustration/full-stack-development-concept-cell-260nw-1978225208.jpg?text=Career'
};

const All = () => {
  return (
    <div className="container all-courses">
      <h1>All Courses</h1>
      <div className="course-grid">
        <div className="course-item">
          <img src={courseImages.fullstack} alt="Full Stack Development" />
          <Link to="/fullstack">Full Stack Development</Link>
        </div>
        <div className="course-item">
          <img src={courseImages.datascience} alt="Data Science" />
          <Link to="/datascience">Data Science</Link>
        </div>
        <div className="course-item">
          <img src={courseImages.cybersecurity} alt="Cyber Security" />
          <Link to="/cybersecurity">Cyber Security</Link>
        </div>
        <div className="course-item">
          <img src={courseImages.career} alt="Career" />
          <Link to="/career">Career</Link>
        </div>
      </div>
    </div>
  );
};

export default All;
