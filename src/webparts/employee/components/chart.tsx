import * as React from 'react';
import {IChartProps} from './IChartProps';
import {Bar,Line,HorizontalBar,Pie} from 'react-chartjs-2';
export default class Chart extends React.Component<IChartProps>
{
    public render():JSX.Element{

        var chartType=this.props.charttype;
        if(chartType === "Line") {
          return (
            <div>
              <Line data={ this.barChartData()}/>
            </div>
          );
        }
        else if(chartType === "Bar")  {
          return (
            <div>
              <Bar data={ this.barChartData()}/>
            </div>
          );
        }
    
        else if(chartType === "Pie")  {
            return (
              <div>
                <Pie data={ this.barChartData()}/>
              </div>
            );
          }
    
          else if(chartType === "Horizontalbar")  {
            return (
              <div>
                <HorizontalBar data={ this.barChartData()}/>
              </div>
            );
          }
            else {
                return (
                  <div>
                    <HorizontalBar data={ this.barChartData()}/>
                  </div>
                );
          }
        }

    public barChartData():object
    {
        const data={
            labels:['Oct','Nov','Dec'],
            datasets:[
                {
                    label:'Employee1',
                    data:[5,10,15],
                    backgroundColor:'rgb(63,191,191)',
                  },
                  {
                    label:'Employee2',
                    data:[15,20,25],
                    backgroundColor:'rgb(191,63,191)',
                  },
                  {
                    label:'Employee3',
                    data:[12,20,27],
                    backgroundColor:'rgb(63,63,191)',
                  }
            ]

        }
        return data;

    }

}