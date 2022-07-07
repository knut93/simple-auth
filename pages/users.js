export default function Users() {

    const res = await fetch(
        '/api/createuser', 
        {
            body: JSONdata,
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          }
        );
    const result = await res.json();

    return (
        <>
            <div className="text-center p-3">
                <h3>List of users</h3>
            </div>
        </>
    )
}