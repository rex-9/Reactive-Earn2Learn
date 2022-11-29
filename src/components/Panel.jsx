import { Link } from 'react-router-dom';

const Panel = () => {
  return (
    <section className="bg-yellow-200 pt-24 justify-center flex h-full w-48">
      <ul className="flex flex-col gap-4">
        <li>
          <Link to="/admin/users" className="border-b-[1px] border-black hover:border-blue-200">
            Users
          </Link>
        </li>
        <li>
          <Link to="/admin/studies" className="border-b-[1px] border-black hover:border-blue-200">
            Studies
          </Link>
        </li>
        <li>
          <Link to="/admin/certificates" className="border-b-[1px] border-black hover:border-blue-200">
            Certificates
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Panel
