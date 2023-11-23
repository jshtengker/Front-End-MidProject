import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { useEffect, useState } from "react";

const MyWork = () => {
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about/");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setImage4(data.image4);
      setImage5(data.image5);
    });
  }, []);

  return (
    <section className="section my-work" id="section3">
    <div className="container">
      <div className="section-heading">
        <h2>My Work</h2>
        <div className="line-dec" />
        <span>Here is some of my works.</span>
      </div>
      <div className="row">
        <div className="isotope-wrapper">
          <form className="isotope-toolbar">
            <label><input type="radio" data-type="*" defaultChecked name="isotope-filter" />
              <span>Projects</span></label>
            {/* <label><input type="radio" data-type="people" name="isotope-filter" />
              <span>people</span></label>
            <label><input type="radio" data-type="nature" name="isotope-filter" />
              <span>nature</span></label>
            <label><input type="radio" data-type="animals" name="isotope-filter" />
              <span>animals</span></label> */}
          </form>
          <div className="isotope-box">
            <div className="isotope-item" data-type="nature">
              <figure className="snip1321">
                <img src={image4} alt="sq-sample26" />
                <figcaption>
                  <a href={image4} data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                  <h4>HackerRank Basic Javascript Certificate</h4>
                  <span></span>
                </figcaption>
              </figure>
            </div>
            <div className="isotope-item" data-type="people">
              <figure className="snip1321">
                <img src={image5} alt="sq-sample26" />
                <figcaption>
                  <a href={image5} data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                  <h4>Lamborghini Revuelto</h4>
                  <span></span>
                </figcaption>
              </figure>
            </div>
            {/* <div className="isotope-item" data-type="animals">
              <figure className="snip1321">
                <img src="src/assets/images/portfolio-03.jpg" alt="sq-sample26" />
                <figcaption>
                  <a href="src/assets/images/portfolio-03.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                  <h4>Item Third</h4>
                  <span>customize anything</span>
                </figcaption>
              </figure>
            </div>
            <div className="isotope-item" data-type="people">
              <figure className="snip1321">
                <img src="src/assets/images/portfolio-04.jpg" alt="sq-sample26" />
                <figcaption>
                  <a href="src/assets/images/portfolio-04.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                  <h4>Item Fourth</h4>
                  <span>Re-distribution not allowed</span>
                </figcaption>
              </figure>
            </div>
            <div className="isotope-item" data-type="nature">
              <figure className="snip1321">
                <img src="src/assets/images/portfolio-05.jpg" alt="sq-sample26" />
                <figcaption>
                  <a href="src/assets/images/portfolio-05.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                  <h4>Fifth Awesome</h4>
                  <span>Ut sollicitudin risus</span>
                </figcaption>
              </figure>
            </div>
            <div className="isotope-item" data-type="animals">
              <figure className="snip1321">
                <img src="src/assets/images/portfolio-06.jpg" alt="sq-sample26" />
                <figcaption>
                  <a href="src/assets/images/portfolio-06.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                  <h4>Awesome Sixth</h4>
                  <span>Donec eget massa ante</span>
                </figcaption>
              </figure>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MyWork