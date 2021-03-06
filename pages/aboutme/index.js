import Hero from "../../components/home-page/hero";
import Image from "next/image";
// import MyIcons from "../../components/about-me/programming-icon";

function AboutMePage() {
  return (
    <div style={{ textAlign: "center", fontSize: 20 }}>
      <Hero />
      <div style={{ padding: 20 }}>
        <p>אני דוד אבן חיים סטודנט בשנה השלישית בהנדסת תוכנה</p>
        <p>.כרגע עובד בסטארטפ כמתכנת פול סטאק</p>
        <p>
          {" "}Mobile & Web מפתח אפליקציות
          <br />
          באמצעות טכנולוגיות שכולן מבוססות על ג׳אוה סקריפט, כמו ריאקט, ריאקט
          נייטיב ועוד
        </p>
        <p>
          נתקלתי בהמון סטודנטים שהתקשו מאוד בלימודי שפות תכנות נוספות למה
          שלומדים
          <br />
          באקדמיות רק בגלל קשיים בשפה האנגלית בבלוג זה אלמד אותכם את הבסיס של
          <br />
          פיתוח אתרי אינטרנט ואפליקציות מובייל - ג׳אווה סקריפט
        </p>
        <p>אעלה לכאן פוסטים שבועיים</p>
      </div>
    </div>
  );
}

export default AboutMePage;
