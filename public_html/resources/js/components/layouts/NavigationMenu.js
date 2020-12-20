import React, { Component } from 'react';

class NavigationMenu extends Component {
    render() {
        return(
            <nav className="bg-blue-900 shadow-md z-40 fixed w-full">
                <div className="mx-auto px-4">
                    <div className="flex justify-between text-white h-16">
                        <div className="flex pl-10">
                            <div className="flex-shrink-0 flex items-center">
                                <a href="/#" className="antialiased text-3xl no-underline">
                                    <span className="font-bold font-logo">LOGO</span>
                                    <span className="font-thin font-logo">Management</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationMenu;
