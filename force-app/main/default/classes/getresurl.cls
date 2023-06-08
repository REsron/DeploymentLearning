public class getresurl {
    public static String GetResourceURL(String resourceName) {
        List<StaticResource> resourceList = [SELECT Name, NamespacePrefix, SystemModStamp FROM StaticResource WHERE Name = :resourceName
];
                    
if (resourceList.size() == 1) {
   String namespace = resourceList[0].NamespacePrefix;
   return '/resource/' 
      + resourceList[0].SystemModStamp.getTime() + '/' 
      + (namespace != null && namespace != '' ? namespace + '__' : '') 
      + resourceName; 
} else return '';

}

}