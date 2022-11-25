import React from 'react';
import HeaderCourse from 'components/HeaderCourse';
import s from './Header.module.scss';

function Header() {
    return (
        <header className={s.header}>
            <div className={s.block}>
                <h1 className={s.title}>Конвертер валют в Україні</h1>
                <HeaderCourse />
            </div>
        </header>
    );
}

export default Header;