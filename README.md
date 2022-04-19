## 💪🏻 원티드 프리온보딩 프론트엔드 코스 선발 과제

### 1. 공통 적용 사항

#### **CSS Modules / SCSS**

- CSS Modules 사용을 통해 클래스 명명에 대한 고민을 줄이고, 컴포넌트별로 CSS 파일을 분리함으로써 파일 관리를 용이하게 했습니다. 대규모 프로젝트라면 CSS 파일이 너무 많아지는 문제가 생길 수 있겠지만, 이처럼 소규모 프로젝트에서는 좋은 선택이라 생각됩니다.
- SCSS의 상위 선택자 참조, 네임 스페이스 공유 속성 표시, mixin 기능을 사용했습니다.

#### **svg**

- svg 파일로 생성한 아이콘을 사용했습니다. 이미지 파일에 비해 훨씬 작은 용량과, svg 파일 자체에서 CSS를 수정해 재사용성을 높일 수 있다는 장점이 있었습니다.

#### **netlify**

- 정적 사이트를 원하는 url로 쉽게 배포해주는 netlify를 통해 배포했습니다.
  https://wanted-pre-onboarding-frontend.netlify.app/

---

### 2. 구현

#### **_1. Toggle.js_**

> 구현 상세

- checkbox type input에 checked 상태를 관리함으로써 toggle 기능을 구현했습니다.
- checked 상태에 따라 글자 색상을 inline style 로 변경되도록 작성했습니다.
- div class="ball" 을 만들어 애니매이션을 구현했습니다.

> 구현 고민

- 하나의 checkbox 로 생성할지, 두 개의 태그로 구분할지 고민했는데, inline style 이 허용된다면 하나의 input 으로 만드는 게 가독성이 좋겠다고 판단했습니다.

#### **_2. Tab.js_**

> 구현 상세

- tab menu를 상위 컴포넌트로부터 받아오게끔 구현하여 재사용성을 높였습니다.
- DISTANCE 상수를 만들어, 하단 바를 translateX(${index \* DISTANCE}px)로 이동하도록 구현해 재사용성을 높였습니다.

> 구현 고민

- 중복 코드 작성을 줄이기 위해 배열에 map을 사용함으로써 index 를 통한 거리 계산 아이디어를 떠올릴 수 있었습니다.

#### **_3. Slider.js_**

> 구현 상세

- 선택된 값(isSelected)의 상태를 관리하여, input 에 change 이벤트가 발생할 경우, 하단의 수치 클릭 이벤트가 발생할 경우 상단에 실시간으로 값을 보여주도록 했습니다.
- steps 배열을 생성하여 각 step 과 isSelected 의 값을 비교함으로써 색상을 변경할 수 있게 했습니다.
- slider thumb CSS를 outline, box-shadow 를 통해 구현했습니다.
- mixin 을 사용하여 크로스 브라우징 CSS를 작성했습니다.

> 구현 고민

- 개인적으로 다섯 문항 중 CSS가 가장 까다로웠습니다. 처음엔 dots 태그를 따로 만들지 않고, ::before 를 통해 가상 요소를 생성하여 작업했으나, 값 변화에 따른 색상 변경이 어려웠습니다. dots 를 div 태그로 따로 생성하여 작업함으로써 애니매이션을 구현할 수 있었습니다.
- dots 간격을 맞추기가 쉽지 않아서, margin 으로 해결했습니다.
- slider thumb 크기가 border 조절로 커질 수 없다는 걸 깨닫고, outline 과 box-shadow 를 사용했습니다.

#### **_4. Input.js_**

> 구현 상세

- 정규식을 사용하여 올바른 이메일 형식을 판단했습니다.
- 이메일 입력값(emailValue), 올바른 형식 판단(isCorrect) 상태를 관리하여 이메일 입력값이 없거나 올바른 형식이 아닐 경우와 올바른 형식의 입력값이 주어질 경우를 구분했습니다.
- 이메일 입력값이 change 될 때 마다 올바른 형식인지 판단하여, 체크 아이콘 색상을 변경하도록 했습니다.
- focus/blur 상태를 감지하는 activeBorder 상태를 관리하여, 잘못된 형식의 이메일을 입력한 상태에서 blur 상태일 경우 경고 메세지를 표시했습니다.
- password input 의 눈 아이콘이 click 이벤트를 감지하도록 하여, click 된 상태와 안 된 상태의 input type 을 구분했습니다.

> 구현 고민

- 이메일 입력창 하나에 change, focus, blur 이벤트를 적용하는 과정에서, 이벤트에 대해 깊게 고민할 수 있었습니다.
- 올바른 이메일 형식을 고민하다, 특수문자로 시작하지 않는 4자리 이상의 아이디 + @ + 1자리 이상의 문자(\w) + . + 2자리 이상 8자리 이하의 문자(\w)로 적용했습니다.

#### **_5. Dropdown.js_**

> 구현 상세

- 데이터 양이 많아질 경우를 고려하여, searchData 를 props 로 넘겨 받게끔 작성했습니다.
- 클릭(isClicked), 선택(isSelected), 검색(isSearched) 상태를 관리하여 드롭 다운 클릭 유무에 따라 선택 리스트가 나타나거나 사라지도록 구현했습니다.
- 드롭 다운 클릭을 했으나 검색하지 않은 경우, 검색한 경우를 구분하여 필터링 된 리스트를 보여주도록 했습니다.
- 정규식 test 메소드를 사용하여 대소문자 구분을 하지 않도록 했습니다.

> 구현 고민

- select 태그를 사용하려 했으나, 검색창을 추가한다거나 하는 데 한계가 있겠다고 판단했습니다.
- ul, li 를 사용해 리스트를 생성했고, 개인적으로 가장 재밌게 만든 과제였습니다.

---

### 3. 느낀점

피드백 없이 만들다 보니, '더 나은 방법이 있지 않을까?' 하는 생각에 과제를 마친 후에도 고민이 계속됐던 것 같습니다.

- style 을 js 에서 제어하는 것이 과연 괜찮은 것인가?
- 삼항 연산자를 쓰는 게 가독성을 해치지 않는가?

늘 현재의 최선이 정답은 아닐 것이라 생각하기에, 하나를 써도 이유를 잘 알고 써야겠다는 다짐을 하게 되었습니다. 실제로 제작할 가능성이 다분한 과제를 할 수 있게 되어 즐겁고 유익한 시간이었습니다:)
