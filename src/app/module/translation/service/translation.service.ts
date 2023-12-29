import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { LOCALE_ID, Inject } from '@angular/core';
import { parseString } from 'xml2js';
/* NOTE: 
  'xml2js' is already a dependecy of angular but we needed to install packages:
  - stream (npm install stream)
  - timers (npm install timers)
  - xml2js (npm install xml2js)
  - @type/xml2js (npm i --save-dev @types/xml2js)
*/

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  allowedLanguages: string[] = ['en', 'fr'];
  supportedLanguage?: string;
  translations: any = {};
  private translationsLoadedSource = new Subject<boolean>();
  translationsLoaded$ = this.translationsLoadedSource.asObservable();

  translationsForPrimengCalendar: any = {};

  constructor(
    private http: HttpClient,
    @Inject(LOCALE_ID) protected localeId: string
  ) {}

  getSupportedLanguageCode() {
    // return "fr"; // force to French for development (TODO: do better than this)

    if (this.supportedLanguage != null) {
      return this.supportedLanguage;
    }
    // console.log(`this.localeId[${this.localeId}]`);
    let supportedLanguage = this.localeId;
    if (supportedLanguage.indexOf('-') > 0) {
      supportedLanguage = this.localeId.substr(0, this.localeId.indexOf('-'));
    }
    if (!this.allowedLanguages.includes(supportedLanguage)) {
      console.log(
        `language[${supportedLanguage}] is not allowed, we fall back to 'en'`
      );
      supportedLanguage = 'en';
    }
    // console.log(`supportedLanguage[${supportedLanguage}]`);
    this.supportedLanguage = supportedLanguage;
    return supportedLanguage;
  }

  getSupportedLanguageCodeForNiceType() {
    const allowedLanguagesForNiceType = ['en', 'fr']; // A subset of the languages supported
    const generalSupportedLanguage = this.getSupportedLanguageCode();
    if (!allowedLanguagesForNiceType.includes(generalSupportedLanguage)) {
      return 'en';
    } else {
      return generalSupportedLanguage;
    }
  }

  getTranslationForPrimengCalendar() {
    let language = this.getSupportedLanguageCode();
    if (language in this.translationsForPrimengCalendar) {
      return this.translationsForPrimengCalendar[language];
    }
  }

  hasTranslation(translationId: string): boolean {
    if (this.getTranslation(translationId) == translationId) {
      return false;
    } else {
      return true;
    }
  }

  getTranslation(translationId: string): string {
    if (translationId == null) {
      translationId = 'null';
    }

    if (typeof translationId == 'boolean') {
      translationId = String(translationId);
    }

    // Remove the optional prefix
    if (translationId.indexOf('i18n@@') > -1) {
      translationId = translationId.replace('i18n@@', '');
    } else if (translationId.indexOf('@@') > -1) {
      translationId = translationId.replace('@@', '');
    }

    // If there is a translation we use it
    if (
      Object.keys(this.translations).length > 0 &&
      this.translations[translationId] != null
    ) {
      let translationValue = this.translations[translationId].trim();
      return translationValue;
    } else {
      return translationId;
    }
  }

  getSuffixedAttributeName(attrName: string) {
    return attrName + '_' + this.getSupportedLanguageCode();
  }

  getSuffixedAttributeNameForNiceTypeSUpportedLanguage(attrName: string) {
    return attrName + '_' + this.getSupportedLanguageCodeForNiceType();
  }

  loadTranslations(): Promise<any> {
    this.loadPrimengCalendarTranslations();

    // // Check if the translation has already been loaded
    // if (Object.keys(this.translations).length > 0) {
    //   console.log("translations already loaded");
    //   return;
    // }

    // Get the current language
    let language = this.getSupportedLanguageCode();

    let url = 'assets/translation/messages.xlf';

    if (language != 'fr') {
      url = 'assets/translation/messages.' + language + '.xlf';
    }

    return new Promise((resolve, reject) => {
      return this.http
        .get(url, { responseType: 'text' })
        .subscribe((result) => {
          parseString(result, (err: any, result: any) => {
            for (let o of result['xliff']['file'][0]['body']) {
              for (let tu of o['trans-unit']) {
                // If the file is messages.xlf there is no 'target' tag in it
                if (tu.target != null) {
                  this.translations[tu.$.id] = tu.target[0];
                } else {
                  this.translations[tu.$.id] = tu.source[0];
                }
              }
            }
            resolve(true);
          });
        }); // ENDOF  this.http.get(url, {responseType: 'text'}).subscribe()
    }); // ENDOF return new Promise()
  }

  loadPrimengCalendarTranslations() {
    this.translationsForPrimengCalendar['fr'] = {
      firstDayOfWeek: 0,
      dayNames: [
        'Dimanche',
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi',
      ],
      dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
      monthNames: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Jun',
        'Juillet',
        'Aout',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ],
      monthNamesShort: [
        'Jan',
        'Fev',
        'Mar',
        'Avr',
        'Mai',
        'Jun',
        'Jui',
        'Aou',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ],
      today: "Aujourd'hui",
      clear: 'Nul',
    };
    // We also define the English version because like this we don't need bother to hide the '[locale]' attribute when the language is English
    this.translationsForPrimengCalendar['en'] = {
      firstDayOfWeek: 0,
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      today: 'Today',
      clear: 'Clear',
    };
  }
}
