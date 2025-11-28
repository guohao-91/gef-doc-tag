---
sidebar_position: 1
---

# ズームを使う

-  概要
    -  zoomopeneventタグを使い、ズームを開きます。  
※zoomcloseeventタグを使い、ズームを閉じます。  
-  レシピ
    -  **ボタン押下時にズームオープンイベントを実行する**
```html
<gp:button …>
    <gr:zoomopenevent element="ZoomeID" event="click">
        …
    </gr:zoomopenevent>
</gp:button>
<gr:zoomdialog id="ZoomeID" …>
    <gp:linkedlabel … value="閉じる">
        <gr:zoomcloseevent element="ZoomeID" event="click">
            …
        </gr:zoomcloseevent>
    </gp:linkedlabel>
</gr:zoomdialog>
```
- 関連
    -  GRZoomDialogTag
    -  GZoomOpenEventTag
    -  GZoomCloseEventTag


##  ズームをモードレスに設定する


- 概要
    -  zoomdialogタグのOption属性で、modalプロパティをfalseと定義し、ズームをモードレスに設定します。
- レシピ
    -  **ズームをモードレスに設定する**
```html
<gr:zoomdialog … options="{… modal:false}">
    …
</gr:zoomdialog>
```
- 関連
    -  GRZoomDialogTag



##  ズームオープン時に指定した要素をリクエストパラメータに設定し、Ajaxアクションを実行する


- 概要
    -  zoomparamタグを使い、ズームオープン時に任意の値をパラメータとして設定します。
※拡張属性(grzoomdialog)を指定する必要があります。
    -  ajaxeventタグのEvent属性にopenを指定することで、ズームオープン時にAjaxイベントを実行します。
- レシピ
    -  **ズームオープン時に、指定した要素をリクエストパラメータとし、処理を加えてズームに出力する**

```html:MAIN.JSP
<gr:zoomopenevent …>
    …
    <gr:zoomparam name="ParamNameA" element="ElementID" />
    <gr:zoomparam name="ParamNameB" value="10" />
</gr:zoomopenevent>
<gr:zoomdialog id="MyZoome" …>
    <gp:ajaxevent event="open" actionbean="MyAction" actionmethod="MyMethod" grzoomdialog="MyZoome" …/>
    …
</gr:zoomdialog>
```
```java:MyAction.java
public GResultData MyMethod(GParameter parameter, GResultData resultData) {
    String param = parameter.getValue("ParamNameA");
    …
    return resultData;
}
```
- 関連
    -  GZoomOpenEventTag
    -  GRZoomParamTag




##  ズームを閉じる時にズームの値を親ウィンドウに返却する


- 概要
    -  zoomreturnタグを使い、ズームを閉じる際、親ウィンドウに値を返却します。
    -  zoomreceiveタグで、ズームからの値を受け取ります。
- レシピ
    -  **ズームを閉じる際、テキストボックスの値を親ウィンドウへ返却する**
```html
<gp:text id="ReceiveID" …></gp:text>
<gr:zoomopenevent …>
    <gr:zoomreceive key="MyKey" element="ReceiveID" />
</gr:zoomopenevent>
<gr:zoomdialog …>
    <gr:zoomcloseevent …>
        <gr:zoomreturn key="MyKey" element="ReturnID"/>
    </gr:zoomcloseevent>
    …
    <gp:text id="ReturnID" value="ReturnValue"></gp:text>
</gr:zoomdialog>
```
- 関連
    -  GRZoomReceiveTag
    -  GRZoomReturnTag
    -  GZoomCloseEventTag


