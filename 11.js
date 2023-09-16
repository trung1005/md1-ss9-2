
      let a = Number(prompt("Nhập vào số thứ 1"));
      let b = Number(prompt("Nhập vào số thứ 2"));
      let c = Number(prompt("Nhập vào số thứ 3"));

      let tempMax = a > b ? a : b;

      let max = tempMax > c ? tempMax : c;

      let tempMin = a < b ? a : b;

      let min = tempMin < c ? tempMin : c;
      document.write("Max" + max);
      document.write("Min" + min);