import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
	const coffee = useLoaderData();
	const navigate = useNavigate();
	// console.log(coffee);
	const { _id, name, quantity, supplier, taste, category, details, photo } =
		coffee;
	console.log(name);

	const handleUpdateCoffee = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;
		const updateCoffee = {
			name,
			quantity,
			supplier,
			taste,
			category,
			details,
			photo,
		};
		console.log(updateCoffee);

		fetch(`http://localhost:5000/coffee/${_id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(updateCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire('Updated!',  'success');
					navigate('/')
				}
			});
	};
	return (
		<>
			<div>
				<h1>Update Coffee</h1>
			</div>
			<form onSubmit={handleUpdateCoffee}>
				<div className="md:flex  gap-2">
					<div className="form-control md:w-1/2">
						<label className="label">
							<span className="label-text ml-4 text-base font-semibold">
								Coffee Name
							</span>
						</label>
						<label className="input">
							<input
								type="text"
								name="name"
								defaultValue={name}
								placeholder="coffee name"
								className="input input-bordered md:w-full"
							/>
						</label>
					</div>

					<div className="form-control md:w-1/2">
						<label className="label">
							<span className="label-text ml-4 text-base font-semibold">
								Available Quantity
							</span>
						</label>
						<label className="input">
							<input
								type="text"
								name="quantity"
								defaultValue={quantity}
								placeholder="Available Quantity"
								className="input input-bordered md:w-full"
							/>
						</label>
					</div>
				</div>
				{/* ............................2nd.......................... */}

				<div className="md:flex  gap-2">
					<div className="form-control md:w-1/2">
						<label className="label">
							<span className="label-text ml-4 text-base font-semibold">
								Supplier
							</span>
						</label>
						<label className="input">
							<input
								type="text"
								name="supplier"
								defaultValue={supplier}
								placeholder="Supplier"
								className="input input-bordered md:w-full"
							/>
						</label>
					</div>

					<div className="form-control md:w-1/2">
						<label className="label">
							<span className="label-text ml-4 text-base font-semibold">
								Taste
							</span>
						</label>
						<label className="input">
							<input
								type="text"
								name="taste"
								defaultValue={taste}
								placeholder="Taste"
								className="input input-bordered md:w-full"
							/>
						</label>
					</div>
				</div>
				{/* ............................3rd.......................... */}

				<div className="md:flex  gap-2">
					<div className="form-control md:w-1/2">
						<label className="label">
							<span className="label-text ml-4 text-base font-semibold">
								Category
							</span>
						</label>
						<label className="input">
							<input
								type="text"
								name="category"
								defaultValue={category}
								placeholder="Category"
								className="input input-bordered md:w-full"
							/>
						</label>
					</div>

					<div className="form-control md:w-1/2">
						<label className="label">
							<span className="label-text ml-4 text-base font-semibold">
								Details
							</span>
						</label>
						<label className="input">
							<input
								type="text"
								name="details"
								defaultValue={details}
								placeholder="Details"
								className="input input-bordered md:w-full"
							/>
						</label>
					</div>
				</div>
				<div className="form-control md:full">
					<label className="label">
						<span className="label-text ml-4 text-base font-semibold">
							Photo URL
						</span>
					</label>
					<label className="input">
						<input
							type="text"
							name="photo"
							defaultValue={photo}
							placeholder="Photo URL"
							className="input input-bordered md:w-full"
						/>
					</label>
				</div>
				<button type="submit" className="btn mt-8 w-full">
					Update Coffee
				</button>
			</form>
		</>
	);
};

export default UpdateCoffee;
