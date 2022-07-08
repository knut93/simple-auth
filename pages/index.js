import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      lastName: event.target.name.value,
      email: event.target.email.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/createuser';
    const options = {
      body: JSONdata,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
    alert(`Your name: ${event.target.name.value}.`);
    const res = await fetch(endpoint, options);
    const result = await res.json();
    alert(`Returned: ${result.lastName}`);
  }
  return (
    <>
     <div className='mt-4 shadow-sm border-2 border-black-600-p-1 flex-col space-y-6 w-auto max-w-min mx-auto text-center rounded text-2x1 min-w-[25%]'>
      <div className='font-bold p-2 bg-gray-200 '>
        <h2>Register your account here</h2>
      </div>
      <div className='space-y-6'>
        <form className='space-y-3 max-w-[75%] w-auto mx-auto' onSubmit={handleSubmit}>
          <div className='text-left flex flex-col'>
            <label>Name </label>
            <input className='border-2 rounded border-gray-600-p-1' name="name" type="text" required></input>
          </div>
          <div className='text-left flex flex-col'>
            <label>Email </label>
            <input className='border-2 rounded border-gray-600-p-1' name="email" type="text" required></input>
          </div>
          <div className='pb-3 space-y-6 space-x-6'>
          <button className='py-1 px-2 bg-blue-500 text-white rounded' type="submit">Register</button>
        </div>
        </form>
      </div>
     </div>
    </>
  );
}