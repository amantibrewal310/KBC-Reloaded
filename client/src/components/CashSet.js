import React from 'react';
import { CashSetData } from '../helpers/CashSetData';

const CashSet = () => {
	return (
		<div>
			{CashSetData.map((data) => {
				return (
					<div key={data.level}>
						{data.level} - Rs {data.price}
					</div>
				);
			})}
		</div>
	);
};

export default CashSet;
