public class returnPlistValues {
    @AuraEnabled
    public static list<String> hellovalues(){
        list<String> values = new list<String>{'A','B','c','d','e'};
            return values;
    }

}