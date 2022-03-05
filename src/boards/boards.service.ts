import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  //게시판 생성
  createBoard(title: string, description: string) {
    const board = {
      id: uuid(),
      title, // title: title,
      description, // description : description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board); // 위에 있는 getAllBoards() 에 넣어줌
    return board;
  }
}
