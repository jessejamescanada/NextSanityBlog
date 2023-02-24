import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <h3>LOGO HERE</h3>
        </Link>
      </div>
      <div>
        <h3>Second Header Component</h3>
      </div>
    </header>
  )
}

export default Header
