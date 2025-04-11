import { CreateTest12Input } from './create-test12.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTest12Input extends PartialType(CreateTest12Input) {
  id: number;
}
