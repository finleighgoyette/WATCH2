var button = document.getElementById("clickme");
const results = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
}


button.addEventListener('click', ({target}) => {
  console.log('test');
  if (!target.matches('button')) return;


  // count += 1;
  results[target.dataset.mood]++;
  console.log(`You thought: ${target.dataset.mood}, the results are: `, results);
});
