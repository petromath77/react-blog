import React from 'react';
import styles from './Music.module.scss';
import content from '../../content';

const MusicItem = props => {
  const { item, title } = props;

  return (
    <li className={styles.album}>
      <div className={styles.album_head}>
        <span className="subhead">Album</span>
        <h3 className={styles.album_title}>{title}</h3>
      </div>
      <ul>
        {Object.values(item)[0].map((subitem, index) => (
          <li className={styles.song} key={index}>
            <span className={styles.song_title}>{subitem.song}</span>
            <span className="subhead">{title}</span>
            <span className={styles.duration}>{subitem.duration}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

const MusicList = () => {
  return (
    <ul className={styles.albums}>
      {content.albums.map((item, index) => (
        <MusicItem item={item} title={Object.keys(item)[0]} key={index} />
      ))}
    </ul>
  );
};

const Music = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <h2 className="title">{content.musicHero[0]}</h2>
      <div className={`${styles.album_wrapper}`}>
        <img
          className={`${styles.img}`}
          src={content.musicHero[1]}
          alt="album"
        />
        <div className={`${styles.info}`}>
          <span className="subhead">{content.musicHero[2]}</span>
          <h3 className={`${styles.header}`}>{content.musicHero[3]}</h3>
          <p className={`${styles.desc}`}>{content.musicHero[4]}</p>
        </div>
      </div>
      <div>
        <MusicList />
      </div>
    </div>
  );
};

export default Music;
