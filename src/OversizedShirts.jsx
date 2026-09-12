import { useState } from "react"
import oversizedshirt1  from "./assets/oversizedshirt1.png";
import oversizedshirt2 from "./assets/oversizedshirt2.png";
import oversizedshirt3 from "./assets/oversizedshirt3.png";
import oversizedshirt4 from "./assets/oversizedshirt4.png";
import oversizedshirt5 from "./assets/oversizedshirt5.png";

function OversizedShirts(){

    const [Flipped, setFlipped]=useState(false);
    return(
        <>
        <div>
            <h1 className="trend-headline">Baggy Jeans</h1>
        </div>

        <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">What is it?</h1>
            <p>Oversized shirts regular-fit shirts se intentionally wider aur longer hoti hain. Inmein relaxed shoulders, 
                loose sleeves aur extra room hota hai, jo outfit ko comfortable aur effortless silhouette deta hai.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">Why it's trending?</h1>
            <p>Oversized shirts streetwear, relaxed fashion aur layering trends ki wajah se popular hain. Ye basic outfit ko instantly more modern aur stylish bana sakti hain,
                 aur different looks ke liye easily layer bhi ki ja sakti hain.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">How to wear it?</h1>
            <p className="detailpara"> → Oversized shirt ko different ways mein style kar sakte ho:</p>

            <p className="detailpara"> → Open Oversized Shirt + Basic T-shirt → effortless layered look</p>
 <p className="detailpara">→ Oversized Shirt + Baggy Jeans → modern streetwear</p>
 <p className="detailpara">→ Oversized Shirt + Straight Pants → clean casual look</p>
 <p className="detailpara">→ Oversized Shirt + Shorts → relaxed summer outfit</p>
 <p className="detailpara">→ Shirt ko fully buttoned ya half-tucked bhi wear kar sakte ho for a more styled appearance.</p>
<p className="detailpara">
Tip: Oversized shirt ke saath proportions balance karna important hai. Full relaxed look ke liye baggy bottoms choose karo, aur cleaner silhouette ke liye straight ya slightly fitted bottoms pair karo.
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
                        <img className="flipcardimg" src={oversizedshirt1} alt="'oversizedshirt1"/>
                        <p>Oversized: Oversized Shirt</p>
                        <p>Pair With: Basic T-shirt + Baggy Jeans</p>
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
                        <img className="flipcardimg" src={oversizedshirt2} alt="'oversizedshirt2"/>
                        <p>Oversized: Oversized Shirt</p>
                        <p>Pair With: Straight Trousers + Sneakers</p>
                        <p>Vibe: Minimal</p>
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
                        <img className="flipcardimg" src={oversizedshirt3} alt="'oversizedshirt3"/>
                        <p>Oversized: Oversized Shirt</p>
                        <p>Pair With: Cargo Pants + Sneakers</p>
                        <p>Vibe: Utility</p>
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
                        <img className="flipcardimg" src={oversizedshirt4} alt="'oversizedshirt4"/>
                        <p>Oversized: Oversized Shirt</p>
                        <p>Pair With: Shorts + Sneakers</p>
                        <p>Vibe: Summer Casual</p>
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
                        <img className="flipcardimg" src={oversizedshirt5} alt="'oversizedshirt5"/>
                        <p>Oversized: Oversized Shirt</p>
                        <p>Pair with: Wide-leg Trousers + Loafers</p>
                        <p>Vibe: Smart Casual</p>
                    </div>

                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default OversizedShirts