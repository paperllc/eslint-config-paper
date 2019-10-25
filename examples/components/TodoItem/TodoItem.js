import React, {Component} from 'react'
import {observer} from 'mobx-react'
import './TodoItem.scss'

// ----------------------------------------------------

const ENTER = 13,
      ESC   = 27

// ----------------------------------------------------

@observer
export default class ListItem extends Component {
    constructor(){
        super()
    }

    componentDidUpdate(){
        // Code here
    }

    // ----------------------------------------------------

    render(){
        return (
            <li>
                <div className="todo-item">
                    ...
                </div>
            </li>
        )
    }
}
