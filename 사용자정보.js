// 폼이 제출될 때 실행되는 이벤트 리스너
document.getElementById('user-info-form').addEventListener('submit', function(event) {
  event.preventDefault(); // 기본 폼 제출 동작을 중지

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;

  if (name && age && gender) {
      // 로컬 스토리지에 이름, 나이, 성별을 저장
      localStorage.setItem('name', name);
      localStorage.setItem('age', age);
      localStorage.setItem('gender', gender);

      // 사용자 정보를 화면에 출력
      displayUserInfo();

      // 로그인 상태로 전환
      toggleLoginState(true);
  } else {
      alert("모든 필드를 입력해주세요.");
  }
});

// 저장된 사용자 정보를 화면에 출력하는 함수
function displayUserInfo() {
  const savedName = localStorage.getItem('name');
  const savedAge = localStorage.getItem('age');
  const savedGender = localStorage.getItem('gender');

  const userInfoDisplay = document.getElementById('user-info-display');

  // 사용자 정보를 출력
  if (savedName && savedAge && savedGender) {
      userInfoDisplay.innerHTML = `<p>이름: ${savedName}</p><p>나이: ${savedAge}</p><p>성별: ${savedGender}</p>`;
      userInfoDisplay.style.display = 'block';
  }
}

// 로그인 상태에 따라 입력 폼과 로그아웃 버튼을 토글하는 함수
function toggleLoginState(isLoggedIn) {
  const userInfoForm = document.getElementById('user-info-form');
  const userInfoDisplay = document.getElementById('user-info-display');
  const logoutBtn = document.getElementById('logout-btn');

  if (isLoggedIn) {
      userInfoForm.style.display = 'none';  // 로그인 후 입력 폼을 숨김
      userInfoDisplay.style.display = 'block';  // 사용자 정보 출력
      logoutBtn.style.display = 'block';  // 로그아웃 버튼 표시
  } else {
      userInfoForm.style.display = 'block';  // 로그아웃 후 입력 폼 표시
      userInfoDisplay.style.display = 'none';  // 사용자 정보 숨김
      logoutBtn.style.display = 'none';  // 로그아웃 버튼 숨김
  }
}

// 로그아웃 버튼 클릭 시 동작하는 이벤트 리스너
document.getElementById('logout-btn').addEventListener('click', function() {
  // 로컬 스토리지에서 사용자 이름, 나이, 성별을 삭제
  localStorage.removeItem('name');
  localStorage.removeItem('age');
  localStorage.removeItem('gender');

  alert("로그아웃되었습니다.");
  displayUserInfo();
  toggleLoginState(false);  // 로그아웃 후 로그인 상태로 전환
});

// 페이지가 로드될 때 저장된 사용자 정보를 불러오는 함수
function init() {
  const savedName = localStorage.getItem('name');
  const savedAge = localStorage.getItem('age');
  const savedGender = localStorage.getItem('gender');

  if (savedName && savedAge && savedGender) {
      displayUserInfo();
      toggleLoginState(true);  // 저장된 정보가 있으면 로그인 상태로 전환
  } else {
      toggleLoginState(false);  // 저장된 정보가 없으면 로그인 상태 유지
  }
}

// 'init' 함수 실행
init();
