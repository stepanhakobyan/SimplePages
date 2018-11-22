---
title: Index Page
---

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.

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
}
```


``` js
function isItWorking() {
  let text = "some text";
  let other = text.toString();
  let val1 = 123;
  let p = new Point();
  //comment here
}
```

``` vb
Function IsItWorking()
    Dim fso As Object
    let val1 As Long
    Set fso = CreateObject("Scripting.FileSystemObject")
    val1 = 123
    'comment here 123
    REM comment here
End Function
```

``` typescript
async function isItWorking(): void {
  let text: string = "some text";
  let other = text.toString();
  let val1: number = 123;
  let p: Point = new Point();
  //comment here 456
}
```

``` ts
async function isItWorking(): void {
  let text: string = "some text";
  let other = text.toString();
  let val1: number = 123;
  let p: Point = new Point();
  //comment here
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
