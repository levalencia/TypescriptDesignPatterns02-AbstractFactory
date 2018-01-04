import DAOFactory from "./DAOFactory";
import ICustomerDAO from "./ICustomerDAO";
import JsonCustomerDAO from "./JsonCustomerDAO";


class JsonDAOFactory extends DAOFactory {
    getCustomerDAO(): ICustomerDAO{
        return new JsonCustomerDAO();
    }
}

export default JsonDAOFactory;