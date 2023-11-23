import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { useEffect, useState } from "react";

const Author = () => {
  const [image3, setImage3] = useState("");

useEffect(() => {  
    const db = getDatabase();
    const aboutRef = ref(db, "about/");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setImage3(data.image3);
    });
  }, []);

  return (
    <div className="image">
    <a href="#"><img src={image3} alt /></a>
    <div className="author-content">
          <h4>Joshua Tengker</h4>
          <span>Student</span>
    </div>
    </div>
  )
}

export default Author