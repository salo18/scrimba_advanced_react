import React from 'react';
import classnames from "classnames"


export default function Badge({children, color = 'gray', pill = ''}) {
    const pillBool = pill ? 'pill' : '';

    const classes = classnames('badge', color, pillBool)

    console.log(classes)
    return (
        <div className={classes}>{children}</div>
    )
}