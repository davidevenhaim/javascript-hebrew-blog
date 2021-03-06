---
author: "דוד אבן חיים"
date: "2021-06-03"
image: chapter-9-functions.jpg
isFeatured: true
summary: "פונקציות - לא בידיוק מה שלמדנו בתיכון"
time: 11
title: "פרק 9: פונקציות"
---

# פונקציות

אז פונקציות בשפת תכנות זה לא בדיוק מה שלמדנו כשהיינו בתיכון.  
כן בפונקציה אנחנו יכולים (לא חייבים) לקבל קלט כלשהו, לבצע עליו חישוב מסוים ולהחזיר פלט.  
פונקציות קיימות בכל שפת תכנות, אני אוהב להגדיר אותם בתור "קוד מסוים שאני אקרא לו מתי וכמה פעמים שאני צריך".  
אני חייב להדגיש שכאשר אנחנו מגדירים פונקציה היא לא נקראת מיידית אלא נשמרת בזכרון ורק כאשר אנחנו נבצע קריאה לפונקציה - היא תופעל.

### הגדרת פונקציה:

יש כמה דרכים להגדיר פונקציה ב JS.  
כרגע נעבור על הדרך הקלאסית, באמצעות המילה השמורה
**function**

```js
function myFirstFunction(myName) {
  //here is the body of the function
}
```

_שימו לב!_  
שם הפונקציה כמו שם משתנה (מתחיל באות קטנה וכו').  
בתוך ה ( ) אלו הם הארגמונטים שהפונקציה מקבלת, הפונקציה הזו מקבלת ארגומנט אחד,  
בשם myName.  
משתנה זה יהיה זמין
**רק**
בגוף הפונקציה.  
כל מה שבין ה- { .. } הוא גוף הפונקציה , נקרא גם
**Scope (נרחיב בהמשך!)**  
פונקציה לא מסתיימת ב ; (אך יש מתכנתים שכן כותבים, אני לא רואה סיבה).

_וידוי נאות:_  
\*לאורך המדריך תקבלו כמה וידויים מעניינים.  
**לא חייב**
לסיים כל שורה באמצעות ה - ( ; )
JS לעומת שפות אחרות שבהן אכן חייב.

### קריאה לפונקציה:

```js
const name = "David";
myFirstFunction(name);
```

כמובן ששם המשתנה שאנחנו שולחים לפונקציה לא צריך להיות זהה למשתנה בהגדרת הפונקציה!  
כרגע הפונקציה שלנו לא עושה כלום.  
אז בואו נהפוך את הפונקציה לשימושית ונוסיף ל
_גוף הפונקציה_
פעולה מסוימת.  
הפעם הפעולה תהיה להגיד שלום למשתנה שהפונקציה קיבלה!

```js
function myFirstFunction(myName) {
  console.log("Hello" + name);
}
```

עכשיו כשיש לפונקציה מהות, בואו נקרא לה שוב.

```js
const name = "David";

myFirstFunction(name);
```

**אז מה עשינו פה?**  
כתבנו מחרוזת (כל החלק שמוקף במרכאות) ולאחריה הוספנו משתנה, אך חייב להפריד ביניהם, כרגע הפרדנו באמצעות ה " , " אך באותה מידה אפשר להשתמש ב " + ".
שימו לב! שקריאה לפונקציה חייבת להיות עם ( ) לאחר שם הפונקציה.  
( גם כשהיא ללא ארגומנטים!! )

המילה השמורה
**return**
בדרך כלל נהוג לסיים פונקציות עם ערך החזרה באמצעות המילה,  
נעשה זאת באמצעות
ה - return  
דוגמא:

```js
function add(num1, num2) {
  return num1 + num2;
}
```

פונקציה זו תבצע פעולת חיבור בין שני משתנים ותחזיר את הערך של החיבור שלהם.  
**לא רק מספרים אפשר לחבר!**
נעבור על זה בהמשך.

לא ייקרה כלום אם נקרא לפונקציה ככה:

```js
add(1, 2);
```

הפונקציה הזו תחזיר את הערך 3 אבל הוא פשוט לא יישמר בשום מקום.  
אפשר לשמור
**ערך החזרה של הפונקציה**
במשתנה:

```js
const returnValue = add(1, 2);
```

**מה שייקרה בעצם:**

1. הקומפיילר ייקרא לפונקציה add.
2. ישלח את הארגומנטים 1,2.
3. יבצע את החישוב ויחזיר את הערך למשתנה שהגדרנו.

אז בעצם זה בידיוק כמו לכתוב כך:

```js
const returnValue = 1 + 2;
```
