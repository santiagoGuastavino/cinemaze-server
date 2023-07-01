import { HttpException, HttpStatus } from '@nestjs/common';
import { I18nContext } from 'nestjs-i18n';
import { ResponseMessage } from 'src/common/dtos/response.dto';

export class AlreadyInitializedException extends HttpException {
  constructor(i18n: I18nContext) {
    super(
      {
        statusCode: HttpStatus.CONFLICT,
        message: ResponseMessage.CONFLICT,
        errors: [
          {
            children: [],
            constraints: {
              ALREADY_INITIALIZED: i18n.t('exceptions.ALREADY_INITIALIZED'),
            },
          },
        ],
      },
      HttpStatus.CONFLICT,
    );
  }
}
