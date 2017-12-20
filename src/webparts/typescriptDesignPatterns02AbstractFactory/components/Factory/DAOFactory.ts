import CustomerDAO from "./ICustomerDAO";
import SharepointListDAOFactory from "./SharepointListDAOFactory";
import JsonDAOFactory from "./JsonDAOFactory";
import {Utils} from "./DatasourcesEnum";


export default abstract class DAOFactory{

    public static SHAREPOINTLIST: number = 1;
    public static REMOTEJSON : number = 2;

    public abstract getCustomerDAO(): CustomerDAO;

    public  static getDAOFactory(whichFactory: Utils.DataSources): DAOFactory {   
        switch (whichFactory) {
          case Utils.DataSources.SharepointList: 
            return new SharepointListDAOFactory();
          case Utils.DataSources.JsonData: 
            return new JsonDAOFactory();      
          default  : 
            return null;
        }
      }
}
