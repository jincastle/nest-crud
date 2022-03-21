import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

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
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    // @Body('title') title: string,
    // @Body('description') description: string,
    // 위에 문장대신 dto 이용에서 밑에 문장으로 변경
    @Body() CreateBoardDto: CreateBoardDto,
  ): Board {
    //board에 배열을 안주는 이유는 게시물 하나만 생성하기 때문
    return this.boardsService.createBoard(CreateBoardDto); //constructor(private boardsService: BoardsService) {} 을 가져와서 사용
  }

  @Get()
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }
}
