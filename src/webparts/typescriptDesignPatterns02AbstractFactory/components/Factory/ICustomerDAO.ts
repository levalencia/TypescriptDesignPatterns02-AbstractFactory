import Customer from "./Customer";

export default interface ICustomerDAO{
    insertCustomer(): number;
    deleteCustomer(): boolean;
    findCustomer(): Customer;
    updateCustomer(): boolean;
    listCustomers(): Customer[];
}
