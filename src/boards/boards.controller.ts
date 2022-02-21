import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  // boardsService: BoardsService;

  // constructor(boardsService: BoardsService) {
  //   this.boardsService = boardsService;
  // }

  // @Get()
  // getAllTask(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }

  //private 사용이유는 이  클래스 안에서만 사용하기 위헤
  constructor(private boardsService: BoardsService){}

    this.boardsService.getAllBoards();
}
