import React from "react";
import { withRouter } from "react-router-dom";
import {
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PeopleIcon from "@material-ui/icons/People";

const DrawerSideList = ({ toggleDrawer, history }) => (
    <div
        role="presentation"
        style={{ width: 250 }}
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
    >
        <List>
            {["My notes"].map((text, index) => (
                <ListItem
                    button
                    key={text}
                    onClick={() => history.push("/app/mynotes")}
                >
                    <ListItemIcon>
                        <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {["All users"].map((text, index) => (
                <ListItem
                    button
                    key={text}
                    onClick={() => history.push("/app/allusers")}
                >
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </div>
);

export default withRouter(DrawerSideList);
