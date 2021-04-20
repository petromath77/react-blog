import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import Hamburger from '../../elements/Hamburger';
import contentUnauth from '../../content';
import contentAuth from '../../contentAuth';

//Redux
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../actions/user';

const NavItem = props => {
  const { link, mobile } = props;
  const { name, href, logout } = link;
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.setItem('isLoggedIn', '');
    dispatch(setIsLoggedIn(false));
  }

  return (
    <li className={mobile ? styles.mobile__item : styles.item}>
      {logout ? (
        <NavLink exact
        key={name}
        to={href}
        onClick={ handleClick }
        className={mobile ? `${styles.mobile__link} ${styles.logout}` : `${styles.link} ${styles.logout}`} activeClassName={styles.active}
    >{ name }</NavLink>
      )
      : 
      (<NavLink exact
        key={name}
        to={href}
        className={mobile ? styles.mobile__link : styles.link} activeClassName={styles.active}
        >{ name }</NavLink>)
      }
    </li>
  );
};

const Nav = props => {
  const { mobile } = props;
  const [open, setOpen] = useState(false);
  const content = localStorage.getItem('isLoggedIn') ? contentAuth : contentUnauth;
  //const mobileMenu = document.getElementById('mobile-menu');

  const links = content.navItemLinks.map((link, index)  => {
    return (
      <NavItem
        mobile={mobile}
        link={link}
        key={index}
        onClick={() => setOpen(false)}
      />
    );
  });

  return (
    <nav
      className={`${!mobile ? styles.nav : ''} ${mobile ? styles.mobile : ''}`}
    >
      {mobile ? (
        <Hamburger onClick={() => setOpen(!open)} isActive={open} />
      ) : (
        <ul className={styles.list}>{links}</ul>
      )}
      <ul className={open ? `${styles.mobile__list} menu-mobile show` : `${styles.mobile__list} menu-mobile` }>{links}</ul>
    </nav>
  );
};

export default Nav;
