import React, { Component } from 'react';
import SearchBox from '../container/search_box';
import WheatherList from '../container/wheatherlist'

export default class App extends Component {
  render() {
    return (
      <div>

        <SearchBox/>
        <WheatherList />
      </div>
    );
  }
}
