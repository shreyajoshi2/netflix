import { LOGO } from "../utils/contant.js";
import Welcomepage from "../components/welcomepage";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function Frontlayout() {
  return (
    <div className="frontmain">
      <div className="frontmainsub">
        <div className="container h-100">
          <Frontheader />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function Frontheader() {
  return (
    <div className="row p-4">
      <div className="col-lg-4">
        <img src={LOGO} alt="logo" width="150px" />
      </div>
      <div className="col-lg-8 text-end">
        <select className="selectlang">
          <option selected="" lang="en" label="English" value="en-IN">
            English
          </option>
          <option lang="hi" label="हिन्दी" value="hi-IN">
            हिन्दी
          </option>
        </select>
        &nbsp;&nbsp;
        <Link class="btn signbtn" id="signIn" to="/signin">
          Sign In
        </Link>
      </div>
    </div>
  );
}
export default Frontlayout;
