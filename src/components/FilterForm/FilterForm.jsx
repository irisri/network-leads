import React from "react";
import "./FilterForm.css";

export function FilterForm(props) {
	const { categories, filter, onHandleChange } = props;
	const { category } = filter;

	return (
		<form>
			<select defaultValue={category} name="category" onChange={onHandleChange}>
				{categories.map((categoryItem, index) => {
					return (
						<option value={categoryItem} key={index}>
							{categoryItem}
						</option>
					);
				})}
			</select>
			<input
				type="text"
				name="text"
				placeholder="Search"
				onChange={onHandleChange}></input>
		</form>
	);
}
