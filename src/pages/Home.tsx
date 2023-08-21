import Background from '../assets/images/car.jpeg';

function Home() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}}
         className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
            <div className='flex place-items-start h-screen'>
                <h3 className='p-10 font-extrabold text-8xl text-black rounded'>Welcome to The Lot!</h3>
            </div>
    </div>
  )
}

export default Home