// Yeni bir Date nesnesi oluşturma
const currentDate = new Date();

// Date nesnesinin yöntemlerini kullanarak tarih ve saat bilgilerini alabiliriz
const currentYear = currentDate.getFullYear(); // Yıl bilgisini alır
const currentMonth = currentDate.getMonth(); // Ay bilgisini alır (0'dan başlayarak, 0 Ocak demektir)
const currentDay = currentDate.getDate(); // Gün bilgisini alır (1'den başlayarak)
const currentHour = currentDate.getHours(); // Saat bilgisini alır (24 saat formatında)
const currentMinute = currentDate.getMinutes(); // Dakika bilgisini alır
const currentSecond = currentDate.getSeconds(); // Saniye bilgisini alır
const currentMillisecond = currentDate.getMilliseconds(); // Milisaniye bilgisini alır

// Örnek olarak, şu anki tarih ve saat bilgilerini konsola yazdıralım
console.log(`Şu anki tarih: ${currentDay}/${currentMonth + 1}/${currentYear}`);
console.log(`Şu anki saat: ${currentHour}:${currentMinute}:${currentSecond}`);

//! ********* NOT ********/
/*
getDate(): Bu yöntem, bir Date nesnesinin gün kısmını (ayın kaçıncı günü olduğunu) döndürür.
setDate(): Bu yöntem, bir Date nesnesinin gün kısmını ayarlar.

*/

// Yeni bir Date nesnesi oluşturalım
const date = new Date();

// getDate() kullanımı: Tarih nesnesinin gün kısmını alır
const currentDayNew = date.getDate();
console.log("Bugünün tarihi:", currentDayNew);

// setDate() kullanımı: Tarih nesnesinin gün kısmını ayarlar
date.setDate(15); // Tarihi 15 gün olarak ayarla
console.log("Tarihi ayarladıktan sonraki gün:", date.getDate());
