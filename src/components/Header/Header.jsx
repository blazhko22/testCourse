import React from 'react';
import CurrentCourse from 'components/CurrentCourse';

function Header() {
    return (
        <header>
            <section>
                <div>
                    <h1>Конвертер Валют</h1>
                    <CurrentCourse/>
                </div>
            </section>
        </header>
    );
}

export default Header;