import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getServerSideProps = async() => {
    const usersList = await prisma.user.findMany()
    return { 
        props: {
            usersList
        }
    };
    
}

const Users = ({ usersList }) => {
    return (
        <>
            <div className="text-center p-3">
                <h1>List of users</h1>
                <table className="m-auto table-auto min-w-[50%]">
                    <tbody>
                        <tr>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                        {usersList.map((d) => (
                            <tr key={d}>
                                <td>{d.lastName}</td>
                                <td>{d.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Users;