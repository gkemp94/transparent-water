import React, { Component } from 'react';
import './App.css';

import api from './utils/api';
import { Page, List, ListItem, Toolbar, ToolbarButton, Icon } from 'react-onsenui';

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    api.getAlerts().then((data) => {
      debugger;
      this.setState({data: data});
    });
  }

  renderRow({ _id, properties  }) {
    return (
      <ListItem key={_id}>
        {properties.TITLE} - {properties.LOCATION}
      </ListItem>
    )
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Transparent Water</div>
        <div className='right'>
        <ToolbarButton>
          <Icon icon='ion-navicon, material:md-menu'></Icon>
        </ToolbarButton>
        </div>
      </Toolbar>
    )
  }

  render() {
    console.log(this.state.data.length)
    return (
      <Page renderToolbar={this.renderToolbar}>
        <List 
          dataSource={this.state.data}
          renderRow={this.renderRow}
          />
      </Page>
    );
  }
}

export default App;
