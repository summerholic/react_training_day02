import React, {Component} from 'react' 
import { Table } from 'semantic-ui-react';

class UserList extends Component {
    render() {
        const {users} = this.props;
        const {onUserSelect} = this.props;
        
        return(
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        Array.isArray(users) && users.length ? 
                            users.map((user, idx) => {
                                return (
                                <Table.Row key={idx} onClick={() => onUserSelect(idx)}>
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>{user.phone}</Table.Cell>
                                    <Table.Cell>{user.address}</Table.Cell>
                                </Table.Row>
                                )
                            })
                        :
                        <Table.Row>
                            <Table.Cell>Empty</Table.Cell>
                        </Table.Row>
                    }
                </Table.Body>
            </Table>
        )
    }
}

export default UserList;