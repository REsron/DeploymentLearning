({
  init: function(cmp,event) {
    var items = [];
    for (var i = 0; i < 15; i++) {
      var item = {
        label: "Option " + i,
        value: "opt" + i
      };
      items.push(item);
    }
    cmp.set("v.options", items);
      var rlist = [];
      var nlist = [];
    var result;
    var action = cmp.get("c.hellovalues");
    action.setCallback(this, function(response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        console.log("From server: " + response.getReturnValue());
          cmp.set("v.values",response.getReturnValue());
        var result = response.getReturnValue();
        nlist = rlist.concat(result);
          rlist.push(nlist);
          console.log("The Nlist is"+nlist);
          cmp.set("v.options", result);
          cmp.set("v.values",result);
      } else if (state === "INCOMPLETE") {
        // do something
      } else if (state === "ERROR") {
        var errors = response.getError();
        if (errors) {
          if (errors[0] && errors[0].message) {
            // log the error passed in to AuraHandledException
            console.log("Error message: " + errors[0].message);
          }
        } else {
          console.log("Unknown error");
        }
      }
    });

    $A.enqueueAction(action);
      //cmp.set("v.values",rlist);
      //console.log(v.testlist);
     /* result.forEach((res) => {
          console.log(res);
          rlist.push(res);          
}); */
          //console.log(rlist);
      //cmp.set("v.testlist",result);
      //console.log(rlist);
     // var glist = ["hello","challo"];
      //["opt10", "opt5", "opt7"]


    //cmp.set("v.values",glist);
     console.log(JSON.stringify(cmp.get("v.values")) == JSON.stringify(rlist)); 
      
  },

  handleChange: function(cmp, event) {
    // This will contain an array of the "value" attribute of the selected options
    var selectedOptionValue = event.getParam("value");
    alert(
      "Option selected with value: '" + selectedOptionValue.toString() + "'"
    );
  }
});