import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-food-cost',
  standalone: true,
  imports: [ 
      MatButtonModule  // 4. Add to imports
  ],
  templateUrl: './food-cost.component.html',
  styleUrl: './food-cost.component.scss',
})
export class FoodCostComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
// let energyChart, costChart, generateCharts;

// function calculate() {
//     const years = parseInt(document.getElementById('inputYears').value);
//     const weight = parseFloat(document.getElementById('inputWeight').value);
//     const kcalToJ = 4184; 
//     const secondsPerDay = 86400;


//     // Step 1: Daily need
//     const dailyNeed = 24 * weight * 1.5; // kcal/day
//     const totalKcal = dailyNeed * 365 * years;
//     // Daily kcal
//     const dailyUnits = dailyNeed / 1000;

//     // Daily costs
//     const dailyStaple = dailyUnits * 4; 
//     const dailyMixed = dailyUnits * 10; 
//     const dailyPremium = dailyUnits * 16;

//     // 2) Average power over the whole period 
//     const totalJoules = totalKcal * kcalToJ; 
//     const totalSeconds = years * 365 * secondsPerDay;
//     const dailyWatts = (totalKcal * 4184) / totalSeconds;

//     // 1) Total energy 
//     const totalKWh = (totalKcal * kcalToJ) / 3_600_000; 
//     const totalMWh = totalKWh / 1000;

//     // 3) Households 
//     const kWhPerHouseholdYear = 10_000; 
//     const householdYears = totalKWh / kWhPerHouseholdYear;

//     // Step 2: Consumed (+20%)
//     const consumed = totalKcal * 1.20;

//     // Step 3: Purchased (÷ (1 - 0.19))
//     const purchased = consumed / (1 - 0.19);

//     // Step 4: Produced (÷ (1 - 0.132))
//     const produced = purchased / (1 - 0.132);
//     const highMW = ((produced * kcalToJ) / 3_600_00) / 10_000;

//     // Step 5: Cost ranges (€ per 1000 kcal)
//     const units = purchased / 1000;
//     const stapleCost = units * 4;
//     const mixedCost = units * 10;
//     const premiumCost = units * 16;

//     // Formatters 
//     const fmt0 = n => n.toLocaleString(undefined, { maximumFractionDigits: 0 }); 
//     const fmt2 = n => n.toLocaleString(undefined, { maximumFractionDigits: 2 });
//     generateCharts = document.getElementById('generateChartCheck').checked;

//     document.getElementById('output').innerHTML = `
//     <h4 style="text-align:center;">Results for ${years} years at ${weight} kg</h4>

//     <ul style="font-size: 1.4rem; font-weight: 400; line-height: 1.7; padding-left: 1.2rem;">
//         <li>Metabolic need: ${fmt0(dailyNeed)} kcal/day => ${fmt0(dailyWatts)} watts</li>
//         <li>Overall (${fmt0(years)}) years need: ${fmt0(totalKcal)} kcal/total => ${fmt2(totalMWh)} MWh</li>
//         <ul>
//             <li><i class="bi bi-house-fill" style="margin-right:6px;"></i>≈ ${fmt0(householdYears)} average households powered for a year.</li>
//         </ul>
//         <li>Actual consumed (+20% over consumption): ${fmt0(consumed)} kcal</li>
//         <li>Purchased (+15% waste): ${fmt0(purchased)} kcal</li>
//         <li>Produced (+17% over production): ${fmt0(produced)} kcal => ${fmt2(highMW)} MW</li>
//         <ul>
//             <li>≈ ${(highMW*1000/kWhPerHouseholdYear).toFixed(0)} average households powered for a year.</li>
//         </ul>
//     </ul>

//     <h4 class="mt-4">Estimated food cost over ${years} years</h4>

//     <ul style="font-size: 1.4rem; font-weight: 400; line-height: 1.7; padding-left: 1.2rem;">
//         <li>Staple-heavy diet (€4/1000 kcal): €${fmt0(stapleCost)} → €${fmt0(dailyStaple)} /day</li>
//         <li>Mixed EU diet (€10/1000 kcal): €${fmt0(mixedCost)} → €${fmt0(dailyMixed)} /day</li>
//         <li>Premium diet (€16/1000 kcal): €${fmt0(premiumCost)} → €${fmt0(dailyPremium)} /day</li>
//     </ul>
//     `;
    
//     if (generateCharts) {
//         // --- Energy Chart ---
//         const energyData = [totalKcal, consumed, purchased, produced];
//         const energyLabels = ["Need", "Consumed", "Purchased", "Produced"];

//         if (energyChart) energyChart.destroy();
//         energyChart = new Chart(document.getElementById('energyChart'), {
//         type: 'bar',
//         data: {
//             labels: energyLabels,
//             datasets: [{
//             label: 'Calories (millions)',
//             data: energyData.map(v => v / 1e6),
//             backgroundColor: ['#4caf50','#2196f3','#ff9800','#f44336']
//             }]
//         },
//         options: {
//             plugins: { title: { display: true, text: 'Food Energy Stages (millions kcal)' } },
//             scales: { y: { beginAtZero: true } }
//         }
//         });

//         // --- Cost Chart ---
//         const costData = [stapleCost, mixedCost, premiumCost];
//         const costLabels = ["Staple", "Mixed EU", "Premium"];

//         if (costChart) costChart.destroy();
//         costChart = new Chart(document.getElementById('costChart'), {
//         type: 'bar',
//         data: {
//             labels: costLabels,
//             datasets: [{
//             label: 'Cost (€)',
//             data: costData.map(v => v / 1000), // show in thousands €
//             backgroundColor: ['#8bc34a','#03a9f4','#e91e63','#9c27b0','#673ab7']
//             }]
//         },
//         options: {
//             plugins: { title: { display: true, text: 'Food Cost Ranges (thousands €)' } },
//             scales: { y: { beginAtZero: true } }
//         }
//         });
//     }
// }

// function validateForm() { 
//     const years = document.getElementById('inputYears').value; 
//     const weight = document.getElementById('inputWeight').value; 
//     const btn = document.getElementById('calculateBtn'); 
//     // Enable only if both fields contain numbers 
//     if (years.trim() !== "" && weight.trim() !== "" && !isNaN(years) && !isNaN(weight)) { 
//         btn.disabled = false; 
//     } else { 
//         btn.disabled = true; 
//     } 
// } 
// // Attach listeners 
// document.getElementById('inputYears').addEventListener('input', validateForm); 
// document.getElementById('inputWeight').addEventListener('input', validateForm);
// document.getElementById('energyChart').style.display = generateCharts ? 'block' : 'none';
// document.getElementById('costChart').style.display = generateCharts ? 'block' : 'none';
}
