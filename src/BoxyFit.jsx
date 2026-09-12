import { useState } from "react"
import combination1 from "./assets/combination1.png";
import combination2 from "./assets/combination2.png";
import combination3 from "./assets/combination3.png";
import combination4 from "./assets/combination4.png";
import combination5 from "./assets/combination5.png";

function BoxyFit(){

    const [Flipped, setFlipped]=useState(false);
    return(
        <>
        <div>
            <h1 className="trend-headline">Boxy Fit</h1>
        </div>

        <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">What is it?</h1>
            <p>Boxy fit ek relaxed silhouette hota hai jisme garment ki body wider aur length comparatively shorter hoti hai. Shoulders thode broad/drop hote hain aur overall shape straight, structured aur loose feel deti hai.
T-shirts mein boxy fit usually wide sleeves + broad chest + slightly cropped length ke saath aata hai, while boxy shirts mein relaxed body aur structured shape zyada noticeable hoti hai.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">Why it's trending?</h1>
            <p>Boxy fit ka trend oversized fashion aur relaxed silhouettes ke rise ki wajah se popular hua hai. Ye traditional slim-fit clothing se different look deta hai aur outfit ko modern, effortless aur streetwear-inspired feel deta hai.
Iska structured-but-relaxed shape simple outfit ko bhi more styled aur contemporary bana sakta hai.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">How to wear it?</h1>
            <p className="detailpara"> → Boxy fit ko style karte waqt proportion balance sabse important hai.</p>

            <p className="detailpara"> → Boxy T-shirt + straight/baggy jeans → casual streetwear</p>
 <p className="detailpara">→ Boxy T-shirt + cargo pants → utility/street style</p>
 <p className="detailpara">→ Boxy shirt + wide-leg trousers → modern minimal look</p>
 <p className="detailpara">→ Boxy shirt + relaxed denim → effortless everyday outfit</p>
 <p className="detailpara">→ Boxy shirt ko open layer ke tarah basic tee ke upar bhi wear kar sakte ho.</p>
<p className="detailpara">
Tip: Agar upper already wide hai, toh bottom ko either relaxed rakho for a full oversized look, ya slightly straighter rakho for a cleaner silhouette.
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
                        <img className="flipcardimg" src={combination1} alt="'combination1"/>
                        <p>Boxy Fit: Boxy T-shirt</p>
                        <p>Pair With: Baggy Jeans + Sneakers</p>
                        <p>Vibe: Streetwear</p>
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
                        <img className="flipcardimg" src={combination2} alt="'combination2"/>
                        <p>Boxy Fit: Boxy T-shirt</p>
                        <p>Pair With: Cargo Pants + Chunky Sneakers</p>
                        <p>Vibe: Utility</p>
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
                        <img className="flipcardimg" src={combination3} alt="'combination3"/>
                        <p>Boxy Fit: Boxy Shirt</p>
                        <p>Pair With: Straight Jeans + Sneakers</p>
                        <p>Vibe: Casual</p>
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
                        <img className="flipcardimg" src={combination4} alt="'combination4"/>
                        <p>Boxy Fit: Boxy Shirt</p>
                        <p>Pair With: Wide-leg Trousers + Loafers</p>
                        <p>Vibe: Smart Casual</p>
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
                        <img className="flipcardimg" src={combination5} alt="'combination5"/>
                        <p>Boxy Fit: Boxy Shirt</p>
                        <p>Pair with: Relaxed Trousers + Minimal Sneakers</p>
                        <p>Vibe: Minimal</p>
                    </div>

                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default BoxyFit