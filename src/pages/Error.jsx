import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
        <h2>Uh Oh!</h2>
        <p>The content you&apos;re looking for doesn&apos;t exist</p>
        <button><Link to="/">Take me home</Link></button>
        </div>
  )
}
export default Error