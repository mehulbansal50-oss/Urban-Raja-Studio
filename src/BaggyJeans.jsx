import { useState } from "react"
import baggyoutfit1  from "./assets/baggyoutfit1.png";
import baggyoutfit2 from "./assets/baggyoutfit2.png";
import baggyoutfit3 from "./assets/baggyoutfit3.png";
import baggyoutfit4 from "./assets/baggyoutfit4.png";
import baggyoutfit5 from "./assets/baggyoutfit5.png";

function BaggyJeans(){

    const [Flipped, setFlipped]=useState(false);
    return(
        <>
        <div>
            <h1 className="trend-headline">Baggy Jeans</h1>
        </div>

        <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">What is it?</h1>
            <p>Baggy jeans 90s & Y2K fashion, streetwear aur relaxed dressing ke comeback ki wajah se popular hue hain.
                 Modern fashion mein loose silhouettes aur comfort-focused outfits ka trend badhne ke saath baggy denim everyday styling ka major part ban gaya hai.
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
            <p className="detailpara"> → Baggy jeans ko style karte waqt proportion balance important hai.</p>

            <p className="detailpara"> → Oversized/Boxy T-shirt + Baggy Jeans → relaxed streetwear look</p>
 <p className="detailpara">→ Fitted T-shirt + Baggy Jeans → balanced silhouette</p>
 <p className="detailpara">→ Oversized Shirt + Baggy Jeans → modern layered look</p>
 <p className="detailpara">→ Hoodie + Baggy Jeans → casual streetwear</p>
 <p className="detailpara">→ Jeans ko slightly stacked ya cuffed rakh sakte ho depending on footwear.</p>
<p className="detailpara">
Tip: Agar complete oversized look chahiye, loose top ke saath baggy jeans pair karo. Cleaner look ke liye relatively fitted ya shorter-length top choose karo.
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
                        <img className="flipcardimg" src={baggyoutfit1} alt="'combination1"/>
                        <p>Baggy Fit: Baggy Jeans</p>
                        <p>Pair With: Boxy T-shirt + Retro Sneakers</p>
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
                        <img className="flipcardimg" src={baggyoutfit2} alt="'combination2"/>
                        <p>Baggy Fit: Baggy Jeans</p>
                        <p>Pair With: Fitted T-shirt + Minimal Sneakers</p>
                        <p>Vibe: Balanced</p>
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
                        <img className="flipcardimg" src={baggyoutfit3} alt="'combination3"/>
                        <p>Baggy Fit: Baggy Jeans</p>
                        <p>Pair With: Oversized Shirt + Sneakers</p>
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
                        <img className="flipcardimg" src={baggyoutfit4} alt="'combination4"/>
                        <p>Baggy Fit: Baggy Jeans</p>
                        <p>Pair With: Hoodie + Chunky Sneakers</p>
                        <p>Vibe: Urban</p>
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
                        <img className="flipcardimg" src={baggyoutfit5} alt="'combination5"/>
                        <p>Baggy Fit: Baggy Jeans</p>
                        <p>Pair with: Relaxed Shirt + Loafers</p>
                        <p>Vibe: Smart Casual</p>
                    </div>

                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default BaggyJeans