import React from 'react';

const Prepare = () => {
  return (
      <section className="Imgesction mob">
          {/* first sec */}
          <div className="firstRow ">
              


        <div className="row-image-text square-wrapper">
          <img
            className="img1 square square-animation"
            src="pictures\snappedPics\Speaking.png"
            alt=""
          />
          <span className="text">Speaking</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img
            className="img2 square square-animation"
            src="pictures\snappedPics\Listening.png"
            alt=""
          />
          <span className="text">Listening</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img
            className="img3 square square-animation"
            src="pictures\snappedPics\Reading.png"
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
            src="pictures\snappedPics\Writing.png"
            alt=""
          />
          <span className="text">Writing</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img
            className="img5 square square-animation"
            src="pictures\snappedPics\Vocabulary.png"
            alt=""
          />
          <span className="text">Vocabulary</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img
            className="img6 square square-animation"
            src="pictures\snappedPics\Classes.png"
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
            src="pictures\snappedPics\BookIELTSExams.png"
            alt=""
          />
          <span className="text">Book IELTSbr <br /> Exam</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img
            className="img8 square square-animation"
            src="pictures\snappedPics\StudentNews.png"
            alt=""
          />
          <span className="text">Student News</span>
              </div>
        <div className="row-image-text square-wrapper">
          <img
            className="img8 square square-animation"
            src="pictures\snappedPics\Consultency.png"
            alt=""
          />
          <span className="text">Consultancy</span>
        </div>
      </div>
    </section>
  );
};

export default Prepare;
