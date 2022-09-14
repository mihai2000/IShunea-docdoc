import React, {Component} from 'react';
import logo from '../../../assets/Icon.png';
import {useEffect} from "react";
import {Widget, addResponseMessage, addLinkSnippet, addUserMessage, setQuickButtons} from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

const buttons = [{label: 'first', value: '1'}, {label: 'second', value: '2'}];
export class PopupChatReact extends Component {
    componentDidMount() {
        addResponseMessage('Welcome to this awesome chat!');
        setQuickButtons(buttons);
    }

    handleNewUserMessage = newMessage => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
    };

    handleQuickButtonClicked = data => {
        console.log(data);
        setQuickButtons(buttons.filter(button => button.value !== data));
    };

    render() {
        return (
            <div className="App">
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    handleQuickButtonClicked={this.handleQuickButtonClicked}
                    // profileAvatar={'text'}
                    title="Polls"
                    subtitle="Polls Demo"
                />
            </div>
        );
    }
}
function PopupApp() {
    useEffect(() => {
        addResponseMessage('Welcome to this **awesome** chat!');
    }, []);

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
    };

    return (
        <div className="App">
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                profileAvatar={logo}
                title="My new awesome title"
                subtitle="And my cool subtitle"
            />
        </div>
    );
}
export default PopupApp;
