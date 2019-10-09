import React from "react";
import {
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import ListAltIcon from "@material-ui/icons/ListAlt";

export default ({ toggleDrawer }) => (
    <div
        role="presentation"
        style={{ width: 250 }}
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
    >
        <List>
            {["My notes", "Create note", "Vies my notes", "Manage notes"].map(
                (text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? (
                                <AllInboxIcon />
                            ) : (
                                <ListAltIcon />
                            )}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )
            )}
        </List>
        <Divider />
        <List>
            {["All users"].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                        {index % 2 === 0 ? <AllInboxIcon /> : <ListAltIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </div>
);
