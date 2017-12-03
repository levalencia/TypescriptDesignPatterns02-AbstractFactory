import CustomerDAO from "./CustomerDAO";
import Customer from "./Customer";

export default class JsonCustomerDAO implements CustomerDAO{
    
    public insertCustomer(): number{
        return 1;
    }

    public deleteCustomer(): boolean{
        return true;
    }

    public findCustomer(): Customer{
        return new Customer();
    }

    public updateCustomer(): boolean{
        return true;
    }

    public listCustomers(): Customer[]{
        let c1= new Customer();
        let c2= new Customer();
        let list: Array<Customer> = [c1, c2 ];
        return list;
    } 
}