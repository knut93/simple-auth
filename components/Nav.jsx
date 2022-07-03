import Link from 'next/link'

export default function Nav() {

return (
    <nav>
        <div>
            <Link href="/">Home</Link>
            <Link href="/users">Users</Link>
            <a>Logout</a>
        </div>
    </nav>
);};