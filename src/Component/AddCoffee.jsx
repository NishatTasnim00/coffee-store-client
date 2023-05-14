import React from 'react';

const AddCoffee = () => {
	const handleAddCoffee = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;
		const newCoffee = {
			name,
			quantity,
			supplier,
			taste,
			category,
			details,
			photo,
		};
		console.log(newCoffee);

		fetch('http://localhost:5000/coffee', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					alert('added successfully!');
					// form.reset();
				}
			});
	};

	return (
		<>
			<div>
				<h1>Add New Coffee</h1>
			</div>
			<form onSubmit={handleAddCoffee}>
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
							placeholder="Photo URL"
							className="input input-bordered md:w-full"
						/>
					</label>
				</div>
				<button className="btn mt-8 w-full">Add Coffee</button>
			</form>
		</>
	);
};

export default AddCoffee;
