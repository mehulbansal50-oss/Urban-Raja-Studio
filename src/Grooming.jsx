import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Grooming() {

    const [groomingBlogs, setGroomingBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs/category/Grooming")
            .then((response) => response.json())
            .then((data) => {
                setGroomingBlogs(data);
            })
            .catch((error) => {
                console.log("Error fetching grooming blogs:", error);
            });
    }, []);

    return (
        <>
            <div className="app">
                <h1 className="trend-headline">✂️ Grooming</h1>
            </div>

            <div>

                <h2 className="trendrightnow">
                    Grooming Tips for Men
                </h2>

                <div className="trend-ui">

                    {groomingBlogs.map((blog) => (
                        <div className="trendcard" key={blog.id}>

                            <NavLink
                                className={"trendnav"}
                                to={`/grooming/${blog.id}`}
                            >

                                <img
                                    className="trendcardimg"
                                    src={blog.image}
                                    alt={blog.title}
                                />

                                <h2 className="trendnow">
                                    {blog.title}
                                </h2>

                                <p className="paharagraph">
                                    {blog.description}
                                </p>

                            </NavLink>

                        </div>
                    ))}

                </div>

            </div>
        </>
    );
}

export default Grooming;