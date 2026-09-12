import { useState } from "react"
import Minimal1  from "./assets/Minimal1.jpg";
import Minimal2 from "./assets/Minimal2.jpg";
import Minimal3 from "./assets/Minimal3.jpg";
import Minimal4 from "./assets/Minimal4.jpg";
import Minimal5 from "./assets/Minimal5.jpg";

function MinimalSneaker(){

    const [Flipped, setFlipped]=useState(false);
    return(
        <>
        <div>
            <h1 className="trend-headline">Minimal Sneaker</h1>
        </div>

        <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">What is it?</h1>
            <p>→ Minimal sneakers are clean, simple sneakers with subtle detailing,
                 neutral colors, and a low-profile design.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">Why it's trending?</h1>
            <p>→ They are trending because of the rise of minimal, clean and versatile fashion,
                 where one pair of sneakers can work with both casual and smart-casual outfits.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">How to wear it?</h1>

            <p className="detailpara"> → Minimal Sneakers + Straight Jeans → clean everyday look</p>
 <p className="detailpara">→ Minimal Sneakers + Baggy Jeans → relaxed casual look</p>
 <p className="detailpara">→ Minimal Sneakers + Cargo Pants → modern utility look</p>
 <p className="detailpara">→ Minimal Sneakers + Linen Trousers → clean summer look</p>
 <p className="detailpara">→ Minimal Sneakers + Wide-Leg Trousers → modern minimal look</p>
<p className="detailpara">
Tip: Neutral-colored minimal sneakers work best because they easily blend with different outfits without overpowering the look.
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
                        <img className="flipcardimg" src={Minimal1} alt="Minimal1"/>
                        <p>Footwear: Minimal Sneakers</p>
                        <p>Pair With: Straight Jeans + Fitted T-shirt</p>
                        <p>Vibe: Clean Casual</p>
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
                        <img className="flipcardimg" src={Minimal2} alt="Minimal2"/>
                        <p>Footwear: Minimal Sneakers</p>
                        <p>Pair With: Baggy Jeans + Boxy T-shirt</p>
                        <p>Vibe: Relaxed Streetwear</p>
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
                        <img className="flipcardimg" src={Minimal3} alt="Minimal3"/>
                        <p>Footwear: Minimal Sneakers</p>
                        <p>Pair With: Cargo Pants + Fitted T-shirt</p>
                        <p>Vibe: Modern Utility</p>
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
                        <img className="flipcardimg" src={Minimal4} alt="Minimal4"/>
                        <p>Footwear: Minimal Sneakers</p>
                        <p>Pair With: Linen Trousers + Relaxed Shirt</p>
                        <p>Vibe: Clean Summer</p>
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
                        <img className="flipcardimg" src={Minimal5} alt="Minimal5"/>
                        <p>Footwear: Minimal Sneakers</p>
                        <p>Pair with: Wide-Leg Trousers + Boxy Shirt</p>
                        <p>Vibe: Modern Minimal</p>
                    </div>

                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default MinimalSneaker 