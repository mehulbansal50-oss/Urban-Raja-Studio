function VerifyEmail(){
    return(
<div className="verification-overlay">
    <div className="verification-popup">
        <h2>Verify Your Gmail</h2>

        <input
            type="text"
            placeholder="Enter 6-digit code"
        />

        <button>Verify</button>
    </div>
</div>
    )
}

export default VerifyEmail