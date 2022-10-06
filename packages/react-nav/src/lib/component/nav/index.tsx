import './stylesheet/nav-group.component.css';
import './stylesheet/nav-list.component.css';
import './stylesheet/nav-panel.component.css';
import './stylesheet/nav-panel/nav-panel-left.component.css';
import './stylesheet/nav-panel/nav-panel-right.component.css';
import './stylesheet/nav-panels.component.css';
import './stylesheet/nav-panels/nav-panels-arrow.component.css';
import './stylesheet/nav.component.css';
import './stylesheet/nav.component.css';

import { Group } from './nav-group.component';
import { List } from './nav-list.component';
import { Panel } from './nav-panel.component';
import { Panels } from './nav-panels.component';
import { Nav as NavComponent } from './nav.component';

const Nav = Object.assign(NavComponent, { Group, List, Panel, Panels });

export default Nav;
