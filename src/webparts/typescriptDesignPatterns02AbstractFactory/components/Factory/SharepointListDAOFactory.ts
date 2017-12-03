import DAOFactory from "./DAOFactory";
import CustomerDAO from "./CustomerDAO";

export default class SharepointListDAOFactory extends DAOFactory{
    
    getCustomerDAO(): CustomerDAO{
        return new CustomerDAO();
    }
}