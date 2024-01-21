function soraniCalendar() {
    
    const today = new Date();
    const gregorianYear = today.getFullYear();
    const gregorianMonth = today.getMonth() + 1; 
    const gregorianDay = today.getDate();
  
    const gregorianMonthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
  
    function gregorianToKurdish(gy, gm, gd) {
      if (gy > 1600) {
        jy = 979;
        gy -= 1600;
      } else {
        jy = 0;
        gy -= 621;
      }
  
      let gy2 = (gm > 2) ? (gy + 1) : gy;
      let days = (365 * gy) + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) - 80 + gd + gregorianMonthDays.slice(0, gm).reduce((acc, val) => acc + val, 0);
  
      jy += 33 * Math.floor(days / 12053);
      days %= 12053;
      jy += 4 * Math.floor(days / 1461);
      days %= 1461;
  
      jy += Math.floor((days - 1) / 365);
      if (days > 365) days = (days - 1) % 365;
  
      let jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
      let jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));

      jy += 1321;
  
      return {
        day: jd,
        month: jm,
        monthName: getMonthName(jm),
        year: jy,
        dayName: getDayName(gd)
      };
    }
  
    function getMonthName(monthNumber) {
      const monthNames = [
        'خاکه‌لێوه', 'گوڵان', 'جۆزه‌ردان', 'پووشپه‌ڕ', 'گه‌لاوێژ', 'خه‌رمانان',
        'ره‌زبه‌ر', 'خه‌زه‌ڵوه‌ر', 'سه‌رماوه‌ز', 'به‌فرانبار', 'رێبه‌ندان', 'ره‌شه‌مێ'
      ];
      return monthNames[monthNumber - 1];
    }
  
    function getDayName(dayNumber) {
      const dayNames = [
        'یه‌کشه‌ممه', 'دووشه‌ممه', 'سێشەممه', 'چوارشه‌ممه', 'پێنجشه‌ممه', 'هه‌ینی', 'شه‌ممه'
      ];
      return dayNames[dayNumber % 7];
    }
  
    return gregorianToKurdish(gregorianYear, gregorianMonth, gregorianDay);
  }
  

  function kurmanciCalendar() {

    const today = new Date();
    const gregorianYear = today.getFullYear();
    const gregorianMonth = today.getMonth() + 1; 
    const gregorianDay = today.getDate();
  
    const gregorianMonthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
  
    function gregorianToKurdish(gy, gm, gd) {
      if (gy > 1600) {
        jy = 979;
        gy -= 1600;
      } else {
        jy = 0;
        gy -= 621;
      }
  
      let gy2 = (gm > 2) ? (gy + 1) : gy;
      let days = (365 * gy) + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) - 80 + gd + gregorianMonthDays.slice(0, gm).reduce((acc, val) => acc + val, 0);
  
      jy += 33 * Math.floor(days / 12053);
      days %= 12053;
      jy += 4 * Math.floor(days / 1461);
      days %= 1461;
  
      jy += Math.floor((days - 1) / 365);
      if (days > 365) days = (days - 1) % 365;
  
      let jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
      let jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));

      jy += 1321;
  
      return {
        day: jd,
        month: jm,
        monthName: getMonthName(jm),
        year: jy,
        dayName: getDayName(gd)
      };
    }
  
    function getMonthName(monthNumber) {
      const monthNames = [
        ' Nîsan', 'Gulan', ' Hezîran', ' Tîrmeh', ' Tebax', ' Îlun',
        ' Cutmeh', ' Mjdar', ' Kanûn', ' Çle', ' Sbat', ' Adar'
      ];
      return monthNames[monthNumber - 1];
    }
  
    function getDayName(dayNumber) {
      const dayNames = [
        'Yekşem', 'Duşem', 'Sêşem', 'Çarşem', 'Pêncşem', 'Înê', 'Şemî'
      ];
      return dayNames[dayNumber % 7];
    }
  
    return gregorianToKurdish(gregorianYear, gregorianMonth, gregorianDay);
   }


  function kelhuriCalendar() {
    
    const today = new Date();
    const gregorianYear = today.getFullYear();
    const gregorianMonth = today.getMonth() + 1; 
    const gregorianDay = today.getDate();
  
    const gregorianMonthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
  
    function gregorianToKurdish(gy, gm, gd) {
      if (gy > 1600) {
        jy = 979;
        gy -= 1600;
      } else {
        jy = 0;
        gy -= 621;
      }
  
      let gy2 = (gm > 2) ? (gy + 1) : gy;
      let days = (365 * gy) + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) - 80 + gd + gregorianMonthDays.slice(0, gm).reduce((acc, val) => acc + val, 0);
  
      jy += 33 * Math.floor(days / 12053);
      days %= 12053;
      jy += 4 * Math.floor(days / 1461);
      days %= 1461;
  
      jy += Math.floor((days - 1) / 365);
      if (days > 365) days = (days - 1) % 365;
  
      let jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
      let jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));

      jy += 1321;
  
      return {
        day: jd,
        month: jm,
        monthName: getMonthName(jm),
        year: jy,
        dayName: getDayName(gd)
      };
    }
  
    function getMonthName(monthNumber) {
      const monthNames = [
        'جەشنان', 'گوڵان', 'زەردان', 'پەرپەر', 'گەلاوێژ', 'نوخشان',
        'بەران', 'خەزان', 'ساران', 'بەفران', 'بەندان', 'رەمشان'
      ];
      return monthNames[monthNumber - 1];
    }
  
    function getDayName(dayNumber) {
      const dayNames = [
        'یه‌کشه‌ممه', 'دووشه‌ممه', 'سێشەممه', 'چوارشه‌ممه', 'پێنجشه‌ممه', 'هه‌ینی', 'شه‌ممه'
      ];
      return dayNames[dayNumber % 7];
    }
  
    return gregorianToKurdish(gregorianYear, gregorianMonth, gregorianDay);
  }

  function lakiCalendar() {
    
    const today = new Date();
    const gregorianYear = today.getFullYear();
    const gregorianMonth = today.getMonth() + 1; 
    const gregorianDay = today.getDate();
  
    const gregorianMonthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
  
    function gregorianToKurdish(gy, gm, gd) {
      if (gy > 1600) {
        jy = 979;
        gy -= 1600;
      } else {
        jy = 0;
        gy -= 621;
      }
  
      let gy2 = (gm > 2) ? (gy + 1) : gy;
      let days = (365 * gy) + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) - 80 + gd + gregorianMonthDays.slice(0, gm).reduce((acc, val) => acc + val, 0);
  
      jy += 33 * Math.floor(days / 12053);
      days %= 12053;
      jy += 4 * Math.floor(days / 1461);
      days %= 1461;
  
      jy += Math.floor((days - 1) / 365);
      if (days > 365) days = (days - 1) % 365;
  
      let jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
      let jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));

      jy += 1321;
  
      return {
        day: jd,
        month: jm,
        monthName: getMonthName(jm),
        year: jy,
        dayName: getDayName(gd)
      };
    }
  
    function getMonthName(monthNumber) {
      const monthNames = [
        'پەنجە', 'میریان', 'گاکووڕ', 'ئاگرانی', 'مردار', 'ماڵەژێر',
        'ماڵەژێر دوماینە', 'تۊلتەکن', 'مانگ سیە', 'نۆڕووژ', 'خاکەلیە', 'مانگ لیە'
      ];
      return monthNames[monthNumber - 1];
    }
  
    function getDayName(dayNumber) {
      const dayNames = [
        'یه‌کشه‌ممه', 'دووشه‌ممه', 'سێشەممه', 'چوارشه‌ممه', 'پێنجشه‌ممه', 'هه‌ینی', 'شه‌ممه'
      ];
      return dayNames[dayNumber % 7];
    }
  
    return gregorianToKurdish(gregorianYear, gregorianMonth, gregorianDay);
  }

  function hewramiCalendar() {
    
    const today = new Date();
    const gregorianYear = today.getFullYear();
    const gregorianMonth = today.getMonth() + 1; 
    const gregorianDay = today.getDate();
  
    const gregorianMonthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
  
    function gregorianToKurdish(gy, gm, gd) {
      if (gy > 1600) {
        jy = 979;
        gy -= 1600;
      } else {
        jy = 0;
        gy -= 621;
      }
  
      let gy2 = (gm > 2) ? (gy + 1) : gy;
      let days = (365 * gy) + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) - 80 + gd + gregorianMonthDays.slice(0, gm).reduce((acc, val) => acc + val, 0);
  
      jy += 33 * Math.floor(days / 12053);
      days %= 12053;
      jy += 4 * Math.floor(days / 1461);
      days %= 1461;
  
      jy += Math.floor((days - 1) / 365);
      if (days > 365) days = (days - 1) % 365;
  
      let jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
      let jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));

      jy += 1321;
  
      return {
        day: jd,
        month: jm,
        monthName: getMonthName(jm),
        year: jy,
        dayName: getDayName(gd)
      };
    }
  
    function getMonthName(monthNumber) {
      const monthNames = [
        'نەوڕۆز', 'پاژەرەژ', 'چێڵکڕ', 'کۆپڕ', 'گەلاوێژ', 'ئاوەوەرە',
        'ترازیێ', 'گەڵاخەزان', 'کەڵەھەرز', 'ئارگا', 'رابڕان', 'سیاوکام'
      ];
      return monthNames[monthNumber - 1];
    }
  
    function getDayName(dayNumber) {
      const dayNames = [
        'یه‌کشه‌ممه', 'دووشه‌ممه', 'سێشەممه', 'چوارشه‌ممه', 'پێنجشه‌ممه', 'هه‌ینی', 'شه‌ممه'
      ];
      return dayNames[dayNumber % 7];
    }
  
    return gregorianToKurdish(gregorianYear, gregorianMonth, gregorianDay);
  }

  function zazakiCalendar() {
    
    const today = new Date();
    const gregorianYear = today.getFullYear();
    const gregorianMonth = today.getMonth() + 1; 
    const gregorianDay = today.getDate();
  
    const gregorianMonthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
  
    function gregorianToKurdish(gy, gm, gd) {
      if (gy > 1600) {
        jy = 979;
        gy -= 1600;
      } else {
        jy = 0;
        gy -= 621;
      }
  
      let gy2 = (gm > 2) ? (gy + 1) : gy;
      let days = (365 * gy) + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) - 80 + gd + gregorianMonthDays.slice(0, gm).reduce((acc, val) => acc + val, 0);
  
      jy += 33 * Math.floor(days / 12053);
      days %= 12053;
      jy += 4 * Math.floor(days / 1461);
      days %= 1461;
  
      jy += Math.floor((days - 1) / 365);
      if (days > 365) days = (days - 1) % 365;
  
      let jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
      let jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));

      jy += 1321;
  
      return {
        day: jd,
        month: jm,
        monthName: getMonthName(jm),
        year: jy,
        dayName: getDayName(gd)
      };
    }
  
    function getMonthName(monthNumber) {
      const monthNames = [
        ' Nîsane', ' Gulane', ' Hezîrane', ' Temmûze', ' Tebaxe', ' Keşkelun',
        ' Tşrînu verên', 'Tşrînu peyên', 'Kanun', 'Çele', 'Sbate', 'Adar'
      ];
      return monthNames[monthNumber - 1];
    }
  
    function getDayName(dayNumber) {
        const dayNames = [
          'Yekşem', 'Duşem', 'Sêşem', 'Çarşem', 'Pêncşem', 'Înê', 'Şemî'
        ];
        return dayNames[dayNumber % 7];
      }
  
    return gregorianToKurdish(gregorianYear, gregorianMonth, gregorianDay);
  }

  










  