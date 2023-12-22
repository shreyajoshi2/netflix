export default function Welcomepage() {
  return (
    <>
      <div className="row justify-content-center h-100 align-items-center  pb-5">
        <div className="col-lg-10">
          <div>
            <h2 className="h2heading text-center">Laughter. Tears. Thrills. Find it all on Netflix.</h2>
            <p className="secondarytext text-center">Endless entertainment starts at just ₹149. Cancel anytime.</p>
            <p className="thirdtext text-center">Ready to watch? Enter your email to create or restart your membership.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 ">
              <div className="text-center d-flex" style={{ columnGap: "10px" }}>
                <input minlength="5" maxlength="50" type="email" name="email" value="" className="form-control inputgetstarted " placeholder="Email Address" />
                <button className="btn getstartedbtn">Get Started </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
