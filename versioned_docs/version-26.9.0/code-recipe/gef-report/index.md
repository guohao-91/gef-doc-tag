---
sidebar_position: 1
---

# 文字を出力する

## 文字列を出力する/出力する文字列を改行する

- 概要
    - setValueメソッドを使い、出力する文字列を設定します。
        - 出力する文字列を改行する場合、改行箇所に\r、\nを挿入します。
    - setMultiLineメソッドを使い、文字列を折り返すことを許可します。
    - printメソッドを使い、出力します。
- レシピ
    - **文字列"REPORT"を出力する**
        ```java
        IReport report = GReportFactory.get(MyReport.class, GPDFReportDriver.class, "C:/OutPutFilePath");
        …
        report.getSection("SectionName").getField("FieldName").setValue("REPORT");
        report.print();
        ```
    - **文字列"ABCDE"の"ABC"で改行する**
        ```java
        IReport report = GReportFactory.get(MyReport.class, GPDFReportDriver.class, "C:/OutPutFilePath");
        …
        IReportField field = report.getSection("SectionName").getField("FieldName");
        field.setMultiLine(true);
        field.setValue("ABC\nDE");
        report.print();
        ```
- 関連
    - IReport#print
    - IReportField#setMultiLine,setValue


## プレイスホルダーを使用して他の拡張ポイントから出力する

- 概要
    - setPlaceHolderメソッドを使い、設定したフィールドにプレイスホルダーを設定します。
        - 異なるレイアウト間であっても、異なるプレイスホルダー名で設定する必要があります。
    - printPlaceHolderメソッドを使い、設定したプレイスホルダーに値(null以外)を出力します。
- レシピ
    - **拡張ポイントAで処理した合計値(totalValue)を拡張ポイントBでプレイスホルダーに出力する**
        ```java
        …
        //拡張ポイントA
        IReportSection header = getSection("HeaderSection");
        header.getField("PlaceHolderName").setPlaceHolder();
        …
        //拡張ポイントB
        header.getField("PlaceHolderName").printPlaceHolder(totalValue);
        ```

- 関連 
    - IReportField#printPlaceHolder,setPlaceHolder

# 文字の設定を変更する

- **マークは、PDFのみで使用できるレシピです** 

## フォントを変更する

- 概要
    - setFontNameメソッドを使い、フォントを変更します。<br/>
- レシピ
    - **レポート全体のフォントを変更する**
        ```java
        IReport report = GReportFactory.get(MyReport.class, GPDFReportDriver.class, "C:/OutPutFilePath");
        …
        report.getReportInfo().setFontName("HeiseiKakuGo- W5");       
        ```
    - **指定したフィールドのフォントを変更する**
        ```java
        IReport report = GReportFactory.get(MyReport.class, GPDFReportDriver.class, "C:/OutPutFilePath");
        …
        report.getSection("SectionName").getField("FieldName").setFontName("HeiseiKakuGo- W5");
        ```
- 関連
    - IReportInfo#setFontName

## 前景色を変更する

- 概要
    - setForeColorメソッドを使い、前景色を変更します。<br/>
        - 引数にjava.awt.Colorを設定し、色を定義します。
- レシピ
    - **前景色を赤に変更します**
        ```java
        IReport report = GReportFactory.get(MyReport.class, GPDFReportDriver.class, "C:/OutPutFilePath");
        …
        report.getSection("SectionName").getField("FieldName").setForeColor(Color.RED);
        ```
- 関連
    - IReportField#setForeColor

## 背景色を変更する

- 概要
    - setBackGroundColorメソッドを使い、背景色を変更します。
        - 引数にjava.awt.Colorを設定し、色を定義します。
- レシピ
    - **背景色を赤に変更します**
        ```java
        IReport report = GReportFactory.get(MyReport.class, GPDFReportDriver.class, "C:/OutPutFilePath");
        …
        report.getSection("SectionName").getField("FieldName").setBackGroundColor(Color.RED);
        ```
- 関連
    - IReportField#setBackGroundColor


## 文字を拡大表示する

- 概要
    - setFontZoomメソッドを使い、文字列を拡大します。<br/>
拡大後の文字列が指定したフィールドより大きい場合、出力されません。
- レシピ
    - **文字列を5倍に拡大する**
        ```java
        IReport report = GReportFactory.get(MyReport.class, GPDFReportDriver.class, "C:/OutPutFilePath");
        …
        report.getSection("SectionName").getField("FieldName").setFontZoom(5);
        ```
- 関連
    - IReportField#setFontZoom
