// 약 검색 함수
function searchDrug() {
  const searchInput = document.getElementById('search-input').value;
  const drugInfo = document.getElementById('drug-info');
  const drug = drugDatabase.find(d => d.name === searchInput);
 
  if (drug) {
      drugInfo.innerHTML = `<h3>${drug.name}</h3><p>${drug.description}</p>`;
  } else {
      drugInfo.innerHTML = `<p>찾으시는 약을 찾을 수 없습니다.</p>`;
  }
 }