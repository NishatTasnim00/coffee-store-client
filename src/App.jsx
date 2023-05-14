import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Component/CoffeeCard'

function App() {
const loadedCoffees = useLoaderData();
const [coffees, setCoffees] = useState(loadedCoffees)
// console.log(coffees);
  return (
		<>
			<p className='font-bold text-4xl text-amber-800'>Coffee Collection : {coffees.length}</p>
			{coffees.map((coffee) => (
				<CoffeeCard
					coffee={coffee}
          coffees={coffees}
					setCoffees={setCoffees}
					kay={coffee._d}
				></CoffeeCard>
			))}
		</>
	);
}

export default App
