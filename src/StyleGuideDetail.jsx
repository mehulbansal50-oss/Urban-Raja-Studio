import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function StyleGuideDetail() {

  const { id } = useParams();

  const [styleGuide, setStyleGuide] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`http://localhost:5000/style-guides/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStyleGuide(data.styleGuide);
        setSections(data.sections);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching style guide:", error);
        setLoading(false);
      });

  }, [id]);


  if (loading) {
    return <h2>Loading...</h2>;
  }


  if (!styleGuide) {
    return <h2>Style Guide not found</h2>;
  }


  return (
    <>
      <div>

        <h1 className="trend-headline">
          {styleGuide.title.toUpperCase()}
        </h1>

        <img
          className="blogimg"
          src={`/images/${styleGuide.detail_image}`}
          alt={styleGuide.title}
        />

      </div>


      <div>

        {sections.map((section) => (

          <div key={section.id}>

            <h2 className="blogheading">
              {section.section_title}
            </h2>

            <div className="blogp">

              {section.content.split("\n").map((line, index) => (
                <p key={index}>
                  {line}
                </p>
              ))}

            </div>

          </div>

        ))}

      </div>
    </>
  );
}

export default StyleGuideDetail;