import { useState } from 'react';
import './CarousalTabs.scss';

function CarousalTabs({ data, onTabChange }) {
	const [activeTab, setActiveTab] = useState(0);
	const [leftPosition, setLeftPosition] = useState(0);

	function activeTabHandler(tab, index) {
		setLeftPosition(index * 100);
		setTimeout(() => setActiveTab(index), 300);
		onTabChange(tab, index);
	}

	return (
		<div className="tabs">
			<div className="tabs__items">
				{data.map((tab, index) => (
					<span
						key={index}
						className={`tabs__tab-item ${activeTab === index ? 'active' : ''}`}
						onClick={() => activeTabHandler(tab, index)}
					>
						{tab}
					</span>
				))}
				<span
					className="tabs__active-background "
					style={{ left: leftPosition }}
				></span>
			</div>
		</div>
	);
}

export default CarousalTabs;
