# ※ package.json 속성 설명

## `bin`

- bin 속성은 실행할 수 있는 패키지를 만들 때 정의한다.
- 패키지를 설치할 때 npm은 bin속성에 정의된 파일의 Symlink를 생성.
  ```json
  "bin": {
      "log-run": "bin/cli.js"
    },
  ```
- 여기서 "log-run"은 CLI 명령어가 된다.

## `peerDependencies`

- 호환성 모듈을 지정한다.
- 배포시 포함되지 않는다. 대신 호환성 모듈이 없으면 경고 메시지 준다.

  ```json
  "peerDependencies": {
    "jquery": "1.9.1 - 3",
    "popper.js": "^1.12.9"
  }
  ```

## `engines`

- 패키지 Node 버전을 지정.
  ```json
  "engines": {
    "node": ">=0.10.3 <0.12",
    "npm" : "~1.0.20"
  }
  ```

<br/>
<br/>

# ※ npm 명령어

## `npm link`

- 명령어를 수행한 위치의 패키지를 global한 상태로 심볼릭 링크로 연결한다.
- 심볼릭 링크로 생성되었기 때문에 bin/cli.js 를 수정하고 실행하더라도 수정된 내용이 반영된다.

## `npm ls -g --depth=0`

- global 하게 링크된 명령어를 확인할 수 있다.

## `npm info {패키지명}`

- 중복이름으로 패키지 출시할 수 없다.
  ```bash
  $ npm info test2523452345
    npm ERR! code E404
    npm ERR! 404 'test465468486484' is not in the npm registry.
    npm ERR! 404 You should bug the author to publish it
    npm ERR! 404 (or use the name yourself!)
  ```
- 위와 같이 404가 뜨는 패키지명이면 출시가능.

## `npm install {패키지디렉터리}`

- 로컬환경에서 테스트한다.
  ```bash
  cd examples
  npm init -y
  npm install ../../npm-deploy
  ```

## `npm publish`

- 배포한다.
- 배포하기 전에 특정 명령어를 실행할 필요가 있다면 아래와 같이 스크립트의 "prepare" 속성 사용.
  ```json
  "scripts": {
    "prepare": "rm -rf dist && tsc"
  },
  ```

## `npm unpublish`

- 배포 모듈 삭제
  ```bash
  # 특정 버전
  npm unpublish npm-deploy@0.0.1
  # 모든 버전
  npm unpublish daleseo-hello-npm -f
  ```

<br/>
<br/>

# ※ 설정파일

## `npmignore`

- 배포에서 제외시킬 파일 설정, 예를 들면 패키지 개발에 사용했지만 배포시 필요없는 것들.
