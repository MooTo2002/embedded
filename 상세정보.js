// 약물 상세정보 검색 함수 추가
function searchDrugDetail() {
  const searchInput = document.getElementById('search-detail-input').value.trim();
  const drugDetailInfo = document.getElementById('drug-detail-info');
  
  const drugDetail = drugData3.find(drug => drug.name === searchInput);

  if (drugDetail) {
      // description 내용에 줄바꿈 추가
      const descriptionLines = drugDetail.description.split(', ').map(line => `<p>${line}</p>`).join('');
      drugDetailInfo.innerHTML = `<h3>${drugDetail.name}</h3>${descriptionLines}`;
  } else {
      drugDetailInfo.innerHTML = '<p>해당 약물의 상세 정보를 찾을 수 없습니다.</p>';
  }
}
 