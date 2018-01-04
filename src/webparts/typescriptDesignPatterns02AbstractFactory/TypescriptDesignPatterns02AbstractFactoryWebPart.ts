import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneDropdown
} from "@microsoft/sp-webpart-base";

import * as strings from "typescriptDesignPatterns02AbstractFactoryStrings";
import TypescriptDesignPatterns02AbstractFactory from "./components/TypescriptDesignPatterns02AbstractFactory";
import { ITypescriptDesignPatterns02AbstractFactoryProps } from "./components/ITypescriptDesignPatterns02AbstractFactoryProps";
import { ITypescriptDesignPatterns02AbstractFactoryWebPartProps } from "./ITypescriptDesignPatterns02AbstractFactoryWebPartProps";

export default class TypescriptDesignPatterns02AbstractFactoryWebPart 
  extends BaseClientSideWebPart<ITypescriptDesignPatterns02AbstractFactoryWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITypescriptDesignPatterns02AbstractFactoryProps > = React.createElement(
      TypescriptDesignPatterns02AbstractFactory,
      {
        datasource: this.properties.datasource
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
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
                PropertyPaneDropdown("datasource", {
                  label: "DataSource",
                  options: [
                      { key: "1", text: "Sharepoint"},
                      { key: "2", text: "JSON" }
                    ],
                  selectedKey: "1",
                  })
              ]
            }
          ]
        }
      ]
    };
  }
}
