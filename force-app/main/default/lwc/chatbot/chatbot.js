import { LightningElement, track, wire } from 'lwc';
import obj from '@salesforce/apex/ChatbotController.getObj';
//import getSObjects from '@salesforce/apex/ChatbotController.getSObjects';
export default class Chatbot extends LightningElement {
    //Variables for templates
    //Root Template
    rootemplate = true;
    //Field Creator Template
    createfield = false;


    //Varaiabel Used to Store All Sobjects Data and Api Name
    sdata;
        
   @wire (obj) 
   sobjdata({data,Error}){
       if(data){
           //console.log('str ',data);
           this.sdata = data;
       }
   }

    //List
    //List1 -> List of Field Types of SObjects
    fieldtypes = ['Address' ,'AutoNumber', 'Lookup','MasterDetail','MetadataRelationship','Checkbox','Currency' ,'Date' , 'DateTime', 'Email', 'EncryptedText',
     'ExternalLookup','IndirectLookup', 'Number', 'Percent', 'Phone', 'Picklist', 'MultiselectPicklist', 'Summary', 'Text', 'TextArea', 'LongTextArea', 'Url',
      'Hierarchy', 'File', 'Html', 'Location', 'Time'];

    //Beginning of Methods
    //Method-1 : Single Field Creator Function - Referenced in Root Template 'Create Field'  Button
    fieldcreator(event){
        this.createfield = true;
        this.rootemplate = false;
        //console.log('The Sobjects are'+sobjdata);
    }

    //Method-2 return the combo box options of Field Types
    get options() {
        return [
            { label: 'Address', value: 'Address' }, { label: 'Lookup', value: 'Lookup' },
            { label: 'MasterDetail', value: 'MasterDetail' }, { label: 'MetadataRelationship', value: 'MetadataRelationship' },
            { label: 'Checkbox', value: 'Checkbox' }, { label: 'Currency', value: 'Currency' }, { label: 'AutoNumber', value: 'AutoNumber' },
            { label: 'Date', value: 'Date' }, { label: 'DateTime', value: 'DateTime' }, { label: 'Email', value: 'Email' },
            { label: 'EncryptedText', value: 'EncryptedText' }, { label: 'ExternalLookup', value: 'ExternalLookup' }, 
            { label: 'IndirectLookup', value: 'IndirectLookup' }, { label: 'Number', value: 'Number' },{ label: 'Percent', value: 'Percent' },
            { label: 'Phone', value: 'Phone' }, { label: 'Picklist', value: 'Picklist' }, { label: 'MultiselectPicklist', value: 'MultiselectPicklist' },
            { label: 'Summary', value: 'Summary' },{ label: 'Text', value: 'Text' }, { label: 'TextArea', value: 'TextArea' },
            { label: 'LongTextArea', value: 'LongTextArea' }, { label: 'Url', value: 'Url' },
            { label: 'Hierarchy', value: 'Hierarchy' },{ label: 'File', value: 'File' }, { label: 'Html', value: 'Html' },
            { label: 'Location', value: 'Location' }, { label: 'Time', value: 'Time' }
         ];
    } 

    //Conver
    get picklistOptions() {
        let options = [];
        if (this.sdata) {
            for (let key in this.sdata) {
                options.push({ label: key, value: key });
                    }
            }
           // console.log(`The sdata contains${this.sdata}`)
        return options;
    }    
    
    //Data of The Field Creator
    @track fieldobj = {
        label : '',
        apiname : '',
        fieldtype :'',
        sobjtype : '' 
    }; 
    //Input handler Function Which handles every Input fields
    handleinputchange(event){
        //console.log('Hellio from fuction');
        let field = event.target.name.toLowerCase();
        if(field.includes('label')){
            this.fieldobj.label = event.target.value; 
            if(this.fieldobj.label != null){
                var array = this.fieldobj.label.split(" ");
                console.log('input blur function starts ...');
                if (array.length > 1){
                    this.fieldobj.apiname = array.join('_')+'__c';
                    //console.log('Double Word Label : '+this.fieldobj.apiname);
                    //this.sobjdata();
                }
                else if(array.length == 1){
                    this.fieldobj.apiname = this.fieldobj.label+'__c';
                    //console.log('Single Word Label : '+this.fieldobj.apiname);
                } 
            }            
        }
       else if(field.includes('apiname')){
            array = event.target.value.split(" ");
            this.fieldobj.apiname = array.join('_')+'__c';
        }
        else if(field.includes('fieldtype')){
            this.fieldobj.fieldtype = event.detail.value;            
        }
        else if(field.includes('sobjtype')){
            this.fieldobj.sobjtype = event.detail.value;
        }
        else{
            console.log(`The data is ${event.target.value}`);
        } 
    }
    Submitfield(){
        console.log(`The Label is ${this.fieldobj.label} and the api name is ${this.fieldobj.apiname} and the selected fieldtype is ${this.fieldobj.fieldtype} and the selected sobject is ${this.fieldobj.sobjtype}`);
        
        LightningAlert.open({
            message: 'Field Created Successfully',
            theme: 'success', // a red theme intended for error states
            label: 'Success!', // this is the header text
        });
        //Alert has been closed

    }
}