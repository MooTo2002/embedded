// 사용자 정보 저장 및 불러오기
document.getElementById('user-info-form').addEventListener('submit', function(event) {
  event.preventDefault(); // 폼 제출 중지
 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
 
  if (name && email) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      alert("사용자 정보가 저장되었습니다.");
      displayUserInfo(); // 저장 후 사용자 정보 출력
  } else {
      alert("모든 필드를 입력해주세요.");
  }
 });
 
 // 저장된 사용자 정보를 화면에 출력하는 함수
 function displayUserInfo() {
  const savedName = localStorage.getItem('name');
  const savedEmail = localStorage.getItem('email');
  const userInfoDisplay = document.getElementById('user-info-display');
 
  if (savedName && savedEmail) {
      userInfoDisplay.innerHTML = `<p>이름: ${savedName}</p><p>Email: ${savedEmail}</p>`;
  } else {
      userInfoDisplay.innerHTML = '<p>저장된 사용자 정보가 없습니다.</p>';
  }
 }
 
 // 페이지 로드 시 저장된 알림 및 사용자 정보 불러오기
 
  // 사용자 정보 불러오기
  displayUserInfo();
 
  const savedName = localStorage.getItem('name');
  const savedEmail = localStorage.getItem('email');
  if (savedName) {
      document.getElementById('name').value = savedName;
  }
  if (savedEmail) {
      document.getElementById('email').value = savedEmail;
  }
 
 