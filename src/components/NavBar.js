import React, { Fragment } from "react"
import { NavLink } from "react-router-dom"

export const NavBar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Note app
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    exact
                    to={'/'}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav-link"
                    to={'/about'}
                >
                    Info
                </NavLink>
            </li>
        </ul>
    </nav>
)