import CustomerDAO from "./CustomerDAO";
import SharepointListDAOFactory from "./SharepointListDAOFactory";
import JsonDAOFactory from "./JsonDAOFactory";


export default class DAOFactory{
    public static SHAREPOINTLIST: number = 1;
    public static REMOTEJSON : number = 2;

    public abstract getCustomerDAO(): CustomerDAO;

    public  getDAOFactory(whichFactory: number): DAOFactory {
   
      switch (whichFactory) {
        case 1: 
            return new SharepointListDAOFactory();
        case 2: 
            return new JsonDAOFactory();      
        default  : 
            return null;
      }
}
