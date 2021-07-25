---
author: "דוד אבן חיים"
date: "2021-05-19"
image: chapter-4-vs-code.jpg
isFeatured: false
summary: "מהי סביבת העבודה האופטימאלית?"
time: 5
title: "פרק 4: הגדרת סביבת עבודה"
---

# הגדרת סביבת עבודה אופטימלית

למשך הקורס אנחנו נשתמש בתוכנה שמתאימה גם לווינדוס וגם למקינטוש והיא התוכנה שרוב המפתחים שפגשתי משתמשים:

[Visual Studio code - לחצו להורדה](https://code.visualstudio.com/download)

התקנה רגילה, אין יותר מידי מה להסביר.  
מבחינת מראה, אני אוהב להשתמש ב"מצב לילה":

![מצב לילה](color-theme.png)

**תוספים**  
טוב אז כמו שיש חנות אפליקציות בטלפון שלכם, גם ב Vs Code יש חנות עם המון אפליקציות שכל מטרתן היא לשפר את החוויה שלנו, אז למה לא?  
_ההורדה שלהן היא בגדר המלצה בלבד, מה שנוח לי לא בהכרח יהיה נוח לכם._  
אז קודם כל איך ניגשים ל"חנות האפליקציות" שלנו:

![תוספים](extension.png)

בתור התחלה אמליץ על שני תוספים שיגרמו לקוד שלנו להראות טוב יותר:

[Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

והתוסף השני:

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

אם ההתקנה לא עובד לכם דרך הלינק, אפשר להיכנס לעמוד התוספים דרך ה vs code
עצמו, לחפש את שני התוספים בשורת חיפוש ולהתקין.

ניצור תיקייה חדשה איפשהו במחשב, ונפתח אותה באמצעות ה vs code

![פתיחת תיקיית הפרויקט](open-folder.png)

כרגע אפשר ליצור קבצים עם סיומת (.js)  
שכמובן מסמנים שזהו קובץ ג׳אווה סקריפט  
רק למען התרגול ניצור גם קובץ (.html)
שזו בעצם השפה שבה כתובים כל אתרי האינטרנט.  
באמצעות הכפתור הזה:

![יצירת קובץ](create-file.png)

בעצם התפקיד של js הוא ״להחיות״ את דפי האינטרנט.  
מדפי אינטרנט סטטים ומשעממים, לדפי אינטרנט עם המון לוגיקה ודניאמיות!

תיקיית הפרוייקט שלנו אמורה להיראות כך:

![sasd](project-folder-finish.png)

בגלל שאנחנו מדברים רק על js
ולא על html  
אנחנו לא נתעמק בקוד ורק נעתיק אותו לתוך הקובץ עם סיומת ה (.html)  
**לא להיבהל!**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ככה רושמים הערות ! -->
    <script src="./helloWorld.js"></script>
    <!-- Files are in the same folder -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

בעצם הדבר היחיד שמעניין אותנו הוא התאג:

```html
<script src="our file path!"></script>
```

בעצם בתוך התאגית של הסקריפט יש לנו
src
שזה קיצור של source - מקור
ובתוך המירכאות אנחנו נשים לינק לקובץ הסקריפט שלנו שבעצם יופעל על אותו דף html  
זו הדרך לקשר בין הסקריפט לתוכן העמוד!

אגב אם נפתח קובץ מסוג (.html)
ונתחיל לרשום html
אז ה vs code ישלים אותנו לצורה המקובל
ללא התג <script>

![סניפט](html-snippet.png)

html5  
זו הגרסא החמישית של html והמקדמת ביותר  
מי שרוצה להתעמק עוד ב html יכול ללמוד מפה:

[קורס של קמפוס IL בחינם לגמרי!](https://campus.gov.il/course/ext-taasuka-html/)

אז אנחנו נתחיל לשחק עם js
ונראה את המשתנה באמצעות אתר אינטרנט.  
נתחיל ממש מהבסיס ונתקדם מהר מאוד!
