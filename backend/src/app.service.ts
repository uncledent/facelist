import { Injectable } from '@nestjs/common';
import { FaceItem } from './interfaces/faceItem.interface';
import { image, random, name } from 'faker';

const ITEMS_TO_GENERATE_COUNT = 40;

@Injectable()
export class AppService {
  getFaceList(): FaceItem[] {
    const result = [];
    for (let index = 0; index < ITEMS_TO_GENERATE_COUNT + 1; index++) {
      result.push({
        id: `${index}`, // this is a string in the required data schema
        name: `${name.firstName()} ${name.lastName()}`,
        avatar: image.avatar(),
      });
    }
    return result;
  }
}
