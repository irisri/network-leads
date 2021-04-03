import React from "react";

export function FilterForm(props) {
	const { categories, filter, onHandleChange } = props;

	return (
		<form>
			<select defaultValue={filter} name="filter" onChange={onHandleChange}>
				{categories.map((category, index) => {
					return (
						<option value={category} key={index}>
							{category}
						</option>
					);
				})}
			</select>
		</form>
	);
}
