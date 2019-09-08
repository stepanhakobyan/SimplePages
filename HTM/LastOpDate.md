---
layout: page
title: "LastOpDate"
---

# Функция LastOpDate

Возвращает дату последней проводки c объектом, произведенной в указанных учетах по заданному коду операции.

Если проводка не найдена, то возвращается `Null`.


## Синтаксис

``` vb
Function LastOpDate(ByVal AccCode As Variant, 
                    ByVal nISN As Long, _
           Optional ByVal UpToDate As Variant, _
           Optional ByVal Op As String, _
           Optional ByVal DiscardISN As Long = -1) As Variant
```

### Պարամետրեր

`AccCode` Variant (String կամ String())  
строковое выражение, определяющее [код учета](../../../Defs/Accounting.html) либо массив значений с несколькими кодами учетов, содержащий несколько кодов учета.

`nISN` Long  
численное выражение типа Long, определяющее ISN объекта учета, для которого приводится дата

`UpToDate` Variant (Date կամ `Null`)  
необязательное выражение типа даты, указывающее дату до которой включительно производится поиск. Если параметр опущен, то возвращается дата самой последней проводки в данном учете.

`Op` String  
необязательное строковое выражение, определяющее [код операции](../../../Defs/Accounting.html), по которому проводится поиск.

`nDiscardISN` Long  
необязательное численное выражение типа Long, определяющее ISN документа, транзакции которого не рассматриваются. По умолчанию принимает значение -1.

### Վերադրաձվող արժեք

Variant (Date կամ `Null`)  
Այն ամսաթիվն է 
In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede.


## Пример

Пример поиска даты последней операции с объектом в учетах "01" и "02".

``` vb
Function LASTDAY() As Variant
Dim arr(2) As String
    arr(1) = "01"
    arr(2) = "02"
    LASTDAY = LastOpDate(arr, ds("fISN"))
End Function
```


## Տես նաև

[См. также](LastOpDate2.html)


