import { useState } from "react"
import cargo1  from "./assets/cargo1.png";
import cargo2 from "./assets/cargo2.png";
import cargo3 from "./assets/cargo3.png";
import cargo4 from "./assets/cargo4.png";
import cargo5 from "./assets/cargo5.png";

function CargoPants(){

    const [Flipped, setFlipped]=useState(false);
    return(
        <>
        <div>
            <h1 className="trend-headline">Cargo Pants</h1>
        </div>

        <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">What is it?</h1>
            <p>Cargo pants loose/relaxed-fit trousers hote hain jinmein usually side utility pockets hoti hain.
                 Ye practical look ke saath outfit ko casual aur streetwear vibe dete hain.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">Why it's trending?</h1>
            <p>Cargo pants streetwear, utility fashion aur relaxed-fit trend ki wajah se popular hain.
                 Loose silhouette aur multiple pockets outfit ko effortless, modern aur slightly rugged look dete hain.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">How to wear it?</h1>
            <p className="detailpara"> → Cargo Pants ko style karte waqt proportion balance important hai:</p>

            <p className="detailpara"> → Cargo pants + fitted T-shirt → clean casual look</p>
 <p className="detailpara">→ Cargo pants + oversized T-shirt → streetwear look</p>
 <p className="detailpara">→ Cargo pants + boxy shirt → modern relaxed look</p>
 <p className="detailpara">→ Cargo pants + hoodie → casual winter/street style</p>
 <p className="detailpara">→ Cargo pants + minimal accessories → clean utility look</p>
<p className="detailpara">
Tip: Agar cargo pants already baggy hain, toh upper ko either slightly fitted rakho for balance, ya oversized rakho for a complete relaxed silhouette.
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
                        <img className="flipcardimg" src={cargo1} alt="cargo1"/>
                        <p>Cargo: Cargo Pants</p>
                        <p>Pair With: Fitted T-shirt + Minimal Sneakers</p>
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
                        <img className="flipcardimg" src={cargo2} alt="'cargo2"/>
                        <p>Cargo : Cargo Pant</p>
                        <p>Pair With: Oversized T-shirt + Retro Sneakers</p>
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
                        <img className="flipcardimg" src={cargo3} alt="cargo3"/>
                        <p>Cargo: Cargo Pant</p>
                        <p>Pair With: Boxy Shirt + Minimal Sneakers</p>
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
                        <img className="flipcardimg" src={cargo4} alt="cargo4"/>
                        <p>Cargo: Cargo Pant</p>
                        <p>Pair With: Hoodie + Chunky Sneakers</p>
                        <p>Vibe: Urban Street</p>
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
                        <img className="flipcardimg" src={cargo5} alt="cargo5"/>
                        <p>Cargo: Cargo Pant</p>
                        <p>Pair with:Relaxed Shirt + Loafers</p>
                        <p>Vibe: Smart Casual</p>
                    </div>

                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default CargoPants