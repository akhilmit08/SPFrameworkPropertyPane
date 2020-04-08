import * as React from 'react';
import styles from './Employee.module.scss';
import { IEmployeeProps } from './IEmployeeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import  Welcome  from './Welcome';
import Chart from './Chart';

export default class Employee extends React.Component<IEmployeeProps, {}> {
  public render(): React.ReactElement<IEmployeeProps> {
    return (
      <div className={ styles.employee }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <span className={ styles.title }>Employee of the Month</span>
              <p className={ styles.subTitle }>Congrats for the Employee of the month.</p>

              <img className={styles.imgProfile} src={escape(this.props.empimageurl)}/><br/>
              <p className={ styles.empname }>{escape(this.props.empname)}</p>
              <p className={ styles.description }>{escape(this.props.empbio)}</p>
              <p className={ styles.description }>{escape(this.props.empdepartment)} {' Department'}</p>
              <p className={ styles.description }>{escape(this.props.empexperience.toString())} {' years of experience'}</p>
             <p className={ styles.description }><Welcome message={this.props.empmessage}/></p>
              {this.props.checkbox ?
              <Welcome message={this.props.empmessage}/>:null}
              Gender: {this.props.gender}
              <Chart charttype={this.props.charttype}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
