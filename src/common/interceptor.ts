import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const statusCode = context.switchToHttp().getResponse().statusCode;

        if (
          typeof data === 'object' &&
          data !== null &&
          'items' in data &&
          'count' in data
        ) {
          return {
            statusCode,
            message: 'success',
            data: data.items,
            count: data.count,
          };
        }

        return {
          statusCode,
          message: 'success',
          data,
        };
      }),
    );
  }
}
