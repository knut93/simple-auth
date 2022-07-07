import Link from 'next/link'

export default function Nav() {

return (
    <nav>
        <div className="bg-blue-800 space-x-3 text-white p-4">
            <Link href="/">
                <a classname="text-white text-lg">Home</a>
            </Link>
            <Link href="/users">Users</Link>
            <a classname="text-white text-lg">Logout</a>
        </div>
    </nav>
);};