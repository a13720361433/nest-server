import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  sendMessage(params) {
    const uri =
      'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=a0b75a7f-f711-4e4f-a053-7b59f3a7550d';

    return this.httpService
      .post(uri, params)
      .pipe(map((response) => response.data));
  }
}
