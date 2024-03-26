import React from 'react';
import Speaking from './Speaking.png';
import Listening from './Listening.png';
import Reading from './Reading.png';
import Writing from './Writing.png';
import Vocabulary from './Vocabulary.png';
import Classes from './Classes.png';
import BookIELTSExams from './BookIELTSExams.png';
import StudentNews from './StudentNews.png';
import Consultency from './Consultency.png';


const Prepare = () => {
  return (
      <section className="Imgesction mob">
          {/* first sec */}
          <div className="firstRow ">
              


        <div className="row-image-text square-wrapper">
          <img
            className="img1 square square-animation"
            src={Speaking}
            alt=""
          />
          <span className="text">Speaking</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img
            className="img2 square square-animation"
            src={Listening}
            alt=""
          />
          <span className="text">Listening</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img
            className="img3 square square-animation"
            src={Reading}
            alt=""
          />
          <span className="text">Reading</span>
        </div>
        
          </div>
          
      {/* econd sec */}
      <div className="secondRow">
        <div className="row-image-text square-wrapper">
          <img
            className="img4 square square-animation"
            src={Writing}
            alt=""
          />
          <span className="text">Writing</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img
            className="img5 square square-animation"
            src={Vocabulary}
            alt=""
          />
          <span className="text">Vocabulary</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img
            className="img6 square square-animation"
            src={Classes}
            alt=""
          />
          <span className="text">Classes</span>
        </div>
        
      </div>
      {/* third sec */}
      <div className="secondRow">
      <div className="row-image-text square-wrapper">
          <img
            className="img7 square square-animation"
            src={BookIELTSExams}
            alt=""
          />
          <span className="text">Book IELTSbr <br /> Exam</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img
            className="img8 square square-animation"
            src={StudentNews}
            alt=""
          />
          <span className="text">Student News</span>
              </div>
        <div className="row-image-text square-wrapper">
          <img
            className="img8 square square-animation"
            src={Consultency}
            alt=""
          />
          <span className="text">Consultancy</span>
        </div>
      </div>
    </section>
  );
};

export default Prepare;
