import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="backdrop-blur-sm nav-border-bottom">
      <div className="flex items-center justify-between w-full max-w-[1600px] mx-auto py-4 px-6">
        <div>
          <img src={logo} alt="Exsel Logo" className="h-[35px]"/>
        </div>
        <div className="flex items-center uppercase">
          <ul className="flex items-center mr-10">
            <li className="mr-5">Home</li>
            <li className="mr-5">Courses</li>
            <li className="mr-5">About us</li>
            <li className="mr-5">Community</li>
            <li className="mr-5">Whitepaper</li>
          </ul>
          <button className="rounded border-2 border-primary px-8 py-1.5">Sign In</button>
        </div>
      </div>
    </nav>
  )
}


export default Navbar