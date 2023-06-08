public class JsonTest {
    
    public class Customer {
        public String name;
        public String email;
        public Long phone;
    }
    
    public static void CreateCustomerdata(String Name, String Email, String Phone){
        
        Customer customer = new Customer();
        //customer.name = 'John Doe';
        //customer.email = 'johndoe@email.com';
        //customer.phone = 5555555555;
        customer.name = Name;
        customer.email = Email;
        customer.phone = Long.valueOf(Phone);

    }

}