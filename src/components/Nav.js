import logo from '../assets/nav-logo.png';

export default function Nav() {
  return (
    <nav className="navbar">
      <a href="/" className="logo"><img src={logo} alt="Little Lemon Logo"/></a>
      <ul className="nav-links">
        <li className="nav-item"><a href="/about">About</a></li>
        <li className="nav-item"><a href="/menu">Menu</a></li>
        <li className="nav-item"><a href="/booking">Order</a></li>
        <li className="nav-item"><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}