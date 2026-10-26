import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SeasonDetail() {

    const { id } = useParams();

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    const detailImages = {
        18: "/images/best-summer-outfits-detail.png",
        19: "/images/best-fabrics-hot-weather-detail.png",
        20: "/images/style-linen-summer-detail.png",
        21: "/images/monsoon-outfits-detail.png",
        22: "/images/monsoon-shoes-detail.png",
        23: "/images/winter-layering-detail.png",
        24: "/images/winter-date-outfit-detail.png",
        25: "/images/diwali-outfit-detail.png",
        26: "/images/indian-wedding-outfit-detail.png",
        27: "/images/wedding-guest-outfit-detail.png"
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
        return <h2>Season guide not found</h2>;
    }

    return (
        <>
            <h1 className="trend-headline">
                {blog.blog.title}
            </h1>

            <img
                className="blogimg"
                src={detailImages[id]}
                alt={blog.blog.title}
            />

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

export default SeasonDetail;