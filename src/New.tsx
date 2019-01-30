import * as React from 'react';
import NegaForm from './Form';
import { History } from 'history';

interface IProps {
  history: History;
  match: any;
}

export default class NegaNew extends React.Component <IProps> {
  public render() {
    return (
      <div>
        <h2>New Nega</h2>
        <NegaForm history={this.props.history} match={this.props.match} />
      </div>
    );
  }
}