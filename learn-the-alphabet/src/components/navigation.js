import * as constants from './constants';

function Navigation() {
    return (
        <nav>
            <div className="nav-wrapper blue darken-4">
                <a href="#" className="brand-logo center">{constants.HEADER_LABEL}</a>
                {/* <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul> */}
            </div>
        </nav>
    );
}

export default Navigation;