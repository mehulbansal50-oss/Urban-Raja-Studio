import { useState } from "react"
import loafer1  from "./assets/loafer1.jpg";
import loafer2 from "./assets/loafer2.jpg";
import loafer3 from "./assets/loafer3.jpg";
import loafer4 from "./assets/loafer4.jpg";
import loafer5 from "./assets/loafer5.jpg";

function Loafers(){

    const [Flipped, setFlipped]=useState(false);
    return(
        <>
        <div>
            <h1 className="trend-headline">Loafers</h1>
        </div>

        <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">What is it?</h1>
            <p>→ Loafers are slip-on shoes with a low heel and no laces,
                 known for their clean and refined appearance.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">Why it's trending?</h1>
            <p>→ Loafers are trending because they blend classic tailoring with modern casual fashion,
                 making them perfect for smart-casual and minimal outfits.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">How to wear it?</h1>

            <p className="detailpara"> → Loafers + Linen Trousers → effortless summer look</p>
 <p className="detailpara">→ Loafers + Straight-Fit Trousers → clean smart-casual look</p>
 <p className="detailpara">→ Loafers + Wide-Leg Trousers → modern minimal look</p>
 <p className="detailpara">→ Loafers + Baggy Jeans → relaxed contemporary look</p>
 <p className="detailpara">→ Loafers + Tailored Trousers → polished formal look</p>
<p className="detailpara">
Tip: Loafers look best when the trousers have a clean fall and slightly expose the shoes.
            </p>
            </div>
            </div>
             
             
                
            <div className="flipcard">
                <h1 className="detailheading">Best Combinations</h1>

                <div className="flipcards-wrapper">
            <div
            className={`card-container ${Flipped === 0 ? "flipped" : ""}`}
            onClick={()=> setFlipped(!Flipped === 0 ? null: 0)}
            >
                <div className="card">
                    <div className="card-front">
                        <h3>👔 What's Your Perfect Combo?</h3>
                        <h4>Tap to Reveal 👀 </h4>
                    </div>

                    <div className="card-back">
                        <img className="flipcardimg" src={loafer1} alt="loafer1"/>
                        <p>Footwear: Loafers</p>
                        <p>Pair With: Linen Trousers + Relaxed Shirt</p>
                        <p>Vibe: Effortless Summer</p>
                    </div>

                </div>
                </div>

                 <div
            className={`card-container ${Flipped === 1 ? "flipped" : ""}`}
            onClick={()=> setFlipped(!Flipped === 1 ? null: 1)}
            >
                <div className="card">
                    <div className="card-front">
                        <h3>👔 What's Your Perfect Combo?</h3>
                        <h4>Tap to Reveal 👀 </h4>
                    </div>

                    <div className="card-back">
                        <img className="flipcardimg" src={loafer2} alt="loafer2"/>
                        <p>Footwear: Loafers</p>
                        <p>Pair With:Wide-Leg Trousers + Boxy Shirt</p>
                        <p>Vibe: Modern Minimal</p>
                    </div>

                </div>
                </div>

                 <div
            className={`card-container ${Flipped === 2 ? "flipped" : ""}`}
            onClick={()=> setFlipped(!Flipped === 2 ? null: 2)}
            >
                <div className="card">
                    <div className="card-front">
                        <h3>👔 What's Your Perfect Combo?</h3>
                        <h4>Tap to Reveal 👀 </h4>
                    </div>

                    <div className="card-back">
                        <img className="flipcardimg" src={loafer3} alt="loafer3"/>
                        <p>Footwear: Loafers</p>
                        <p>Pair With: Straight Trousers + Polo T-shirt</p>
                        <p>Vibe: Smart Casual</p>
                    </div>

                </div>
                </div>

                 <div
            className={`card-container ${Flipped === 3 ? "flipped" : ""}`}
            onClick={()=> setFlipped(!Flipped === 3 ? null : 3)}
            >
                <div className="card">
                    <div className="card-front">
                        <h3>👔 What's Your Perfect Combo?</h3>
                        <h4>Tap to Reveal 👀 </h4>
                    </div>

                    <div className="card-back">
                        <img className="flipcardimg" src={loafer4} alt="loafer4"/>
                        <p>Footwear: Loafers</p>
                        <p>Pair With: Baggy Jeans + Oversized Shirt</p>
                        <p>Vibe: Contemporary Street</p>
                    </div>

                </div>
                </div>

                 <div
            className={`card-container ${Flipped === 4 ? "flipped" : ""}`}
            onClick={()=> setFlipped(!Flipped === 4 ? null : 4)}
            >
                <div className="card">
                    <div className="card-front">
                        <h3>👔 What's Your Perfect Combo?</h3>
                        <h4>Tap to Reveal 👀 </h4>
                    </div>

                    <div className="card-back">
                        <img className="flipcardimg" src={loafer5} alt="loafer5"/>
                        <p>Footwear: Loafers</p>
                        <p>Pair with: Tailored Trousers + Loafers + Fitted Shirt</p>
                        <p>Vibe: Classic Formal</p>
                    </div>

                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default Loafers 