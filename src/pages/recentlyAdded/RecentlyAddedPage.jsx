import React from 'react';
import style from './RecentlyAddedPage.module.scss';
import { useState, useEffect } from 'react';
import RecentListItem from '../../components/recentlyAdded/RecentListItem';

const RecentlyAddedPage = () => {

	const [recentlyAdded, setRecentlyAdded] = useState([]);

	useEffect(() => {

		fetch('https://www.freetogame.com/api/games?sort-by=release-date')
			.then((res) => res.json())
			.then((data) => setRecentlyAdded(data))
	}, []);

	console.log(recentlyAdded);


	return (
		<main className={style.recentlyAddedPage}>
			RecentlyAddedPage
			{recentlyAdded.map((game) => (
				<RecentListItem
					key={game.id}
					image={game.thumbnail}
					title={game.title}
					platform={game.platform}
					genre={game.genre}
				/>
			))}

		</main>
	);
};

export default RecentlyAddedPage;
