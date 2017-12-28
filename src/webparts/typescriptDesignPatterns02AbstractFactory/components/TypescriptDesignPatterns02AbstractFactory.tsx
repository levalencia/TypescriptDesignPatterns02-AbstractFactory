import * as React from 'react';
import styles from './TypescriptDesignPatterns02AbstractFactory.module.scss';
import { ITypescriptDesignPatterns02AbstractFactoryProps } from './ITypescriptDesignPatterns02AbstractFactoryProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ITypescriptDesignPatterns02AbstractFactoryState } from './ITypescriptDesignPatterns02AbstractFactoryState';
import SharepointListDAOFactory from './Factory/SharepointListDAOFactory';
import DAOFactory from './Factory/DAOFactory';
import ICustomerDAO from './Factory/ICustomerDAO';
import DataSources from './Factory/DatasourcesEnum';
import Customer from './Factory/Customer';

export default class TypescriptDesignPatterns02AbstractFactory extends React.Component<ITypescriptDesignPatterns02AbstractFactoryProps, ITypescriptDesignPatterns02AbstractFactoryState> {
  constructor(props: ITypescriptDesignPatterns02AbstractFactoryProps, state: ITypescriptDesignPatterns02AbstractFactoryState) {
    super(props);
    this.setInitialState();
  }

  public render(): React.ReactElement<ITypescriptDesignPatterns02AbstractFactoryProps> {
    switch(this.props.datasource) {
      case "Sharepoint":
        let sharepointlistdaofactory: SharepointListDAOFactory =   DAOFactory.getDAOFactory(DataSources.SharepointList);
        let customerSharepointDAO: ICustomerDAO = sharepointlistdaofactory.getCustomerDAO();
        this.state = {
          items: customerSharepointDAO.listCustomers()
        };
        break;
      case "JSON":
        let jsondaofactory: SharepointListDAOFactory =   DAOFactory.getDAOFactory(DataSources.JsonData);
        let customerJsonDAO: ICustomerDAO = jsondaofactory.getCustomerDAO();
        this.state = {
          items: customerJsonDAO.listCustomers()
        };
        break;
    }
    return null;
  }

  public setInitialState(): void {
    this.state = {
      items: []
    };
  }



}
