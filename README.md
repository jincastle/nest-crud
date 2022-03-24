<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Providers, Service란

### Providers 란

프로바이더는 Nest의 기본 개념입니다. 대부분의 기본 Nest 클래스는 서비스, 리포지토리 팩토리 헬퍼등 프로바이더로 취급될 수 있습니다
프로바이더의 주용 아이디어는 종속성으로 주입 할 수 있다는 것입니다 즉 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 연결하는 기능은 대부분 Nest런타임 시스템에 위임될 수 있습니다.

### Provider 등록하기

Provider를 사용하기 위해서는 이것을 nest에 등록해줘야지 사용할 수가 있습니다.
등록하기 위해서는 module 파일에서 할 수 있습니다. module 파일에 providers항목안에 해당 모듈에서 사용하고자 하는 provider를 넣어주면 됩니다

Provider -> service A
Provider -> service B
Provider -> service C

### 모델 정의하기 위해서는

class를 이용하거나 interface를 이요하면 된다.
interface -> 변수의 타입만을 체크합니다.
classes -> 변수의 타입도 체크하고 인스턴스 또한 생성할 수가 있습니다.

모델 만들기 -> boards.model 생성 interface 구조 정의

### BoradStatus

게시물이 공게할지 비공개 할지 정하는 상태
status에 <span>enum<span>을 이용해서 정의한 boardStatus를 넣어주면 BoardStatus에서 넣어준 값 상태만을 사용할 수 있다

### type을 정해주면 좋은 이유

타입 정의해주는 것은 선택사항

하지만 이렇게 타입을 정의해주므로서 원하는 타입과 다른 코드를 사용할 시 에러가 발생합니다

그리고 코드를 읽는 입장에서 더 코드를 쉽게 이해하며 읽을 수 있습니다.

### 게시물 생성하기

기능을 만들기 위해서는 그 기능을 처리하는 로직인 service에서 코딩을 하고 controller에서 서비스를 불러온다

### id 설정

id는 유니크값을 줘야한다 유니크 값을 주는 여러 방법이 있지만 uuid모듈을 이용해서 유니크한 값을 주겠습니다.

uuid 모듈 설치 npm install uuid --save
원하는 곳에 import 해준다
import {v1 as uuid} from 'uuid;

### 클라이언트에서 보내온값(파라미터) 핸들러 방법

@Body body를 이용해서 가져온다
이렇게 하면 모든 request에서 보내온 값을 가져올 수 있으며 하나씩 가져오려면 @Body('title') title 혹은 @Body('description') description 이런식으로 가져오면 된다.

## DTO(data transfer Object)

### DTO는

계층간 데이터 교환을 위한 객체
DB에서 데이터를 얻어 service나 Controller 등으로 보낼때 사용하는 객체를 말합니다
DTO는 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체입니다.
interface나 class를 이용해서 정의 될 수 있습니다.(하지만 클래스를 이용하는것을 nestjs에서는 추천하고 있습니다.)

### DTO를 쓰는 이유

- 데이터 유효성을 체크하는데 효율적입니다.
- 더 안정적인 코드를 만들어 줍니다. 타입스크립트의 타입으로도 사용

## Nestjs Pipe

파이프는 @injectable() 데코레이터로 주석이 달린 클래스 입니다
파이프는 data transformation과 data validation을 위해서 사용
파이프는 컨트롤러 경로 처리기에 의해 처리되는 인수에 대해 작동

nest는 메소드가 호출되기 직전에 파이프를 삽입하고 파이프는 메소드로 향하는 인수를 수신하고 이에 대해 작동합니다

client -> pipe -> 통과 -> 결과값 -> client

### data transformation

입력 데이터를 원하는 형식으로 변환
만약 숫자를 받길 원하는데 문자열 형식으로 온다면 파이프에서 자동으로 숫자로 바꿔줍니다.
string to integer
string '6' => integer 6

### data validation

입력 데이터를 평가하고 유효한 경우 변경되지 않는 상태로 전달하면 됩니다. 그렇지 않으면 데이터가 올바르지 않을 때 예외를 발생시킵니다.

만약 이름의 길이가 10자 이하여야 하는데 10자 이상되면 에러를 발생

---

파이프는 위에 두가지 모든 경우에서
라우트 핸들러가 처리하는 인수에 대해서 작동합니다
그리고 파이프는 메소드를 바로 직전에 작동해서 메소드로 향하는 인수에 대해서 변환할 것이 있으면 변환하고 유효성 체크를 위해서도 호출

### PIPE 사용하는 법(Binding Pipes)

파이프를 사용하는 방법(Binding pipes)은 세가지로 나눠질수 있습니다.
handler-level pipes, parameter-level pipes, global-level pipes 입니다
이름에서 말하는 것 그대로 ㅎ핸들러 레벨, 파라미터 레벨, 글로벌 레벨로 파이프 사용할 수 있습니다.

### Nestjs에서는 기본적으로 6가지 제공

- ValidationPipe
- ParseIntPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- DefaultValuePipe
