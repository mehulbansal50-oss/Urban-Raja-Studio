import { useEffect, useState } from "react";

function FashionTrendsToWatch() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/blogs/7")
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching blog:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <>
      <div>
        <h1 className="trend-headline">
          👔 {blog.blog.title.toUpperCase()}
        </h1>

        <img
          className="blogimg"
          src={blog.blog.image}
          alt={blog.blog.title}
        />
      </div>

      <div>
        {blog.sections.map((section) => (
          <div key={section.id}>
            <h2 className="blogheading">
              {section.heading}
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

export default FashionTrendsToWatch;