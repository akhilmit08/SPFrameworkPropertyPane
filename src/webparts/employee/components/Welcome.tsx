import * as React from 'react';
import { IWelcomeProps } from './IWelcomeProps';
export default class Welcome extends React.Component<IWelcomeProps> {

    public render(): JSX.Element{
      return(
          <h1>{this.props.message}</h1>
      );
    }
}