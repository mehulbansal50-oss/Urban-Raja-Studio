import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Seasonal() {

    const [seasonalBlogs, setSeasonalBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs/category/Seasonal")
            .then((response) => response.json())
            .then((data) => {
                setSeasonalBlogs(data);
            })
            .catch((error) => {
                console.log("Error fetching seasonal blogs:", error);
            });
    }, []);

    return (
        <>
            <div className="app">
                <h1 className="trend-headline">🌦️ Seasonal</h1>
            </div>

            <div>

                <h2 className="trendrightnow">
                    Seasonal Style Guides for Men
                </h2>

                <div className="trend-ui">

                    {seasonalBlogs.map((blog) => (
                        <div className="trendcard" key={blog.id}>

                            <NavLink
                                className={"trendnav"}
                                to={`/seasonal/${blog.id}`}
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

export default Seasonal;