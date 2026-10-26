import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function StyleGuide() {

    const [styleGuides, setStyleGuides] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/style-guides")
            .then((response) => response.json())
            .then((data) => {
                setStyleGuides(data);
            })
            .catch((error) => {
                console.log("Error fetching style guides:", error);
            });
    }, []);

    return (
        <>
            <div className="app">
                <h1 className="trend-headline">Style Guide</h1>
            </div>

            <div>

                <h2 className="trendrightnow">
                    How should I wear it?
                </h2>

                <div className="trend-ui">

                    {styleGuides.map((guide) => (
                        <div className="trendcard" key={guide.id}>

                            <NavLink className={"trendnav"} to={`/style-guides/${guide.id}`}>

                                <img
                                    className="trendcardimg"
                                    src={`/images/${guide.image}`}
                                    alt={guide.title}
                                />

                                <h2 className="trendnow">
                                    {guide.title}
                                </h2>

                                <p className="paharagraph">
                                    {guide.description}
                                </p>

                            </NavLink>

                        </div>
                    ))}

                </div>

            </div>
        </>
    );
}

export default StyleGuide;