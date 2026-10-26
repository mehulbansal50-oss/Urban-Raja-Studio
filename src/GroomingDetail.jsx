import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GroomingDetail() {

    const { id } = useParams();

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    const detailImages = {
         8: "/images/best-hair-style-detail.png",
         9: "/images/right-haircut-detail.png",
    10: "/images/beard-style-detail.png",
    11: "/images/beard-grooming-routin-detail.png",
    12: "/images/basic-skincare-detail.png",
    13: "/images/oily-dry-skin-detail.png",
    14: "/images/hair-care-detail.png",
    15: "/images/dandruff-detail.png",
    16: "/images/fragrence-detail.png",
    17: "/images/grooming-routine-detail.png"
    };

    useEffect(() => {

        fetch(`http://localhost:5000/blogs/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setBlog(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error fetching season detail:", error);
                setLoading(false);
            });

    }, [id]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!blog) {
        return <h2>Grooming guide not found</h2>;
    }

    return (
        <>
            <div className="app">

                <h1 className="trend-headline">
                    {blog.blog.title}
                </h1>

                <img
                    className="blogimg"
                    src={detailImages[id]}
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

export default GroomingDetail;