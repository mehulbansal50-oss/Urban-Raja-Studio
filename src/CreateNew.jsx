function CreateNew() {
    return(
        <>
        <div>
            <h1 className="trend-headline">Create New Account</h1>

            <div>
                <form className="createnewfrom">
                    <h3>Mobile Number or Email:</h3>
                    <input className="input-field" type="text" placeholder="mobile nmber or email"/>
                    <h3>Create Your Password:</h3>
                    <input className="input-field" type="password" placeholder="Enter Your Password"/>
                    <h3>Re-enter Your Password: </h3>
                    <input className="input-field" type="text" placeholder="Re-enter Your Password"/>
                    <h3>Birthday</h3>
                    <div className="birthday-drop-parent">
                    <select className="birthday-drop">
                        <option>Jan.</option>
                        <option>Feb.</option>
                        <option>Mar.</option>
                        <option>Apr.</option>
                        <option>May</option>
                        <option>Jun.</option>
                        <option>July</option>
                        <option>Aug.</option>
                        <option>Sep.</option>
                        <option>Oct.</option>
                        <option>Nav.</option>
                        <option>Dec.</option>
                    </select>

                    <select className="birthday-drop">
                        <option value="">Day</option>

  {Array.from({ length: 31 }, (_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ))}
                    </select>

                     <select className="birthday-drop">
                         <option value="">Year</option>

  {Array.from(
    { length: new Date().getFullYear() - 1920 + 1 },
    (_, index) => {
      const year = new Date().getFullYear() - index;

      return (
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
  )}
                    </select>
                    </div>

                    <div>
                       <h3>Name:</h3>
                    <input className="input-field" type="text" placeholder="Enter Your Name"/>
                    </div>

                      <div>
                       <h3>Username:</h3>
                    <input className="input-field" type="text" placeholder="Enter Your Username"/>
                    </div>

                    <button className="createbutton">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default CreateNew