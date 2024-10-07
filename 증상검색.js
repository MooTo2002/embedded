// 증상으로 약물 검색 함수
function searchDrugBySymptom() {
  const inputSymptom = document.getElementById('search-input-symptom').value.trim(); // 입력된 증상
  const drugInfoDiv = document.getElementById('drug-info-symptom'); // 결과를 출력할 div
  drugInfoDiv.innerHTML = ''; // 기존 결과 초기화

  if (!inputSymptom) {
      drugInfoDiv.innerHTML = '<p>증상을 입력하세요.</p>';
      return;
  }

  // 입력된 증상과 일치하는 약물 검색 (소문자로 변환하여 비교)
  const matchingDrugs = drugData.filter(drug =>
      drug.symptoms.some(symptom => symptom.toLowerCase().includes(inputSymptom.toLowerCase()))
  );

  // 검색 결과 출력
  if (matchingDrugs.length > 0) {
      const resultHTML = matchingDrugs.map(drug => `<p><strong>${drug.name}:</strong> ${drug.symptoms.join(', ')}</p>`).join('');
      drugInfoDiv.innerHTML = resultHTML;
  } else {
      drugInfoDiv.innerHTML = '<p>해당 증상에 맞는 약을 찾을 수 없습니다.</p>';
  }
}