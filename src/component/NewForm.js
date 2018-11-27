import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';
import _ from 'lodash';

class NewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : {
                name : '',
                phone : '',
                address : ''
            }
        }
    }

    onSetUserProp(name, value) {
        this.setState({
            user : {
                ...this.state.user,
                [name] : value
            }
        })
    }

    onClearUser() {
        this.props.onDeselectUser();
        this.setState({
            user : {
                name : '',
                phone : '',
                address : ''
            }
        })
    }


    componentDidUpdate(prevProp) {
        const {selectedUser} = this.props;
        
        if( !_.isEqual( prevProp.selectedUser, selectedUser ) ) {
            this.setState({
                user : selectedUser
            });
        }
    }

    render() {
        const {user} = this.state;
        const {onAddUser} = this.props;
        const {isRemoveBtnVisible} = this.props;
        const {onRemoveUser} = this.props;
        return(

            <Form>
                <Form.Group widths='equal'>
                    <Form.Input 
                        label='Name' 
                        placeholder='Name' 
                        value={user && user.name} 
                        onChange = {(e) => this.onSetUserProp('name', e.target.value)}
                        />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input 
                        label='Phone' 
                        placeholder='Phone' 
                        value={user && user.phone} 
                        onChange = {(e) => this.onSetUserProp('phone', e.target.value)}
                        />
                </Form.Group>    

                <Form.Group widths='equal'>
                    <Form.Input 
                        label='Address' 
                        placeholder='Adress' 
                        value={user && user.address} 
                        onChange = {(e) => this.onSetUserProp('address', e.target.value)}
                        />
                </Form.Group>

                <Button primary onClick={() => onAddUser(user)}>Save</Button>
                <Button secondary onClick={() => this.onClearUser()}>Clear</Button>
                {isRemoveBtnVisible ? <Button secondary onClick={() => onRemoveUser()}>Remove</Button> : '' }
            </Form>
        );
    }
}

export default NewForm;