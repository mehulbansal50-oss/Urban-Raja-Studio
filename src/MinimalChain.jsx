import { useState } from "react"
import chain1  from "./assets/chain1.jpg";
import chain2 from "./assets/chain2.jpg";
import chain3 from "./assets/chain3.jpg";
import chain4 from "./assets/chain4.jpg";
import chain5 from "./assets/chain5.jpg";

function MinimalChain(){

    const [Flipped, setFlipped]=useState(false);
    return(
        <>
        <div>
            <h1 className="trend-headline">Minimal Chain</h1>
        </div>

        <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">What is it?</h1>
            <p>→ Minimal chains simple aur understated necklaces hote hain jo thin links, clean designs aur subtle detailing ke saath aate hain.
                 Ye outfit ko overpower kiye bina ek refined touch add karte hain.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">Why it's trending?</h1>
            <p>→ Minimal chains clean fashion, quiet luxury aur modern streetwear aesthetics ke saath easily fit ho jaati hain.
                 Simple accessories ka trend badhne ki wajah se ye everyday styling ka popular choice ban gayi hain.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">How to wear it?</h1>
            <p className="detailpara"> Minimal chain ko almost kisi bhi outfit ke saath easily style kiya ja sakta hai:</p>

            <p className="detailpara"> → Basic T-shirt + Minimal Chain → clean everyday look</p>
 <p className="detailpara">→ Oversized T-shirt + Chain → modern streetwear</p>
 <p className="detailpara">→ Shirt + Chain → smart casual</p>
 <p className="detailpara">→ Kurta + Subtle Chain → contemporary ethnic look</p>
 <p className="detailpara">→ Layered Chains → more stylish and statement look</p>
<p className="detailpara">
Tip: Minimal look ke liye ek thin chain choose karo. Agar outfit simple hai, to slightly thicker chain ya subtle layering try kar sakte ho.
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
                        <img className="flipcardimg" src={chain1} alt="chain1"/>
                        <p>Accessories: Minimal Chain</p>
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
                        <img className="flipcardimg" src={chain2} alt="chain2"/>
                        <p>Accessories: Minimal Chain</p>
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
                        <img className="flipcardimg" src={chain3} alt="chain3"/>
                        <p>Accessories: Minimal Chain</p>
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
                        <img className="flipcardimg" src={chain4} alt="chain4"/>
                        <p>Accessories: Minimal Chain</p>
                        <p>Pair With: Black Shirt + Black Jeans</p>
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
                        <img className="flipcardimg" src={chain5} alt="chain5"/>
                        <p>Accessories: Minimal Chain</p>
                        <p>Pair with:Kurta + Trousers</p>
                        <p>Vibe: Contemporary</p>
                    </div>

                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default MinimalChain