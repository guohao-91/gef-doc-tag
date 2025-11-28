---
sidebar_position: 1
---

# 検索する

## プライマリキーで検索する

-  概要
    -  wherePKメソッドを使い、プライマリキー検索をします。
        -  検索条件には、複数の検索値を設定できます。

- レシピ
    -  **プライマリキー検索する(複数キー指定）**
        ```java
        GRecord record = select("EntityName")
            …
            .wherePK("ValueA", "ValueB", …)
            .findRecord();
        ```
- 関連
    -  GEntitySelect#wherePK

## ユニークキーで検索する

- 概要
    -  whereUKメソッドを使い、ユニークキー検索をします。
        -  Entity定義ファイルで設定したユニークキー名を第一引数に設定します。
        -  検索条件には、複数の検索値を設定できます。
- レシピ
    -  **ユニークキー検索する(複数キー指定)**
        ```java
        GRecord record = select("EntityName")
            …
            .whereUK("UniqueKeyName", "ValueA", "ValueB", …) 
            .findRecord();
        ```
- 関連
    -  GEntitySelect#whereUK

## 条件式を使って検索する


- 概要
    -  expメソッドの引数に任意の条件式を記述します。 
    -  バインドパラメータにMapを使用する場合は、expMAPメソッドを使用します。
        -  検索条件には、複数の検索値を設定できます。
- レシピ
    -  **複数の条件で検索する**
        ```java
        List<GRecord> list = select("EntityName")
            …
            .where(exp("#ColumnA = ? AND #ColumnB = ? OR …", paramA, paramB, …))
            …
            .findList();
        ```
    -  **バインドパラメータにMapを使って検索する**
        ```java
        Map<String, Object> paramMap = new HashMap<String, Object>();
        paramMap.put("ParamName", param);
        …
        List<GRecord> list = select("EntityName")
            …
            .where(expMAP("#ColumnA = :ParamName …", paramMap))
            …
            .findList();  
        ```
- 関連
    -  GEntitySelect#where
    -  GQueryAssistants#exp,expMap

## 内部結合して検索する


- 概要
    -  innerJoinメソッドを使い、結合先を指定して内部結合します。
    -  Entity定義ファイルの外部キー設定を利用する場合、innerJoinFKメソッドを使用します。
- レシピ
    -  **結合先テーブルをメインテーブルに内部結合し、検索する**
        ```java
        List<GRecord> list = select("MainTable", "MT")
                .innerJoin("JoinTable", "JT",exp("#JT.ColumnA = #MT.ColumnA …"))
                …
                .findList();
        ```
    -  **Entityの外部キー設定を利用して内部結合し、検索する**
        ```java
        List<GRecord> list = select("MainTable", "MT")
                .innerJoinFK("ForeignKey", "JT")
                …
                .findList();
        ```
- 関連
    -  GEntitySelect#innerJoin,innerJoinFK

## 外部結合して検索する


- 概要
    -  leftOuterJoinメソッドを使い、外部結合します。
    -  エンティティー定義ファイルの外部キー設定を利用する場合、leftOuterJoinFKメソッドを使用します。
 
- レシピ
    -  **結合先テーブルを外部結合して検索する**
        ```java
        List<GRecord> list = select("MainTable", "MT")
                .leftOuterJoin("JoinTable", "JT",exp("#JT.ColumnA = #MT.ColumnA …"))
                …
                .findList();
        ``` 
    -  **Entityの外部キー設定を利用して外部結合し、検索する**
        ```java
        List<GRecord> list = select("MainTable", "MT")
                .leftOuterJoinFK("ForeignKey", "JT")
                …
                .findList();
        ```
- 関連
    -  GEntitySelect#leftOuterJoin,leftOuterJoinFK

## 検索結果をソートする


- 概要
    -  orderByメソッドを使い、検索結果をソートします。
        -  asc/descメソッドを使い、昇順/降順を切り替えます。
        -  昇順/降順の指定がない場合は、昇順でソートされます。
- レシピ
    -  **検索結果を昇順でソートする**
        ```java
        List<GRecord> list = select("EntityName")
            …
            .orderBy(asc("ColumnA"), asc("ColumnB"), …)
            .findList(); 
        ```
    -  **検索結果を降順でソートする**
        ```java
        List<GRecord> list = select("EntityName")
            …
            .orderBy(desc("ColumnA"), desc("ColumnB"), …)
            .findList(); 
        ```
    -  **検索結果に関数を使い、昇順でソートする**
        ```
        List<GRecord> list = select("EntityName")
            …
            .orderBy(asc(exp("$SUBSTR(#Column, 1, 4)")))
            .findList(); 
        ```

- 関連
    -  GEntitySelect#orderBy
    -  GQueryAssistants#asc,desc


## 検索行をロックする/ロック時の待機秒数を指定する


- 概要
    -  forUpdateメソッドを使い、行をロックします。
        -  待機時間を指定する場合、引数に待機秒数(単位:秒)を設定します。
    -  ロックを取得するまで待機させる場合は、引数に0を設定します。
    -  NoWaitオプションを付与する場合、forUpdateNoWaitメソッドを使用します。
- レシピ
    -  **検索行をロックする**
        ```java
        List<GRecord> list = select("EntityName")
            …
            .forUpdate()
            …
            .findList();
        ```
    -  **検索行をロックできない場合、50秒間待機する**
        ```java
        List<GRecord> list = select("EntityName")
            …
            .forUpdate(50)
            …
            .findList();
        ```
    -  **NoWaitオプションを使用して行ロックを行う**
        ```java
        List<GRecord> list = select("EntityName")
            …
            .forUpdateNoWait()
            …
            .findList();
        ```

- 関連
    -  GSelect#forUpdate,forUpdateNoWait

# 検索する2

# 検索する3

# 検索する4