import React from 'react';
import { CashSetData } from '../helpers/CashSetData';

const CashSet = (props) => {
	const currentLevel = props.currentLevel;
	console.log(currentLevel);
	return (
		<div>
			{CashSetData.map((data, index) => {
				if (index === currentLevel) {
					return (
						<div
							key={data.level}
							className='cashSet-active'
							style={{ backgroundColor: 'red' }}
						>
							{data.level} - Rs {data.price}
						</div>
					);
				} else {
					return (
						<div key={data.level}>
							{data.level} - Rs {data.price}
						</div>
					);
				}
			})}
		</div>
	);
};

export default CashSet;
