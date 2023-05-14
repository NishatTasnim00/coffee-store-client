import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
	const { _id, name, quantity, supplier, taste, category, details, photo } =
		coffee;

	const handleDelete = (_id) => {
		console.log(_id);
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				console.log('Delete confirm');
				fetch(`http://localhost:5000/coffee/${_id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.DeleteCount > 0) {
							Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
						}
						const remaining = coffees.filter(cof => cof._id !== _id);
						setCoffees(remaining);
					});
			}
		});
	};
	return (
		<div>
			<div className="card card-side bg-base-100 shadow-xl">
				<figure className="h-48 w-48">
					<img className="h-48 w-48 object-cover" src={photo} />
				</figure>
				<div className="flex gap-16 space-between p-5">
					<div>
						<h2 className="card-title">Name: {name}</h2>
						<h2 className="card-title">Quantity: {quantity}</h2>
						<h2 className="card-title">Taste: {taste}</h2>
					</div>

					<div className="card-actions flex flex-col">
						<button className="btn btn-primary">View</button>
						<Link to={`updateCoffee/${_id}`}>
							<button className="btn btn-primary">Edit</button>
						</Link>
						<button
							onClick={() => handleDelete(_id)}
							className="btn btn-primary"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeCard;
