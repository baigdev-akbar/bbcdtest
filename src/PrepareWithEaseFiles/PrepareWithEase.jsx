import React from 'react';

const PrepareWithEase = () => {


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.square');

    if (entry.isIntersecting) {
      square.classList.add('square-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('square-animation');
  });
});

  




    const start = () => {
        alert("Good Job");
    }
    return (
      <  div className="desk">
      <span className='subTitle desk'>Prepare with ease</span>
      <div className='PWE'>
       
      <section className="Imgesction">    
      <div className="firstRow ">
        <div className="row-image-text square-wrapper">
          <img className="img1 square square-animation" src="pictures\snappedPics\Speaking.png" alt="" />
          <span className="text">Speaking</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img className="img2 square square-animation" src="pictures\snappedPics\Listening.png" alt="" />
          <span className="text">Listening</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img className="img3 square square-animation" src="pictures\snappedPics\Reading.png" alt="" />
          <span className="text">Reading</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img className="img4 square square-animation" src="pictures\snappedPics\Writing.png" alt="" />
          <span className="text">Writing</span>
        </div>
      </div>
      <div className="secondRow">
        <div className="row-image-text square-wrapper">
          <img className="img5 square square-animation" src="pictures\snappedPics\Vocabulary.png" alt="" />
          <span className="text">Vocabulary</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img className="img6 square square-animation" src="pictures\snappedPics\Classes.png" alt="" />
          <span className="text">Classes</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img className="img7 square square-animation" src="pictures\snappedPics\BookIELTSExams.png" alt="" />
          <span className="text">Book IELTS Exam</span>
        </div>
        <div className="row-image-text square-wrapper">
          <img className="img8 square square-animation" src="pictures\snappedPics\StudentNews.png" alt="" />
          <span className="text">Student News</span>
        </div>
          </div>
          </section>
          <section className="modulesSec desk">
                    <div className='appGdVdo'><video src="https://youtu.be/coYJSbTdkug?si=ZJdVLJOFX6aqjlNi" poster='pictures\youtube (8) 1.png'></video><span>App Guide Viseo</span></div>
                    <div className='practiceMT'>
                        <h3>Practice Mock Tests</h3>
                        <span>Get the authentic IELTS exam experience with all four modules covered</span>
                        <button className='btnStart' onClick={start}>Start</button>
                    </div>
          </section>
            </div>
            </div>
  );
};

export default PrepareWithEase;
