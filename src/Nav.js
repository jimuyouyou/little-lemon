import logo from './assets/nav-logo.png';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#"><img src={logo} /></a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservation</a></li>
        <li><a href="/order">Order</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}