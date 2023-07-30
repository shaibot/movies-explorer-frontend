import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Words from '../../images/words_pic.png';
import Kinoalmanakh from '../../images/kinoalmanakh_pic.png';
import Benksy from '../../images/benksy_pic.png';
import Baskiya from '../../images/baskiya_pic.png';
import RunFreedom from '../../images/run-freedom_pic.png';
import Books from '../../images/books_pic.png';
import WhenThinking from '../../images/when-thinking.png';
import GimmeDanger from '../../images/gimme-danger_pic.png';
import Djenis from '../../images/djenis.png';
import BeforeJump from '../../images/before-jump_pic.png';
import JayKharvy from '../../images/jay-kharvy_pic.png';
import Povolnam from '../../images/povolnam_pic.png';
import './MoviesCardList.css';

function MoviesCardList() {
  const moviesData = [
    {
      title: '33 слова о дизайне',
      duration: '1ч 17м',
      imageUrl: Words,
      isLiked: true,
      onLikeClick: () => console.log('Like button clicked for Movie Title 1'),
    },
    {
      title: 'Movie Title 2',
      duration: '1ч 17м',
      imageUrl: Kinoalmanakh,
      isLiked: true,
      onLikeClick: () => console.log('Like button clicked for Movie Title 2'),
    },
    {
      title: 'Movie Title 3',
      duration: '1ч 17м',
      imageUrl: Benksy,
      isLiked: true,
      onLikeClick: () => console.log('Like button clicked for Movie Title 3'),
    },
    {
      title: 'Movie Title 3',
      duration: '1ч 17м',
      imageUrl: Baskiya,
      isLiked: true,
      onLikeClick: () => console.log('Like button clicked for Movie Title 3'),
    },
    {
      title: 'Movie Title 3',
      duration: '1ч 17м',
      imageUrl: RunFreedom,
      isLiked: true,
      onLikeClick: () => console.log('Like button clicked for Movie Title 3'),
    },
    {
      title: 'Movie Title 3',
      duration: '1ч 17м',
      imageUrl: Books,
      isLiked: true,
      onLikeClick: () => console.log('Like button clicked for Movie Title 3'),
    },
    {
      title: 'Movie Title 3',
      duration: '1ч 17м',
      imageUrl: WhenThinking,
      isLiked: true,
      onLikeClick: () => console.log('Like button clicked for Movie Title 3'),
    },
    {
      title: 'Movie Title 3',
      duration: '1ч 17м',
      imageUrl: GimmeDanger,
      isLiked: true,
      onLikeClick: () => console.log('Like button clicked for Movie Title 3'),
    },
    {
      title: 'Movie Title 3',
      duration: '1ч 17м',
      imageUrl: Djenis,
      isLiked: true,
      onLikeClick: () => console.log('Like button clicked for Movie Title 3'),
    },
    {
      title: 'Movie Title 3',
      duration: '1ч 17м',
      imageUrl: BeforeJump,
      isLiked: true,
      onLikeClick: () => console.log('Like button clicked for Movie Title 3'),
    },
    {
      title: 'Movie Title 3',
      duration: '1ч 17м',
      imageUrl: JayKharvy,
      isLiked: true,
      onLikeClick: () => console.log('Like button clicked for Movie Title 3'),
    },
    {
      title: 'Movie Title 3',
      duration: '1ч 17м',
      imageUrl: Povolnam,
      isLiked: true,
      onLikeClick: () => console.log('Like button clicked for Movie Title 3'),
    },
  ];

  return (
    <ul className="movies-cardlist">
      <li className='movies-cardlist__item'>
        <MoviesCard
          imageUrl={moviesData[0].imageUrl}
          title={moviesData[0].title}
          duration={moviesData[0].duration}
          isLiked={moviesData[0].isLiked}
          onLikeClick={moviesData[0].onLikeClick}
        />
      </li>
      <li>
        <MoviesCard
          imageUrl={moviesData[1].imageUrl}
          title={moviesData[1].title}
          duration={moviesData[1].duration}
          isLiked={moviesData[1].isLiked}
          onLikeClick={moviesData[1].onLikeClick}
        />
      </li>
      <li>
        <MoviesCard
          imageUrl={moviesData[2].imageUrl}
          title={moviesData[2].title}
          duration={moviesData[2].duration}
          isLiked={moviesData[2].isLiked}
          onLikeClick={moviesData[2].onLikeClick}
        />
      </li>
      <li>
        <MoviesCard
          imageUrl={moviesData[3].imageUrl}
          title={moviesData[3].title}
          duration={moviesData[3].duration}
          isLiked={moviesData[3].isLiked}
          onLikeClick={moviesData[3].onLikeClick}
        />
      </li>
      <li>
        <MoviesCard
          imageUrl={moviesData[4].imageUrl}
          title={moviesData[4].title}
          duration={moviesData[4].duration}
          isLiked={moviesData[4].isLiked}
          onLikeClick={moviesData[4].onLikeClick}
        />
      </li>
      <li>
        <MoviesCard
          imageUrl={moviesData[5].imageUrl}
          title={moviesData[5].title}
          duration={moviesData[5].duration}
          isLiked={moviesData[5].isLiked}
          onLikeClick={moviesData[5].onLikeClick}
        />
      </li>
      <li>
        <MoviesCard
          imageUrl={moviesData[6].imageUrl}
          title={moviesData[6].title}
          duration={moviesData[6].duration}
          isLiked={moviesData[6].isLiked}
          onLikeClick={moviesData[6].onLikeClick}
        />
      </li>
      <li>
        <MoviesCard
          imageUrl={moviesData[7].imageUrl}
          title={moviesData[7].title}
          duration={moviesData[7].duration}
          isLiked={moviesData[7].isLiked}
          onLikeClick={moviesData[7].onLikeClick}
        />
      </li>
      <li>
        <MoviesCard
          imageUrl={moviesData[8].imageUrl}
          title={moviesData[8].title}
          duration={moviesData[8].duration}
          isLiked={moviesData[8].isLiked}
          onLikeClick={moviesData[8].onLikeClick}
        />
      </li>
      <li>
        <MoviesCard
          imageUrl={moviesData[9].imageUrl}
          title={moviesData[9].title}
          duration={moviesData[9].duration}
          isLiked={moviesData[9].isLiked}
          onLikeClick={moviesData[9].onLikeClick}
        />
      </li>
      <li>
        <MoviesCard
          imageUrl={moviesData[10].imageUrl}
          title={moviesData[10].title}
          duration={moviesData[10].duration}
          isLiked={moviesData[10].isLiked}
          onLikeClick={moviesData[10].onLikeClick}
        />
      </li>
      <li>
        <MoviesCard
          imageUrl={moviesData[11].imageUrl}
          title={moviesData[11].title}
          duration={moviesData[11].duration}
          isLiked={moviesData[11].isLiked}
          onLikeClick={moviesData[11].onLikeClick}
        />
      </li>
    </ul>
  );
}

export default MoviesCardList;
