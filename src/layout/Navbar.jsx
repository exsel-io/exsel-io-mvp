import logo from '../assets/logo.svg'


const Navbar = () => {
  return (
    <nav className="bg-ash backdrop-blur-sm">
      <div className="flex items-center justify-between w-full max-w-[1600px] mx-auto py-4 px-6">
        <div>
          <img src={logo} alt="Exsel Logo" className="h-[35px]" />
        </div>
        <div className="flex items-center uppercase text-white">
          <ul className="flex items-center">
            <li className="mr-5">Home</li>
            <li className="mr-5">$EXT Token</li>
            <li className="mr-5">Partnership</li>
            <li className="mr-5">Community</li>
            <li className="mr-5">Whitepaper</li>
          </ul>
          <button className="bg-primary mr-5 rounded px-4 py-1.5">Login</button>
          <button className="rounded rounded border-2 border-red-50 px-4 py-1.5">Get Started</button>
        </div>
      </div>
    </nav>
  )
}


export default Navbar