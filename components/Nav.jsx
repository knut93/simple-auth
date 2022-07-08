import Link from 'next/link'

export default function Nav() {

return (
    <nav>
        <div className="bg-blue-800 text-white text-lg space-x-3 p-4">
            <Link href="/">Home</Link>
            <Link href="/users">Users</Link>
        </div>
    </nav>
);};