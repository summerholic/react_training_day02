import React, { Component } from 'react';
import NewForm from './component/NewForm';
import { Container, Grid, Segment } from 'semantic-ui-react';
import UserList from './component/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [],
      selectedIdx : '',
      selectedUser : '',
      isRemoveBtnVisible : false
    }
  }

  onAddUser(newUser) {
    if( this.state.selectedUser &&  this.state.selectedUser.name !== '' ) {
      this.state.users[this.state.selectedIdx] = newUser;
      this.setState({
        users : this.state.users
      })
    } else {
      this.setState({
        users : [...this.state.users, newUser]
      })
    }
  }

  onUserSelect(selectedIdx) {
    this.setState({
      selectedIdx : selectedIdx,
      selectedUser : this.state.users[selectedIdx],
      isRemoveBtnVisible : true
    })
  } 

  onRemoveUser() {
    let removedUser = this.state.users[this.state.selectedIdx];
    this.setState(
      {
        users: this.state.users.filter(
          function(user) { 
            return user !==  removedUser
          }
        ),
        selectedUser: {
            name : '',
            phone : '',
            address : ''
        }
      }
    );
  }

  onDeselectUser() {
    this.setState({
      selectedUser: {
        name : '',
        phone : '',
        address : ''
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Container style={{marginTop : 50}}>
          <Grid centered columns={2}>
            <Grid.Column>
              <Segment>
                <NewForm 
                onAddUser= {this.onAddUser.bind(this)}
                selectedUser={this.state.selectedUser}
                isRemoveBtnVisible={this.state.isRemoveBtnVisible}
                onRemoveUser= {this.onRemoveUser.bind(this)}
                onDeselectUser= {this.onDeselectUser.bind(this)}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <UserList users={this.state.users} 
                onUserSelect={this.onUserSelect.bind(this)}
                />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>  
      </div>
    );
  }
}

export default App;
