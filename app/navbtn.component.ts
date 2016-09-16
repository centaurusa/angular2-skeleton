import { Component } from '@angular/core';

@Component({
    selector: 'nav-btn',
    template: `
    <nav class="dropdown" (click)="showList()" >
        <ul>
            <li><a href="#" class="btn"
            [style.borderColor]="hiddenList? '#fdca22': ''"
            >חבילות נופש<span class="glyphicon arrow-down"
             [class.glyphicon-chevron-down]="hiddenList"
             [class.glyphicon-chevron-up]="!hiddenList"
             [style.color]="hiddenList? '': '#fdca22'"
              ></span></a>
                <ul class="inner" [style.display]="hiddenList? '': 'block'">
                    <li *ngFor="let item of data1">
                        <a href="#">{{ item.name }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>

    `,
    styleUrls: ['app/css/nav-btn.css']
})


export class NavBtn {

    hiddenList = true;

    showList() {
        this.hiddenList = !this.hiddenList;
    }

    data1 = [
  {
    "id": null,
    "name": "כל המלונות"
  },
  {
    "id": 17457,
    "name": "אורכידאה אילת"
  },
  {
    "id": 17487,
    "name": "אורכידאה הריף החדש אילת"
  },
  {
    "id": 17642,
    "name": "אילות-ארוח כפרי"
  },
  {
    "id": 17462,
    "name": "אמריקנה"
  },
  {
    "id": 17649,
    "name": "אנ\"א אילת"
  },
  {
    "id": 17416,
    "name": "אסטרל ויליג'"
  },
  {
    "id": 17596,
    "name": "אסטרל מרינה"
  },
  {
    "id": 17414,
    "name": "אסטרל נירוונה"
  },
  {
    "id": 17415,
    "name": "אסטרל סיסייד"
  },
  {
    "id": 17417,
    "name": "אסטרל קורל"
  },
  {
    "id": 17456,
    "name": "אקווה מרין"
  },
  {
    "id": 17486,
    "name": "ארקדיה ספא"
  },
  {
    "id": 17477,
    "name": "דליה אילת"
  },
  {
    "id": 17423,
    "name": "דן אילת"
  },
  {
    "id": 17426,
    "name": "דן פנורמה אילת"
  },
  {
    "id": 17480,
    "name": "הוליטל סיאסטה"
  },
  {
    "id": 17585,
    "name": "הילטון מלכת שבא"
  },
  {
    "id": 17481,
    "name": "הים האדום"
  },
  {
    "id": 17590,
    "name": "הרודס בוטיק אילת"
  },
  {
    "id": 17576,
    "name": "הרודס ויטאליס אילת"
  },
  {
    "id": 17591,
    "name": "הרודס פאלאס אילת"
  },
  {
    "id": 17490,
    "name": "ויסטה אילת-מלון בוטיק"
  },
  {
    "id": 17444,
    "name": "ישרוטל אגמים אילת"
  },
  {
    "id": 17448,
    "name": "ישרוטל המלך שלמה אילת"
  },
  {
    "id": 17483,
    "name": "ישרוטל הנסיכה"
  },
  {
    "id": 17447,
    "name": "ישרוטל ים סוף"
  },
  {
    "id": 17450,
    "name": "ישרוטל לגונה אילת"
  },
  {
    "id": 17451,
    "name": "ישרוטל ספורט קלאב אילת"
  },
  {
    "id": 17453,
    "name": "ישרוטל רויאל ביץ` אילת"
  },
  {
    "id": 17454,
    "name": "ישרוטל רויאל גארדן אילת"
  },
  {
    "id": 17455,
    "name": "ישרוטל ריביירה קלאב אילת"
  },
  {
    "id": 17579,
    "name": "לאונרדו פלאזה  אילת"
  },
  {
    "id": 17558,
    "name": "לאונרדו פריוויליג' אילת"
  },
  {
    "id": 17559,
    "name": "לאונרדו קלאב אילת- פתאל"
  },
  {
    "id": 17391,
    "name": "לאונרדו רויאל ריזורט אילת"
  },
  {
    "id": 17432,
    "name": "לה פלאיה"
  },
  {
    "id": 17393,
    "name": "מג'יק סאנרייז קלאב"
  },
  {
    "id": 17394,
    "name": "מג'יק פאלאס- פתאל"
  },
  {
    "id": 17697,
    "name": "מלון מרקש אילת"
  },
  {
    "id": 17654,
    "name": "מלון  5 כוכבים באילת"
  },
  {
    "id": 17665,
    "name": "מלון 4 כוכבים באילת"
  },
  {
    "id": 17674,
    "name": "מלון RIO אילת"
  },
  {
    "id": 17513,
    "name": "מלוני אילת"
  },
  {
    "id": 17390,
    "name": "מרידיאן אילת-פתאל"
  },
  {
    "id": 17410,
    "name": "נובה LIKE-רשת אטלס"
  },
  {
    "id": 17399,
    "name": "סי הוטל אילת"
  },
  {
    "id": 17609,
    "name": "עדי"
  },
  {
    "id": 17624,
    "name": "פטרה"
  },
  {
    "id": 17532,
    "name": "פירסט קלאב – אילת"
  },
  {
    "id": 17553,
    "name": "פרימה מיוזיק אילת"
  },
  {
    "id": 17392,
    "name": "קוראל ביץ' קלאב U"
  },
  {
    "id": 17564,
    "name": "קיסר פרימייר אילת"
  },
  {
    "id": 17567,
    "name": "קלאב אין אילת"
  },
  {
    "id": 17568,
    "name": "קלאב הוטל אילת"
  },
  {
    "id": 17434,
    "name": "קראון פלזה אילת"
  },
  {
    "id": 17570,
    "name": "רימונים אילת"
  },
  {
    "id": 17525,
    "name": "רימונים סנטרל פארק אילת"
  },
  {
    "id": 17627,
    "name": "BLUE מלון"
  }
]
}