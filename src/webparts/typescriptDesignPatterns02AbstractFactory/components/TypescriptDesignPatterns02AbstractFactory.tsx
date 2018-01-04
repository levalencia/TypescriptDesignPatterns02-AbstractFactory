import * as React from "react";
import { ITypescriptDesignPatterns02AbstractFactoryProps } from "./ITypescriptDesignPatterns02AbstractFactoryProps";
import { ITypescriptDesignPatterns02AbstractFactoryState } from "./ITypescriptDesignPatterns02AbstractFactoryState";
import DAOFactory from "./Factory/DAOFactory";
import ICustomerDAO from "./Factory/ICustomerDAO";
import DataSources from "./Factory/DatasourcesEnum";

export default class TypescriptDesignPatterns02AbstractFactory extends
  React.Component<ITypescriptDesignPatterns02AbstractFactoryProps, ITypescriptDesignPatterns02AbstractFactoryState> {
    private customerDao: ICustomerDAO;

    constructor(props: ITypescriptDesignPatterns02AbstractFactoryProps, state: ITypescriptDesignPatterns02AbstractFactoryState) {
      super(props);
      this.setInitialState();
      this.setDaos(props.datasource);
    }

    public render(): React.ReactElement<ITypescriptDesignPatterns02AbstractFactoryProps> {
      this.state = {
          items: this.customerDao.listCustomers(),
      };

      return null;
    }

    public setInitialState(): void {
      this.state = {
        items: []
      };
    }

    private setDaos(datasource): void {
      const data: any = datasource === "Sharepoint" ? DataSources.SharepointList : DataSources.JsonData;
      this.customerDao = DAOFactory.getDAOFactory(data).getCustomerDAO();
    }
}
