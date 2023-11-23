
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [section1Title, setSection1Title] = useState("");
  const [section1Content, setSection1Content] = useState("");
  const [section2Title, setSection2Title] = useState("");
  const [section2Content, setSection2Content] = useState("");
  const [image1, setImage] = useState("");
  const [image2, setImage2] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about/");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setTitle(data.title);
      setSection1Title(data.section1Title);
      setSection1Content(data.section1Content);
      setSection2Title(data.section2Title);
      setSection2Content(data.section2Content);
      setSubTitle(data.subtitle);
      setImage(data.image1);
      setImage2(data.image2);
    });
  }, []);


  return (
   <section className="section about-me" id="section1">
  <div className="container">
    <div className="section-heading">
      <h2>{title}</h2>
      <div className="line-dec" />
      <span>{subtitle}</span>
    </div>
    <div className="left-image-post">
      <div className="row">
        <div className="col-md-6">
          <div className="left-image">
            <img src={image1} alt />
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-text">
            <h4>{section1Title}</h4>
            <p>
            {section1Content}
            </p>
            <div className="white-button">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="right-image-post">
      <div className="row">
        <div className="col-md-6">
          <div className="left-text">
            <h4>{section2Title}</h4>
            <p>
              {section2Content}
            </p>
            <div className="white-button">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-image">
            <img src={image2} alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default AboutMe