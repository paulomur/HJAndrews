import React from 'react';

import version from '../../version';

import StandardUserInterface from 'terriajs/lib/ReactViews/StandardUserInterface/StandardUserInterface.jsx';
import MenuItem from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem';
import RelatedMaps from './RelatedMaps';
//import { Menu } from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups';
import { Menu, Nav } from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups';
import MeasureTool from 'terriajs/lib/ReactViews/Map/Navigation/MeasureTool';  //add a measurement icon


import './global.scss';

export default function UserInterface(props) {
    return (
        <StandardUserInterface {... props} version={version}>
            <Menu>
                <RelatedMaps viewState={props.viewState} />


                <MenuItem caption="About" href="http://cdn.rawgit.com/tycharris/HJA_Portal_About/dd0adbad/about_edit.html" key="About-link"/>


            </Menu>

            <Nav>
                <MeasureTool terria={props.viewState.terria} key="measure-tool"/>
            </Nav>

        </StandardUserInterface>
    );
}