import { useState } from "react"
import retro1  from "./assets/retro1.jpg";
import retro2 from "./assets/retro2.jpg";
import retro3 from "./assets/retro3.jpg";
import retro4 from "./assets/retro4.jpg";
import retro5 from "./assets/retro5.jpg";

function RetroSneaker(){

    const [Flipped, setFlipped]=useState(false);
    return(
        <>
        <div>
            <h1 className="trend-headline">Retro Sneakers</h1>
        </div>

        <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">What is it?</h1>
            <p>Retro sneakers classic running, basketball aur court-inspired designs se inspired sneakers hote hain. Inmein usually simple silhouettes,
                 vintage details aur old-school color combinations dekhne ko milte hain.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">Why it's trending?</h1>
            <p>Retro sneakers 90s/2000s fashion revival, vintage aesthetics aur modern streetwear ke mix ki wajah se trending hain.
                 Ye casual outfits ko instantly stylish aur nostalgic feel dete hain.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">How to wear it?</h1>

            <p className="detailpara"> →Retro sneakers + baggy jeans → streetwear look</p>
 <p className="detailpara">→Retro sneakers + straight trousers → clean casual look</p>
 <p className="detailpara">→ Retro sneakers + cargo pants → utility/street style</p>
 <p className="detailpara">→ Retro sneakers + relaxed trousers → modern minimal look</p>
 <p className="detailpara">→ Retro sneakers + shorts → casual summer look</p>
<p className="detailpara">
Tip: Retro sneakers ko simple, relaxed-fit clothing ke saath pair karo—sneakers ko outfit ka statement piece banne do.
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
                        <img className="flipcardimg" src={retro2} alt="retro2"/>
                        <p>Sneaker: Retro Sneaker</p>
                        <p>Pair With: Baggy Jeans + Boxy T-shirt</p>
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
                        <img className="flipcardimg" src={retro3} alt="retro3"/>
                        <p>Footwear: Retro Sneaker</p>
                        <p>Pair With:Cargo Pant + Fitted T-shirt</p>
                        <p>Vibe: Utility Casual</p>
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
                        <img className="flipcardimg" src={retro5} alt="retro5"/>
                        <p>Footwear: Retro Sneaker</p>
                        <p>Pair With: Oversized Shirt + Straight Trouser</p>
                        <p>Vibe: Modern Casual</p>
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
                        <img className="flipcardimg" src={retro4} alt="retro4"/>
                        <p>Footwear: Retro Sneaker</p>
                        <p>Pair With: Linnen T-Shirt + Linnen Trouser</p>
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
                        <img className="flipcardimg" src={retro1} alt="retro1"/>
                        <p>Footwear: Retro Sneaker</p>
                        <p>Pair with:Oversized T-Shirt + Shorts</p>
                        <p>Vibe: Relaxed Summer</p>
                    </div>

                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default RetroSneaker 