import DAOFactory from "./DAOFactory";
import CustomerDAO from "./CustomerDAO";

export default class  extends DAOFactory{
    getCustomerDAO(): CustomerDAO{
        return new CustomerDAO();
    }
}