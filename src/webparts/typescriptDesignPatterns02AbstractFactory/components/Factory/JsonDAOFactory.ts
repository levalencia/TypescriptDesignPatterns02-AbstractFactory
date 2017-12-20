import DAOFactory from "./DAOFactory";
import ICustomerDAO from "./ICustomerDAO";
import JsonCustomerDAO from "./JsonCustomerDAO";


export default class JsonDAOFactory extends DAOFactory{
    getCustomerDAO(): ICustomerDAO{
        return new JsonCustomerDAO();
    }
}