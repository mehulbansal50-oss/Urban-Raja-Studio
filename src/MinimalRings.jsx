import { useState } from "react"
import ring1  from "./assets/ring1.jpg";
import ring2 from "./assets/ring2.jpg";
import ring3 from "./assets/ring3.jpg";
import ring4 from "./assets/ring4.jpg";
import ring5 from "./assets/ring5.jpg";

function MinimalRings(){

    const [Flipped, setFlipped]=useState(false);
    return(
        <>
        <div>
            <h1 className="trend-headline">Minimal Rings</h1>
        </div>

        <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">What is it?</h1>
            <p>→ Minimal rings simple, clean-design rings hote hain jo subtle detailing aur sleek shapes par focus karte hain.
                 Ye outfit ko overdo kiye bina hands ko polished aur stylish look dete hain.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">Why it's trending?</h1>
            <p>→ Minimal rings clean aesthetics, streetwear aur quiet-luxury fashion ke saath easily blend hote hain.
                 Simple accessories ke trend ki wajah se ye everyday outfits mein ek popular styling element ban gaye hain.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">How to wear it?</h1>
        
            <p className="detailpara"> → Single Minimal Ring → clean & subtle look</p>
 <p className="detailpara">→ 2-3 Rings → stylish layered look</p>
 <p className="detailpara">→ Ring + Minimal Chain → coordinated accessories</p>
 <p className="detailpara">→ Oversized T-shirt + Rings → streetwear vibe</p>
 <p className="detailpara">→ Shirt + Trousers + Ring → refined minimal look</p>
<p className="detailpara">
Tip: Agar outfit already detailed hai, to simple rings rakho. Basic outfit ke saath 2-3 coordinated rings try karke accessories ko highlight kar sakte ho.
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
                        <img className="flipcardimg" src={ring1} alt="ring1"/>
                        <p>Accessories: Minimal Ring</p>
                        <p>Pair With: Basic T-shirt + Jeans</p>
                        <p>Vibe: Everyday Casual</p>
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
                        <img className="flipcardimg" src={ring2} alt="ring2"/>
                        <p>Accessories: Minimal Ring</p>
                        <p>Pair With: Oversized T-shirt + Baggy Jeans</p>
                        <p>Vibe: Streetwear</p>
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
                        <img className="flipcardimg" src={ring3} alt="ring3"/>
                        <p>Accessories: 2 Rings</p>
                        <p>Pair With: Relaxed Shirt + Trousers</p>
                        <p>Vibe: Modern Minimal</p>
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
                        <img className="flipcardimg" src={ring4} alt="ring4"/>
                        <p>Accessories: 2-3 Ring</p>
                        <p>Pair With: Black Shirt + Jeans</p>
                        <p>Vibe: Sleek</p>
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
                        <img className="flipcardimg" src={ring5} alt="ring5"/>
                        <p>Accessories: Minimal Ring + chain</p>
                        <p>Pair with:Monochrome Outfit</p>
                        <p>Vibe: Quiet Luxury</p>
                    </div>

                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default MinimalRings