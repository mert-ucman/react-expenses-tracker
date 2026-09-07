



önce sarmalayan yapı oluşturdum
sonra veriyi netleştirdim initialState içerisindeki başlangıç verisi
UI'ı MainWindow üzerinden düşün, uygulamanın verisini Context üzerinden, verinin değişmesini Reducer üzerinden, kullanıcı etkileşimini de Component → dispatch akışı üzerinden düşün.

1. Her davranış için yeni reducer mı açacağız?

Hayır. Expense Tracker'da add, delete, edit gibi davranışların hepsi aynı ana veri olan expense'ları değiştiriyorsa aynı reducer'da kalabilir.

Ama dispatch ettiğin şey:

"Rapor ekranını aç"

gibi expense verisini değiştirmeyen, başka bir UI durumunu yöneten bir şeyse, bunu otomatik olarak expenseReducer içine sokmak zorunda değilsin.



/iskelet/ veriyi ve state'i nasıl yöneteceğim ?
/ui/ ekranda ne var ?
/davranış-state/ componentlerin davranışı .

İskelet
   ↓
UI
   ↓
Kullanıcı davranışı
   ↓
State ihtiyacı
   ↓
Context / Reducer
   ↓
Bir sonraki davranış
   ↓
UI'ı genişlet
   ↓
...

iskeletten sonra → Yani UI → davranış → state yönetimi → sonraki özellik şeklinde ilerle.
