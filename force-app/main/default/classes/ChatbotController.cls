public class ChatbotController {
    @AuraEnabled(cacheable=true)
    public static Map<String,String> getObj(){
        Map<String,String> objectMap = new Map<String,String>();
        for(Schema.SObjectType objTyp : Schema.getGlobalDescribe().Values()){
           String name = objTyp.getDescribe().getName();
           String label = objTyp.getDescribe().getLabel();
           if(!name.containsignorecase('history') && !name.containsignorecase('tag') &&
                !name.containsignorecase('share') && !name.containsignorecase('feed') && 
               	!name.containsignorecase('group') && !name.containsignorecase('public') &&
                !objTyp.getDescribe().isCustomSetting() && objTyp.getDescribe().isCreateable() &&
                objTyp.getDescribe().getRecordTypeInfos().size() > 0){      
                objectMap.put(name,label);
           }
        }
		System.debug(objectMap);
        if(objectMap != null && objectMap.size() > 0){
             return objectMap;
            
        }else{
            return null;
        }
    }
    @AuraEnabled(cacheable=true)
    public static String CreateField(String Label, String ApiName, String SobjName, String FieldType ){
        try{
            MetadataService.MetadataPort service = new MetadataService.MetadataPort();  
            service.SessionHeader = new MetadataService.SessionHeader_element();
            service.SessionHeader.sessionId = UserInfo.getSessionId();
            system.debug('session id:'+UserInfo.getSessionId());
            System.debug(UserInfo.getOrganizationId()+''+UserInfo.getSessionId().SubString(15));
            MetadataService.CustomField customField = new MetadataService.CustomField();
            customField.fullName = SobjName+'.'+ApiName;
            customField.label = Label ;
            customField.type_x = FieldType ;
            customField.length = 255;
            //customField.visibleLines = 3;
            List<MetadataService.SaveResult> results = service.createMetadata(new MetadataService.Metadata[] { customField });
            MetadataService.handleSaveResults(results[0]);
            System.debug('Handled Results are '+results[0]);
            if(results[0].success == true){
                System.debug('Success is True');
                return 'Success';
            }else{
                return 'SomeException';
            }
            
        }
        catch(exception e){
            //return e;
            System.debug('Exception Occurs : '+e);
            
            System.debug('Exception Message : '+e.getMessage());
            if(e.getMessage().contains('DUPLICATE_DEVELOPER_NAME')){
                System.debug('Field is Already Available');
                return 'DUPLICATE_DEVELOPER_NAME';
            }else{
                return null;
            }
            
        }      
        
    }
    /*
    @AuraEnabled(cacheable=true)
    public static List<SObjectDescriptor> getSObjects() {
        List<SObjectDescriptor> sObjects = new List<SObjectDescriptor>();
        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        for (Schema.SObjectType sobjectType : gd.values()) {
            if (sobjectType.getDescribe().isQueryable()) {
            sObjects.add(sobjectType.getDescribe());
            }
        }
    return sObjects;
   }
}
*/

}