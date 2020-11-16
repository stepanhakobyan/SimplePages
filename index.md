---
title: Index Page
---

փորձնական

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.

<custom data-highlight="3,4,5"></custom>

``` vb
' CODE BLOCK 1
Public Sub OnEachrow()
Dim xDoc As AsDoc
   Set xDoc = LoadDoc(DS("fISN"))
   If xDoc.ExistsRekv("KASSIMV") Then
      mKasSim = xDoc("KASSIMV")
   Else
      mKasSim = "?"
   End If
End Sub
```

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.

<highlight-code data-rows="3,5,7"></highlight-code>

``` vb
' CODE BLOCK 2
Public Sub OnEachrow()
Dim xDoc As AsDoc
   Set xDoc = LoadDoc(DS("fISN"))
   If xDoc.ExistsRekv("KASSIMV") Then
      mKasSim = xDoc("KASSIMV")
   Else
      mKasSim = "?"
   End If
End Sub
```



Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.

<highlight-code data-rows="3,5,9"></highlight-code>

``` vb
' CODE BLOCK 3
Public Sub OnEachrow()
Dim xDoc As AsDoc
   Set xDoc = LoadDoc(DS("fISN"))
   If xDoc.ExistsRekv("KASSIMV") Then
      mKasSim = xDoc("KASSIMV")
   Else
      mKasSim = "?"
   End If
End Sub
```

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.

<highlight-code data-rows="3,5,7,9"></highlight-code>

``` as4x
column { name = fAGRNUM; caption = "ä³ÛÙ³Ý³·ñÇ Ñ³Ù³ñ"; FIELD=fDGCODE; SOURCE = 1; type=C(14); 
         rtrim = 1; };
column { name = fCOUNT; caption = "ø³Ý³Ï"; FIELD=fCURSUM; SOURCE = 1; type=NP(2,0); 
         cstype = decimal; };
column { name = fCLOSEDATE; caption = "ö³ÏÙ³Ý ³Ùë³ÃÇí"; FIELD=fCLOSEDATE; SOURCE = 1; type=DATE; 
         nullable = 1; };


param { name = StartDate; type = DATE; description = "êÏ½µÇ ³Ùë³ÃÇí"; nullable = 1; };
param { name = EndDate; type = DATE; description = "ì»ñçÇ ³Ùë³ÃÇí"; nullable = 1; };
```

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.

``` vb
Sub Util.DeleteDescr(ByVal intSysType As Integer, ByVal strName As String)
```

``` vb
Public Sub Util.DeleteDescr(ByVal intSysType As Integer, ByVal strName As String)
```

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.

``` vb
Private mKasSim As String

Public Function GetSimbol() As String
    Return mKasSim
End Function

Public Sub OnEachrow()
Dim xDoc As AsDoc
   Set xDoc = LoadDoc(DS("fISN"))
   If xDoc.ExistsRekv("KASSIMV") Then
      mKasSim = xDoc("KASSIMV")
   Else
      mKasSim = "?"
   End If
End Sub
```





Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.

``` csharp
async string GetFileAsync()
{
    String result;
    var t = new Task<string>();
    await t.Run();
    result = t.Result;
    return result;
    //comment here
    int val1 = 123;
    var val2 = 123.05;
    Int32 val3 = 1234;
    const bool arrived = false;
}
```


``` js
function isItWorking() {
  let text = "some text";
  let other = text.toString();
  let val1 = 123;
  let val2 = 123.05;
  let p = new Point();
  //comment here
  const arrived = false;
}
```

``` vb
Function IsItWorking()
    Dim fso As Object
    let val1 As Long
    Set fso = CreateObject("Scripting.FileSystemObject")
    val1 = 123
    val1 = 123.05
    'comment here 123
    REM comment here
    Dim arrived As Boolean = False
End Function
```

``` typescript
async function isItWorking(): void {
  let text: string = "some text";
  let other = text.toString();
  let val1: number = 123;
  let val2: number = 123.05;
  let p: Point = new Point();
  //comment here 456
  const arrived: boolean = false;
}
```

``` html
<pre>
<code class="abc">lalala
lalala
</code>
</pre>
<!-- commment here -->
<div class="qwe">
  <span style='font-family:Arial'>some text</span>
</div>
<script><![CDATA[
function testCData() { 
  return; 
}
]]></script>
```

``` json
{
  "str": "string",
  "num": 1234,
  "flo": 123.05,
  "bool": true,
  "arr": [
    "val1",
    "val2"
  ],
  "obj": {
  	"prop1": invalid1,
  	"prop1": invalid2
  }
}
```

``` yaml
# Config settings
title: Simple Pages Title
author: "Simple Pages Author - Me"
email: site@email.me
description: Simple Pages Description
version: 1.5
number: 1500

theme: minima

header_pages:
- second.md

# Search settings
tipue_search:
  include:
    pages: true
  exclude:
files: [index.md, search.html]
```

``` xml
<?xml version="1.0" encoding="utf-8"?>
<xs:schema targetNamespace="http://tempuri.org/XMLSchema.xsd"
    elementFormDefault="qualified"
    xmlns="http://tempuri.org/XMLSchema.xsd"
    xmlns:mstns="http://tempuri.org/XMLSchema.xsd"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
>
  <!-- comment here -->
<xs:annotation id="a123">123</xs:annotation>
<xs:annotation id="a124">Hi ho</xs:annotation>
<xs:annotation id="a125"><![CDATA[hey ho]]></xs:annotation>
</xs:schema>
```


``` as4x
Access {
    AccessID = nAccessID;
    Caption = sAccCaption;
    ECaption = sAccECaption;
};
```

``` as4x
COMMON { 
	DESCRIPTION = "Initialization";
	LANGUAGE = 1;
	'MODE = 4.0;
	'HEARTBEAT="Retail:555"; 
	'AUTHENTICATION=WINDOWS;

	CONFIG{ NAME="d_bank1";		SERVER="bank-server";		DATABASE=d_bank1;		CONTEXT = ASBANK;      };
	CONFIG{ NAME="d_bank5";		SERVER="bank-server\sql2012";		DATABASE=d_bank5;		CONTEXT = ASBANK;      };


	CONFIG{ NAME="z_as_enterprise_e"; SERVER=ACC-SERVER;  DATABASE=z_as_enterprise_e;   CONTEXT = ASENTERPRISE;};
	
	BASEFOLDER{ PATH="C:\AS-4X\tests";	SS = NO; CONTEXT = ASBANK;};
	BASEFOLDER{ PATH="C:\LocalWS\Bank Scripts\asbank"; 					SS = YES; CONTEXT = ASBANK;};
	
	BASEFOLDER{ PATH="C:\AS-4X\Enterprise Script\Enterprise"; 			SS = YES; CONTEXT = ASENTERPRISE;};
};
SCRIPED {
   TFS ="http://tfserver:8080/tfs/Armsoft";
};
```

``` as4x
MODULE {
NAME = AppExt;
CAPTION = "Extensions";
PUBLIC = 1;

Doc { = sDocName1; .....;  = sDocNameN; };

SCRIPT {
Option Explicit

Public Sub Init()
    ...
End Sub
};
};
```
