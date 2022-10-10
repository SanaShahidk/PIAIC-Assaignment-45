//Shrinking Guest List: You just found out that your new dinner
//table won’t arrive in time for the dinner, and you have space for only two guests.var Guest_list = [

    var Guest_list = [
        '"SYED HAQIM AZIZ"',
        '"Hazrat UMAR R.A"',
        '"HAZRAT USMAN R.A"',
        '"Shoaib"',
      ];
      
      for (var i = Guest_list.length - 1; i >= 2; i--) {
        var message = `Dear, ${Guest_list[i]} I can invite only two people for dinner. Sorry can't invite you to dinner.`;
        console.log(message);
        Guest_list.pop(i);
      }
      console.log(Guest_list);
    