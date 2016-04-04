function checkCashRegister(price, cash, cid) {
      var change = [],
          moneyBack = (cash - price) * 100,
          cents,
          units, 
          unitsBack,
          index;
      function giveChange(index, element){
        units = Math.floor(cents / index);//amount of units of each kind- total
        unitsBack = Math.floor(moneyBack / index);//amount of units of each kind- change
        temp = [];//array used 
        if(unitsBack > 0) {
           temp[0] = element;
           if (unitsBack > units) {
              temp[1] = (((units * index) / 100).toFixed(2)/1.00);
              moneyBack = moneyBack - (units * index);
           }else if(unitsBack <= units){
              temp[1] = (((unitsBack * index) / 100).toFixed(2)/1.00);
              moneyBack = moneyBack - (unitsBack * index);
           }
         }
        if(temp.length > 0)change.push(temp);
      }
      for(var i = 0, sum = 0, index1 = cid.length; i < index1; i++){
        sum += Math.ceil(cid[i][1] * 100) ;
      }
  
      
      if (sum === moneyBack) return "Closed";
      cid.reverse();
      
      for (var j = 0, k = cid.length ; j < k ; j++) { 
            cid[j][1] = cid[j][1].toFixed(2);
            cents = Math.ceil(cid[j][1] * 100);
            switch (cid[j][0]){
              case "ONE HUNDRED":
                index = 10000;
                giveChange(index, cid[j][0]);
                break;
              case "TWENTY":
                index = 2000;
                giveChange(index, cid[j][0]);
                break;
              case "TEN":
                index = 1000;
                giveChange(index, cid[j][0]);
                break;
              case "FIVE":
                index = 500;
                giveChange(index, cid[j][0]);
                break;
              case "ONE":
                index = 100;
                giveChange(index, cid[j][0]);
                break;
              case "QUARTER":
                index = 25;
                giveChange(index, cid[j][0]);
                break;
              case "DIME":
                index = 10;
                giveChange(index, cid[j][0]);
                break;
              case "NICKEL":
                index = 5;
                giveChange(index, cid[j][0]);
                break;
              case "PENNY":
                index = 1;
                giveChange(index, cid[j][0]);
                break;
              default:
            }
          }
      if (moneyBack > 0)return "Insufficient Funds";
      return change;
}; 
