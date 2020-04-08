import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider,
  PropertyPaneDropdown,
  PropertyPaneHorizontalRule,
  PropertyPaneButton,
  PropertyPaneButtonType,
  PropertyPaneCheckbox,
  PropertyPaneChoiceGroup,
  PropertyPaneLabel
} from '@microsoft/sp-webpart-base';

import * as strings from 'EmployeeWebPartStrings';
import Employee from './components/Employee';
import { IEmployeeProps } from './components/IEmployeeProps';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';

export interface IEmployeeWebPartProps {
  bio: string;
  name: string;
  department: string;
  imageurl: string;
  experience: number;
  message: string;
  checkbox:boolean;
  gender:string;
  color: string;
  charttype: string;
}

export default class EmployeeWebPart extends BaseClientSideWebPart<IEmployeeWebPartProps> {

  public render(): void {
    if (this.properties.department === '' || this.properties.department === undefined) {
      this.properties.department = 'Sales';
    }
    const element: React.ReactElement<IEmployeeProps > = React.createElement(
      Employee,
      {
        empbio: this.properties.bio,
        empname:this.properties.name,
        empdepartment:this.properties.department,
        empimageurl:this.properties.imageurl,
        empexperience:this.properties.experience,
        empmessage:this.properties.message,
        checkbox:this.properties.checkbox,
        gender:this.properties.gender,
        charttype:this.properties.charttype,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
  protected myFunctionClick():void{
    alert('Button Clickeds');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('bio', {
                  label: 'Employee Bio'
                }),
                PropertyPaneTextField('name', {
                  label: "Name"
                }),

                PropertyPaneTextField('imageurl', {
                  label: "Employee Photo URL"
                }),

                PropertyPaneDropdown('department', {
                  label: "Department",
                  options: [
                    { key: 'HR', text: 'HR' },
                    { key: 'Finance', text: 'Finance' },
                    { key: 'IT', text: 'IT' },
                    { key: 'Sales', text: 'Sales' }
                  ],
                  selectedKey: 'Sales'
                }),

                PropertyPaneSlider('experience', {
                  label: "Experience", min: 0, max: 20
                }),
                PropertyPaneTextField('message', {
                  label: 'Message'
                }),
                PropertyPaneLabel('',{
                  text:'Please enter your message'
                }),
                PropertyPaneHorizontalRule(),
                PropertyPaneButton('',{
                  text:'Click Here', 
                  buttonType:PropertyPaneButtonType.Normal,
                  onClick:this.myFunctionClick
                }),
                PropertyPaneCheckbox('checkbox',{
                  text:'Do you want to display message?',checked:true
                }),

                PropertyPaneChoiceGroup('gender',{
                  label:'Gender',
                  options:[
                    {key:'Male',text:'Male'},
                    {key:'FeMale',text:'FeMale'},
                    {key:'Not Specified',text:'Not Specified'},
                  ]

                }),
              ]
            }
          ]
        },
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('bio', {
                  label: 'Employee Bio'
                }),
                PropertyFieldColorPicker('color', {
                  label: 'Color',
                  selectedColor: this.properties.color,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  disabled: false,
                  isHidden: false,
                  alphaSliderHidden: false,
                  style: PropertyFieldColorPickerStyle.Full,
                  iconName: 'Precipitation',
                  key: 'colorFieldId'
                }),
                PropertyPaneDropdown('charttype', {
                  label: 'Chart Type',
                  options: [
                    { key: 'Line', text: 'Line' },
                    { key: 'Bar', text: 'Bar' },                   
                    { key: 'Horizontalbar', text: 'Horizontalbar' },
                    { key: 'Pie', text: 'Pie' }                    
                  ]
                }),
                
                
              ]
            }
          ]
        }
      ]
    };
  }
}
