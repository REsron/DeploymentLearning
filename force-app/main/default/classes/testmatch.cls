public class testmatch {
    public static void tester(){
        String formulafield = '<a href="" target="_blank"></a>';
        String regex = '<a href="([a-zA-Z0-9]+)"';
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(formulafield);
        if (matcher.find()) {
            String idValue = matcher.group(1);
            System.debug('Extracted ID value: ' + idValue);
            //setWorkOrderIds.add(idValue);
        } else {
            System.debug('No match found');
        }
    }

}