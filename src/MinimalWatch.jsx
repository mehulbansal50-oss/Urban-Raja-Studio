import { useState } from "react"
import watch1  from "./assets/watch1.jpg";
import watch2 from "./assets/watch2.jpg";
import watch3 from "./assets/watch3.jpg";
import watch4 from "./assets/watch4.jpg";
import watch5 from "./assets/watch5.jpg";

function MinimalWatch(){

    const [Flipped, setFlipped]=useState(false);
    return(
        <>
        <div>
            <h1 className="trend-headline">Minimal Watch</h1>
        </div>

        <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">What is it?</h1>
            <p>→ Minimal watches clean dial, simple markers aur sleek design wali watches hoti hain.
                 Inka understated look outfit ko overdo kiye bina ek refined and polished touch deta hai.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">Why it's trending?</h1>
            <p>→ Minimal watches clean aesthetics, quiet luxury aur timeless fashion ke trend ke saath popular hain.
                 Simple design ki wajah se ye casual se lekar formal outfits tak easily work karti hain.
            </p>
            </div>
        </div>

         <div className="trenddetail">
            <div className="detail">
            <h1 className="detailheading">How to wear it?</h1>
        
            <p className="detailpara"> → Basic T-shirt + Minimal Watch → clean everyday look</p>
 <p className="detailpara">→ Oversized T-shirt + Watch → modern casual vibe</p>
 <p className="detailpara">→ Shirt + Trousers + Watch → smart casual</p>
 <p className="detailpara">→ Blazer + Minimal Watch → refined formal look</p>
 <p className="detailpara">→ Watch + Minimal Ring/Chain → coordinated accessories</p>
<p className="detailpara">
Tip: Everyday styling ke liye simple dial aur neutral strap choose karo. Formal outfits ke saath slim, clean-profile watch best rahegi.
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
                        <img className="flipcardimg" src={watch1} alt="watch1"/>
                        <p>Accessories: Minimal watch</p>
                        <p>Pair With: T-shirt + Jeans + Sneakers</p>
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
                        <img className="flipcardimg" src={watch2} alt="watch2"/>
                        <p>Accessories: Minimal Watch</p>
                        <p>Pair With: Oversized Shirt + Baggy Jeans</p>
                        <p>Vibe: Modern Casual</p>
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
                        <img className="flipcardimg" src={watch3} alt="watch3"/>
                        <p>Accessories: Minimal Watches</p>
                        <p>Pair With: Relaxed Shirt + Trousers + Loafers</p>
                        <p>Vibe: Quiet Luxury</p>
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
                        <img className="flipcardimg" src={watch4} alt="watch4"/>
                        <p>Accessories: Minimal Watches</p>
                        <p>Pair With: Polo + Chinos + Sneakers</p>
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
                        <img className="flipcardimg" src={watch5} alt="watch5"/>
                        <p>Accessories: Minimal watch</p>
                        <p>Pair with:Blazer + Trousers + Loafers</p>
                        <p>Vibe: Formal</p>
                    </div>

                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default MinimalWatch