import { Link } from 'react-router-dom'
const links = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Contact', url: '/contact' },
  { id: 4, name: 'Galery', url: '/galery' },

]

function Navbar() {
  return (
    <div className="w-full h-16 text-center p-10 flex justify-between items-center bg-slate-200">
      <div className="w-14 rounded">
        <img className="rounded-full" src="im.jpg" alt="" />
      </div>
      <div className="flex gap-3 justify-end cursor-pointer capitalize text-xl">
        {links.map((link) => (
          <Link key={link.id} to={link.url}>{link.name}</Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
