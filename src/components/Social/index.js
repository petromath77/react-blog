import React from 'react';
import uniqueId from 'uniqid';
import Icon from '../../elements/Icon/Icon';
import styles from './Social.module.scss';
import content from '../../content';

const Social = () => {
  return (
    <ul className={`${styles.wrapper}`}>
      {content.social.map(item => (
        <SocialItem item={item} key={uniqueId()} />
      ))}
    </ul>
  );
};

const SocialItem = props => {
  const { item } = props;
  const { icon, viewBox, path } = item;

  return (
    <li className={styles.item}>
      <a
        href={path}
        target="_blank"
        rel="noreferrer noopener"
        className={styles['item-icon']}
      >
        <Icon className={styles.svg} icon={icon} viewBox={viewBox} />
      </a>
    </li>
  );
};

export default Social;
