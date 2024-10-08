function searchDrug2() {
  const searchInput = document.getElementById('searchInput').value;
  const resultList = document.getElementById('resultList');
  resultList.innerHTML = '';

  const results = drugData2.filter(drug => {
      return drug.symptoms.some(symptom => searchInput.includes(symptom));
  });

  if (results.length > 0) {
      results.forEach(drug => {
          const li = document.createElement('li');
          li.textContent = drug.name;
          resultList.appendChild(li);
      });
  } else {
      resultList.innerHTML = '<li>해당 증상을 가진 약물이 없습니다.</li>';
  }
}