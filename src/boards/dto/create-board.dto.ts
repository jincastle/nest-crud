import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty() //유효성 검사(값이 없으면 에러) "title should not be empty"
  title: string;

  @IsNotEmpty() //"description should not be empty"
  description: string;
}
