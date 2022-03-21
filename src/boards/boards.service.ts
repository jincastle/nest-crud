import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  //게시판 생성
  createBoard(createBoardDto: CreateBoardDto) {
    // const title = createBoardDto.title;
    // 위 처럼 따론 선언해도 되지만 밑에 처럼 한번에 해도 됨
    const { title, description } = createBoardDto;
    const board = {
      id: uuid(),
      title, // title: title,
      description, // description : description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board); // 위에 있는 getAllBoards() 에 넣어줌
    return board;
  }

  //특정 게시물 가져오기(find : 찾기)
  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  //게시물 삭제(filter : 필터링) : id가 다른것만 남겨준다
  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
