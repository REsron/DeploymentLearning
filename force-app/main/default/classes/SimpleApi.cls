public class SimpleApi {
    public static void CurrencyConvert(String Karancy, String Tar_Currency, Decimal KarancyValue){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://open.er-api.com/v6/latest/'+Karancy);
        request.setMethod('GET');
        System.debug('Your Currency >>>>>>>'+Karancy);
        HttpResponse response = http.send(request);
        Object CRNCY;
        String returnValue;
        Decimal VCurrency;
       
        // If the request is successful, parse the JSON response
        if (response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            Map<String, Object> result = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            System.debug('>>>>>'+response.getBody());
            CRNCY = result.get('rates');
            System.debug(CRNCY);
            
        }
        String Target_Currency = Tar_Currency;
        if ( CRNCY != NULL  ) {
            Map<String, Object> result1 = (Map<String, Object>) JSON.deserializeUntyped(JSON.serialize(CRNCY));
            //returnValue =(String) result1.get('USD');
            VCurrency =(Decimal) result1.get(Target_Currency);
            //System.debug('>>>>>>'+returnValue);
            System.debug(Target_Currency+' >>>>>> '+VCurrency);
            Decimal Final_Currency = VCurrency*KarancyValue;
            
        }
    
    }

}