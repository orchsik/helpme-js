# ※ package.json 속성 설명

## "bin"

- bin 속성은 실행할 수 있는 패키지를 만들 때 정의한다.
- 패키지를 설치할 때 npm은 bin속성에 정의된 파일의 Symlink를 생성.
  ```json
  "bin": {
      "log-run": "bin/cli.js"
    },
  ```
- 여기서 "log-run"은 CLI 명령어가 된다.

<br/>
<br/>

# ※ npm 명령어

## npm link

- 명령어를 수행한 위치의 패키지를 global한 상태로 심볼릭 링크로 연결한다.
- 심볼릭 링크로 생성되었기 때문에 bin/cli.js 를 수정하고 실행하더라도 수정된 내용이 반영된다.

## npm ls -g --depth=0

- global 하게 링크된 명령어를 확인할 수 있다.
