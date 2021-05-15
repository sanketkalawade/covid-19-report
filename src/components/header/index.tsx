import React from 'react' 
import './style.less'
import logo from '../../shared-framework/images/logo.jpg'
const Header: React.FC<{}> = () => {
    return (
        <div className="header-parent">
           <div className="header-parent__header">
                <div className="header-parent__header__logo-container">
                    <img className="logo-styles" src={logo} alt="covid mask app-logo"/>
                </div>
                <h1 className="header-parent__header__pageName">COVID-19 Tracker</h1>
           </div>
        </div>
    )
}

export default Header
