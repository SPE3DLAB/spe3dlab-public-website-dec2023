import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../service/translation.service';
import { getEnumType } from 'src/app/util/utils';

@Pipe({ name: 'getTranslation', pure: false })
export class GetTranslationPipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(arg: any, enumTypeName?: string) {
    let enumValueAsStr = null;
    if (enumTypeName != null) {
      enumValueAsStr = getEnumType(enumTypeName)[arg];

      let translation = this.translationService.getTranslation(enumValueAsStr);

      if (!this.translationService.hasTranslation(enumValueAsStr)) {
        let translationIdWithPrefix = `${enumTypeName}_${enumValueAsStr}`;
        if (this.translationService.hasTranslation(translationIdWithPrefix)) {
          return this.translationService.getTranslation(
            translationIdWithPrefix
          );
        } else {
          return enumValueAsStr;
        }
      }

      return translation;
    }

    return this.translationService.getTranslation(arg);
  }
}
