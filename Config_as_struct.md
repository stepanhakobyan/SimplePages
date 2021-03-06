---
layout: page
title: "Конфигурационный файл (config.as)" 
---

Файл конфигурации предназначен для настройки приложений платформы AS-3X, а именно клиента AS-3X (asbank.exe, 
asbux.exe и т.д.), конфигураторa системы (syscon.exe), редактора сценариев (scriped.exe) и загрузчика новых версий (launcher.exe). Файл состоит из нескольких разделов.

test

``` as4x
Page {
    Name = sName;
    Caption = sPageCaption;
    ECaption = sPageECaption;                           

    PageObject1 {};
    . . . . .
    PageObjectN {};
};
```

``` as4x
Page {
    Name = sName;
    Caption = sPageCaption;
    ECaption = sPageECaption;                           

    PageObject1
    . . . . .
    PageObjectN
};
```



## Раздел Common
предназначен для описания баз данных AS-3X.

### Глобальные параметры в разделе **Common**:
``` as4x
Common {
    Description = "Configuration definitions";
    Language = 1;
    Authentication = "WINDOWS";
    UseWindowsDefaultPrinter = 0;
    UseTestB2b = 1;
};
```

|Параметр|Описание|
|--|--|
|`Description`|строковое выражение, описание раздела|
|`Language`|числовое выражение, задающее язык системы. Возможны следующие значения 1 - Армянский, 3 - Английский. Значение параметра для клиента AS-3X в дальнейшем переопределяется настройкой пользователя|
|`Authentication`|строковое выражение, определяющее режим аутентификации приложения. Если значение данного параметра равно "Windows", тогда доступ к системе происходит по Windows-логину пользователя, в прoтивном случае - по логину SQL Server-а. Все пользователи системы должны работать по единой схеме аутентификации.|
|`UseWindowsDefaultPrinter`|числовое выражение, задающее режим работы с принтером. При значении 0 - принтер, на котором нужно печатать, можно выбрать из настроек программы, а при остальных значениях используется windows default принтер. По умолчанию принимает значение 0.|
|`UseTestB2B`|числовое выражение, определяющее адресс b2b сервера. При значение 1 задается адресс теставого сервера. По умолчанию задается адресс реального сервера.|

### базы данных в разделе **Common**:
``` as4x
Common {
    Config {
        Name = "main";
        Server = "bank-server"; 
        Database = "asbank";
        BaseFolder = "";
        BackupFolder = "\\backup\main";
        SS = "NO";
        Context = "ASBANK";
        StorePrnSet = 1;
        ReadOnly = 1;
    };
    Config {
        Name = "test";
        Server = "bank-server\test"; 
        Database = "asbank_test";
        BaseFolder = "C:\Source";
        BackupFolder = "\\backup\main";
        SS = "YES";
        Context = "ASBANK";
        StorePrnSet = 1;
        ReadOnly = 0;
    };
};
```

|Параметр|Описание|
|--|--|
|`Name`|строковое выражение, описывающее конфигурацию|
|`Server`|строковое выражение, задающее SQL сервер|
|`Database`|строковое выражение, задающее базу данных на сервере|
|`BaseFolder`|строковое выражение, задающее относительный путь к каталогу, где расположены системные описания. Параметр используется конфигуратором системы и редактором сценариев|
|`BackupFolder`|строковое выражение, задающее путь к каталогу (shared path), где расположены резервные копии базы данных. Параметр используется конфигуратором системы и клиентом AS-3X для задач управления резервными копиями.|
|`SS`|строковое выражение, задающее связь с Team Foundation Server. Возможны значения "YES" и "NO", по умолчанию "NO". Параметр используется редактором сценариев, при значении "YES" параметр *sBaseFolder* должен быть определен|
|`Context`|строковое выражение, задающее контекст приложения. Возможны следующие значения "ASBANK", "ASENTERPRISE", "ASWAGES", "ASMOBILETRADE". Параметр используется редактором сценариев для организации корректной контекстной помощи|
|`StorePrnSet`|числовое выражение, задающее раздел реестра для сохранения установок принтера. При значении 1 - HKEY_CURRENT_USER , а при остальных значениях - HKEY_LOCAL_MACHINE.|
|`ReadOnly`|числовое выражение, задающее режим работы с базой данных. При значении 1 - подключение к базе данных осуществляется в режиме "только для чтения", а при остальных значениях - в режиме "чтения/запись". В режиме "только для чтения" для входа в систему нету необходимости прoизводить синхронизацию пользователей с системной таблицей syslogins, это крайне удобно в случае работы с реплицированной базой данных.|


### Отделение BaseFolder:
Для работы с большим количеством проектов и баз данных дана возможность отделения BaseFolder-ов от конфигураций баз данных.
При отделении конфигуратор системы(SysCon.exe) и редактор сценариев(Scriped.exe) работают уже с отделёнными BaseFolder-ми.

``` as4x
Common {
    BaseFolder {
        Path = "C:\Sources1\Scripts";
        SS = "YES";
        Context = "ASBANK";
    };
    BaseFolder {
        Path = "C:\Sources2\Scripts";
        SS = "YES";
        Context = "ASBANK";
    };
};
```
Параметры те же самые, что и в конфигурациях

|Параметр|Описание|
|--|--|
|`Path`|строковое выражение, задающее относительный путь к каталогу, где расположены системные описания. Параметр используется конфигуратором системы и редактором сценариев|
|`SS`|строковое выражение, задающее связь с Team Foundation Server. Возможны значения "YES" и "NO", по умолчанию "NO". Параметр используется редактором сценариев, при значении "YES" параметр *sBaseFolder* должен быть определен|
|`Context`|строковое выражение, задающее контекст приложения. Возможны следующие значения "ASBANK", "ASENTERPRISE", "ASWAGES", "ASMOBILETRADE". Параметр используется редактором сценариев для организации корректной контекстной помощи|

## Раздел Launcher
предназначен для описания 
файлов, обновление которых может быть произведено с сервера базы данных. 
Данный раздел используется конфигуратором системы и загрузчиком новых версий.

### Глобальные параметры в разделе **Launcher**:
``` as4x
Launcher {
    Description = "Configure updates";
    Server = "bank-server";
    Database = "asbank";
};
```

|Параметр|Описание|
|--|--|
|`Description`|строковое выражение, описание раздела|
|`Server`|строковое выражение, задающее SQL сервер|
|`DataBase`|строковое выражение, задающее базу данных на сервере. При отсутствии используется первая база данных в кофигурациях с заданного сервера.|

### описание файлов в разделе **Launcher**:
``` as4x
Launcher {
    Update { Name = "asbank.exe"; ="SELFREG"; };
    Update { Name = "dasbank.exe"; ="SELFREG"; };
};
```

|Параметр|Описание|
|--|--|
|`Name`|строковое выражение, задающее относительный путь к файлу|
|`"SELFREG"`|необязательное поле, задаваемое при необходимости регистрации обновленного файла, используется для регистрации OLE серверов.|


**Примечание.** Если для файла невозможно 
определить версию возможностями операционной системы, то используется файл с расширением .ver и тем же именем. Например, для файла **asolap.xla** файл **asolap.ver** может иметь следующее содержание:

    1.2.1.30
    Armenian Software
    AS3XX Kernel with Bank extension
    Copyright . 1997-2000, Armenian Software, Ltd.

## Раздел Scriped
предназначен для задания конфигурации редактора сценариев.
``` as4x
Scriped {
    TFS = "http://tfserver:8080/tfs/Armsoft";
};
```
    
|Параметр|Описание|
|--|--|
|`TFS`|строковое выражение, задающее web адресс репозитария в Team Foundation Server|

#### Примечание

См. также

