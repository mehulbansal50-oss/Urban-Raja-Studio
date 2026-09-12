import { useState } from "react"
import trouser1  from "./assets/trouser1.png";
import trouser2 from "./assets/trouser2.png";
import trouser3 from "./assets/trouser3.png";
import trouser4 from "./assets/trouser4.jpg";
import trouser5 from "./assets/trouser5.png";

function LinenTrousers(){

    const [Flipped, setFlipped]=useState(false);
    return(
        <>
        <div>
            <h1 className="trend-headline">Linen Trousers</h1>
        </div>

        <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">What is it?</h1>
            <p>Linen trousers lightweight aur breathable trousers hote hain jo linen fabric se bane hote hain. Inka relaxed, 
                flowy texture summer aur warm-weather outfits ke liye perfect hota hai.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">Why it's trending?</h1>
            <p>Linen trousers minimal, relaxed aur quiet-luxury/old-money aesthetics ki wajah se popular hain. 
                Clean silhouette aur natural texture outfit ko effortlessly premium look dete hain.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">How to wear it?</h1>
            <p className="detailpara"> → Linnen Trousers ko style karte waqt proportion balance important hai:</p>

            <p className="detailpara"> → Linen trousers + fitted T-shirt → clean casual look</p>
 <p className="detailpara">→ Linen trousers + oversized shirt → relaxed minimal look</p>
 <p className="detailpara">→ Linen trousers + polo T-shirt → smart casual look</p>
 <p className="detailpara">→ Linen trousers + boxy shirt → modern minimal style</p>
 <p className="detailpara">→ Linen trousers + relaxed shirt → effortless summer look</p>
<p className="detailpara">
Tip: Linen trousers ka fit relaxed rakho, but upper aur footwear ko clean rakho taaki outfit messy na lage.
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
                        <img className="flipcardimg" src={trouser1} alt="trouser1"/>
                        <p>Linen: Linen Trouser</p>
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
                        <img className="flipcardimg" src={trouser2} alt="trouser2"/>
                        <p>Linen: Linen Trouser</p>
                        <p>Pair With:Oversized Shirt + Loafers</p>
                        <p>Vibe: Quiet Luxury</p>
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
                        <img className="flipcardimg" src={trouser3} alt="trouser3"/>
                        <p>Linen: Linen Trouser</p>
                        <p>Pair With: Polo T-shirt + Sneakers</p>
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
                        <img className="flipcardimg" src={trouser4} alt="trouser4"/>
                        <p>Linen: Linen Trouser</p>
                        <p>Pair With: Boxy Shirt + Minimal Sneakers</p>
                        <p>Vibe: Modern Minimal</p>
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
                        <img className="flipcardimg" src={trouser5} alt="trouser5"/>
                        <p>Linen: Linen Trouser</p>
                        <p>Pair with:Relaxed Shirt + Loafers</p>
                        <p>Vibe: Effortless Summer</p>
                    </div>

                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default LinenTrousers