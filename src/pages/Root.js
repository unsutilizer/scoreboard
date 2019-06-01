import React from 'react';
import {Home} from "./Home";
import {Heros} from "./Heros";
import {Scoreboard} from "./Scoreboard";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";

export class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <p>공통메뉴</p>
        {/*라우팅 영역*/}
        <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/heros' component={Heros}></Route>
        <Route path='/scoreboard' component={Scoreboard}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
