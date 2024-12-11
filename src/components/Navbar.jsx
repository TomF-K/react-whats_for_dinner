import { Link } from "react-router-dom";
import { PiCookingPot } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav>
          <Link to="/">
            <div className='title-wrapper'>
              <PiCookingPot className="title-icon"></PiCookingPot>
              <h1>What&apos;s for Dinner?</h1>
            </div>
        </Link>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      {/* <li><Link to="/login">Login</Link></li> */}
    </ul>
  </nav>
  )
}
export default Navbar