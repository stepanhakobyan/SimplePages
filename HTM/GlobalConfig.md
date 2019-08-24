﻿---
title: "Глобальный конфигурационный файл"
author: "sts"
---

## Глобальный конфигурационный файл

Глобальный конфигурационный файл - это регистрированный файл, который используется приложениями платформы AS-3X, если рядом с приложением нет конфигурационного файла. 

Чтобы зарегистрировать конфигурационный файл как глобальный, надо найти файл "Config.as Global Registrator.vbs" в каталоге BIN и перетащить конфигурационный файл на него.

![Global Config Drag And Drop](../IMAGES/GlobalConfigDrag.png)

После откроется диалоговое окно, где надо ответить "Yes".

![Global Config Message](../IMAGES/GlobalConfigMsg.png)

Регистрация завершена.

Нужно отметить, что регистрируется только адресс конфигурационного файла, а не содержание, и 
не надо сново регистрировать при изменениях в файле.

-----
test block

![Global Config Drag And Drop]({{site.baseurl}}/IMAGES/GlobalConfigDrag.png)

![Global Config Message]({{site.baseurl}}/IMAGES/GlobalConfigMsg.png)

